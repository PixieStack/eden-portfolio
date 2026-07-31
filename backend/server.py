import asyncio
import base64
import html
import json
import logging
import os
from urllib.error import HTTPError, URLError
from urllib.request import Request, urlopen

from dotenv import load_dotenv
from fastapi import FastAPI, File, Form, HTTPException, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from pydantic import EmailStr

load_dotenv()
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI(title="Thembinkosi Portfolio API")

allowed_origins = [
    origin.strip()
    for origin in os.environ.get(
        "ALLOWED_ORIGINS",
        "http://localhost:3000,http://127.0.0.1:3000,http://localhost:5173,http://127.0.0.1:5173,https://pixiestack.github.io",
    ).split(",")
    if origin.strip()
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=False,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["Content-Type"],
)

BREVO_API_KEY = os.environ.get("BREVO_API_KEY")
BREVO_API_URL = "https://api.brevo.com/v3/smtp/email"
SENDER_EMAIL = os.environ.get("BREVO_SENDER_EMAIL", "edenthwala@gmail.com")
SENDER_NAME = os.environ.get("BREVO_SENDER_NAME", "Thembinkosi Eden Thwala")
RECIPIENT_EMAIL = os.environ.get("CONTACT_RECIPIENT_EMAIL", "thwalathembinkosi16@gmail.com")
PORTFOLIO_URL = os.environ.get("PORTFOLIO_URL", "https://pixiestack.github.io/eden-portfolio/")
MAX_ATTACHMENT_BYTES = 8 * 1024 * 1024
ALLOWED_ATTACHMENT_TYPES = {
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "image/jpeg",
    "image/png",
    "image/webp",
}
ALLOWED_ATTACHMENT_EXTENSIONS = {".pdf", ".doc", ".docx", ".jpg", ".jpeg", ".png", ".webp"}


def email_shell(title: str, subtitle: str, body: str) -> str:
    return f"""
    <!doctype html>
    <html lang="en">
      <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"></head>
      <body style="margin:0;background:#0a0a0f;font-family:Arial,'Segoe UI',sans-serif;color:#e5e7eb;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#0a0a0f;padding:32px 16px;">
          <tr><td align="center">
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;background:#15151f;border:1px solid #2a2a3a;border-radius:20px;overflow:hidden;box-shadow:0 18px 50px rgba(0,0,0,.35);">
              <tr><td style="padding:34px 32px;background:linear-gradient(135deg,#f97316,#c084fc);">
                <div style="font-size:12px;letter-spacing:2px;text-transform:uppercase;color:#fff7ed;margin-bottom:10px;">Thembinkosi Eden Thwala | Portfolio</div>
                <h1 style="margin:0;color:#ffffff;font-size:28px;line-height:1.25;">{title}</h1>
                <p style="margin:10px 0 0;color:#fff7ed;font-size:15px;">{subtitle}</p>
              </td></tr>
              <tr><td style="padding:32px;">{body}</td></tr>
              <tr><td style="padding:22px 32px;background:#101018;border-top:1px solid #2a2a3a;color:#94a3b8;font-size:12px;text-align:center;">
                Sent securely from <a href="{PORTFOLIO_URL}" style="color:#fb923c;text-decoration:none;">my portfolio</a>
              </td></tr>
            </table>
          </td></tr>
        </table>
      </body>
    </html>
    """


def send_brevo_email(payload: dict) -> None:
    request = Request(
        BREVO_API_URL,
        data=json.dumps(payload).encode("utf-8"),
        headers={"accept": "application/json", "api-key": BREVO_API_KEY or "", "content-type": "application/json"},
        method="POST",
    )
    try:
        with urlopen(request, timeout=20) as response:
            if response.status not in (200, 201, 202):
                raise RuntimeError(f"Brevo returned HTTP {response.status}")
    except HTTPError as exc:
        detail = exc.read().decode("utf-8", errors="replace")
        raise RuntimeError(f"Brevo returned HTTP {exc.code}: {detail}") from exc
    except URLError as exc:
        raise RuntimeError("Unable to connect to Brevo") from exc


@app.get("/api/health")
async def health_check():
    return {"status": "healthy", "message": "Portfolio API is running"}


