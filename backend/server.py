import os
import asyncio
import logging
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr

load_dotenv()

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI(title="Thembinkosi Portfolio API")

# CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Resend setup
RESEND_API_KEY = os.environ.get("RESEND_API_KEY")
SENDER_EMAIL = os.environ.get("SENDER_EMAIL", "onboarding@resend.dev")
MY_EMAIL = "thwalathembinkosi16@gmail.com"
MY_NAME = "Thembinkosi Eden Thwala"

class ContactRequest(BaseModel):
    name: str
    email: EmailStr
    message: str

@app.get("/api/health")
async def health_check():
    return {"status": "healthy", "message": "Portfolio API is running"}

@app.post("/api/contact")
async def send_contact_email(request: ContactRequest):
    if not RESEND_API_KEY:
        raise HTTPException(status_code=500, detail="Email service not configured. Please add RESEND_API_KEY.")
    
    import resend
    resend.api_key = RESEND_API_KEY
    
    # Email 1: Notification to me
    notification_html = f"""
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body {{ font-family: 'Segoe UI', Arial, sans-serif; background: #f8fafc; margin: 0; padding: 20px; }}
            .container {{ max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }}
            .header {{ background: linear-gradient(135deg, #F97316 0%, #C084FC 100%); padding: 30px; text-align: center; }}
            .header h1 {{ color: white; margin: 0; font-size: 24px; }}
            .content {{ padding: 30px; }}
            .field {{ margin-bottom: 20px; }}
            .label {{ color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px; }}
            .value {{ color: #1e293b; font-size: 16px; }}
            .message-box {{ background: #f1f5f9; padding: 20px; border-radius: 8px; border-left: 4px solid #F97316; }}
            .footer {{ background: #f8fafc; padding: 20px; text-align: center; color: #64748b; font-size: 12px; }}
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>New Contact Form Submission</h1>
            </div>
            <div class="content">
                <div class="field">
                    <div class="label">From</div>
                    <div class="value">{request.name}</div>
                </div>
                <div class="field">
                    <div class="label">Email</div>
                    <div class="value"><a href="mailto:{request.email}" style="color: #F97316;">{request.email}</a></div>
                </div>
                <div class="field">
                    <div class="label">Message</div>
                    <div class="message-box">{request.message}</div>
                </div>
            </div>
            <div class="footer">
                Sent from your portfolio contact form
            </div>
        </div>
    </body>
    </html>
    """
    
    # Email 2: Receipt/Confirmation to sender
    receipt_html = f"""
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body {{ font-family: 'Segoe UI', Arial, sans-serif; background: #f8fafc; margin: 0; padding: 20px; }}
            .container {{ max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }}
            .header {{ background: linear-gradient(135deg, #F97316 0%, #C084FC 100%); padding: 40px 30px; text-align: center; }}
            .header h1 {{ color: white; margin: 0; font-size: 28px; font-weight: 600; }}
            .header p {{ color: rgba(255,255,255,0.9); margin: 10px 0 0; font-size: 14px; }}
            .content {{ padding: 40px 30px; }}
            .greeting {{ font-size: 18px; color: #1e293b; margin-bottom: 20px; }}
            .message {{ color: #475569; line-height: 1.7; margin-bottom: 25px; }}
            .your-message {{ background: #f8fafc; padding: 20px; border-radius: 8px; margin: 25px 0; border-left: 4px solid #F97316; }}
            .your-message-label {{ color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px; }}
            .your-message-text {{ color: #334155; font-style: italic; }}
            .signature {{ margin-top: 35px; padding-top: 25px; border-top: 1px solid #e2e8f0; }}
            .signature-name {{ color: #1e293b; font-weight: 600; font-size: 16px; margin-bottom: 5px; }}
            .signature-title {{ color: #F97316; font-size: 14px; margin-bottom: 5px; }}
            .signature-email {{ color: #64748b; font-size: 14px; }}
            .footer {{ background: #0A0A0F; padding: 25px; text-align: center; }}
            .footer p {{ color: #94a3b8; font-size: 12px; margin: 0; }}
            .footer a {{ color: #F97316; text-decoration: none; }}
            .social-links {{ margin-top: 15px; }}
            .social-links a {{ display: inline-block; margin: 0 10px; color: #94a3b8; text-decoration: none; font-size: 12px; }}
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>Thank You for Reaching Out!</h1>
                <p>I've received your message</p>
            </div>
            <div class="content">
                <p class="greeting">Hello {request.name},</p>
                
                <p class="message">
                    Thank you so much for taking the time to contact me through my portfolio website. 
                    I truly appreciate your interest and I'm excited to connect with you!
                </p>
                
                <p class="message">
                    I have received your message and will review it carefully. You can expect to hear 
                    back from me within <strong>24-48 hours</strong>. If your matter is urgent, feel free 
                    to reach out to me directly via phone.
                </p>
                
                <div class="your-message">
                    <div class="your-message-label">Your Message</div>
                    <div class="your-message-text">"{request.message}"</div>
                </div>
                
                <p class="message">
                    In the meantime, feel free to explore more of my work on my 
                    <a href="https://github.com/PixieStack" style="color: #F97316;">GitHub</a> or connect 
                    with me on <a href="https://www.linkedin.com/in/thembinkosi-eden-thwala-69083a1a4" style="color: #F97316;">LinkedIn</a>.
                </p>
                
                <div class="signature">
                    <div class="signature-name">{MY_NAME}</div>
                    <div class="signature-title">Junior Full Stack Developer & Data Analyst</div>
                    <div class="signature-email">
                        <a href="mailto:{MY_EMAIL}" style="color: #64748b;">{MY_EMAIL}</a> | 
                        <a href="tel:+27648023069" style="color: #64748b;">064 802 3069</a>
                    </div>
                </div>
            </div>
            <div class="footer">
                <p>© 2026 {MY_NAME}. All rights reserved.</p>
                <div class="social-links">
                    <a href="https://github.com/PixieStack">GitHub</a> |
                    <a href="https://www.linkedin.com/in/thembinkosi-eden-thwala-69083a1a4">LinkedIn</a> |
                    <a href="https://pixiestack.github.io/porfolio/">Portfolio</a>
                </div>
            </div>
        </div>
    </body>
    </html>
    """
    
    try:
        # Send notification to me
        notification_params = {
            "from": SENDER_EMAIL,
            "to": [MY_EMAIL],
            "reply_to": request.email,
            "subject": f"Portfolio Contact: {request.name}",
            "html": notification_html
        }
        await asyncio.to_thread(resend.Emails.send, notification_params)
        logger.info(f"Notification email sent to {MY_EMAIL}")
        
        # Send receipt to sender
        receipt_params = {
            "from": SENDER_EMAIL,
            "to": [request.email],
            "subject": f"Thank You for Contacting Me, {request.name}!",
            "html": receipt_html
        }
        await asyncio.to_thread(resend.Emails.send, receipt_params)
        logger.info(f"Receipt email sent to {request.email}")
        
        return {
            "status": "success",
            "message": "Thank you! Your message has been sent and you'll receive a confirmation email shortly."
        }
    except Exception as e:
        logger.error(f"Failed to send email: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Failed to send email: {str(e)}")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001)