@app.post("/api/contact")
async def send_contact_email(
    name: str = Form(..., min_length=2, max_length=100),
    email: EmailStr = Form(...),
    request_type: str = Form(..., min_length=2, max_length=100),
    message: str = Form(..., min_length=5, max_length=5000),
    attachment: UploadFile | None = File(default=None),
):
    attachment_payload = None
    safe_attachment_name = None
    if attachment and attachment.filename:
        attachment_extension = os.path.splitext(attachment.filename)[1].lower()
        if (
            attachment.content_type not in ALLOWED_ATTACHMENT_TYPES
            and attachment_extension not in ALLOWED_ATTACHMENT_EXTENSIONS
        ):
            raise HTTPException(status_code=415, detail="Attachment must be a PDF, Word document, JPG, PNG or WebP image.")
        attachment_bytes = await attachment.read(MAX_ATTACHMENT_BYTES + 1)
        if len(attachment_bytes) > MAX_ATTACHMENT_BYTES:
            raise HTTPException(status_code=413, detail="Attachment must be 8 MB or smaller.")
        safe_attachment_name = os.path.basename(attachment.filename).replace("\x00", "")[:180]
        attachment_payload = {
            "content": base64.b64encode(attachment_bytes).decode("ascii"),
            "name": safe_attachment_name,
        }

    if not BREVO_API_KEY:
        raise HTTPException(status_code=503, detail="Email service is not configured. Set BREVO_API_KEY on the server.")

    safe_name = html.escape(name)
    safe_email = html.escape(str(email))
    safe_type = html.escape(request_type)
    safe_message = html.escape(message).replace("\n", "<br>")
    attachment_row = (
        f'<tr><td style="color:#94a3b8;font-size:12px;text-transform:uppercase;letter-spacing:1px;padding:18px 0 6px;">Attachment</td></tr>'
        f'<tr><td style="color:#fff;font-size:16px;">{html.escape(safe_attachment_name)}</td></tr>'
        if safe_attachment_name
        else ""
    )

    notification_body = f"""
      <p style="margin:0 0 24px;color:#cbd5e1;line-height:1.7;">A new enquiry was submitted through your portfolio.</p>
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#1e1e2b;border-radius:14px;padding:20px;">
        <tr><td style="color:#94a3b8;font-size:12px;text-transform:uppercase;letter-spacing:1px;padding-bottom:6px;">Name</td></tr>
        <tr><td style="color:#fff;font-size:17px;padding-bottom:18px;">{safe_name}</td></tr>
        <tr><td style="color:#94a3b8;font-size:12px;text-transform:uppercase;letter-spacing:1px;padding-bottom:6px;">Email</td></tr>
        <tr><td style="padding-bottom:18px;"><a href="mailto:{safe_email}" style="color:#fb923c;">{safe_email}</a></td></tr>
        <tr><td style="color:#94a3b8;font-size:12px;text-transform:uppercase;letter-spacing:1px;padding-bottom:6px;">Request type</td></tr>
        <tr><td style="color:#fff;font-size:16px;padding-bottom:18px;">{safe_type}</td></tr>
        <tr><td style="color:#94a3b8;font-size:12px;text-transform:uppercase;letter-spacing:1px;padding-bottom:8px;">Message</td></tr>
        <tr><td style="color:#e2e8f0;line-height:1.7;border-left:4px solid #f97316;padding:14px 16px;background:#181822;border-radius:8px;">{safe_message}</td></tr>
        {attachment_row}
      </table>
    """
    receipt_attachment = (
        f'<p style="margin:0 0 18px;color:#cbd5e1;line-height:1.7;">Attached file received: <strong style="color:#fff;">{html.escape(safe_attachment_name)}</strong></p>'
        if safe_attachment_name
        else ""
    )
    receipt_body = f"""
      <p style="margin:0 0 18px;color:#fff;font-size:18px;">Hello {safe_name},</p>
      <p style="margin:0 0 18px;color:#cbd5e1;line-height:1.7;">Thank you for getting in touch about <strong style="color:#fff;">{safe_type}</strong>. Your request has been received and I will respond within 24-48 hours.</p>
      {receipt_attachment}
      <div style="background:#1e1e2b;border-left:4px solid #c084fc;border-radius:10px;padding:18px;margin:24px 0;">
        <div style="color:#94a3b8;font-size:12px;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">Your message</div>
        <div style="color:#e2e8f0;line-height:1.7;">{safe_message}</div>
      </div>
      <p style="margin:24px 0 5px;color:#fff;font-weight:700;">{SENDER_NAME}</p>
      <p style="margin:0;color:#fb923c;">Full-Stack Developer & Data Analyst</p>
    """

    sender = {"name": SENDER_NAME, "email": SENDER_EMAIL}
    notification = {
        "sender": sender,
        "to": [{"email": RECIPIENT_EMAIL, "name": SENDER_NAME}],
        "replyTo": {"email": str(email), "name": name},
        "subject": f"Portfolio | {request_type} | {name}",
        "htmlContent": email_shell("New portfolio enquiry", request_type, notification_body),
    }
    if attachment_payload:
        notification["attachment"] = [attachment_payload]

    receipt = {
        "sender": sender,
        "to": [{"email": str(email), "name": name}],
        "replyTo": {"email": RECIPIENT_EMAIL, "name": SENDER_NAME},
        "subject": f"Your portfolio request was received, {name}",
        "htmlContent": email_shell("Thank you for reaching out", "Your message has been received", receipt_body),
    }

    try:
        await asyncio.to_thread(send_brevo_email, notification)
        await asyncio.to_thread(send_brevo_email, receipt)
        return {"status": "success", "message": "Your message was sent successfully. A confirmation email is on its way."}
    except Exception as exc:
        logger.exception("Brevo email delivery failed")
        raise HTTPException(status_code=502, detail="Email delivery failed. Please try again later.") from exc


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001)