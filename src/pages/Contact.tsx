import { useState } from "react";
import type { FormEvent } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Loader2,
  CheckCircle,
  AlertCircle,
  Github,
  Linkedin,
  Download,
  Paperclip,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    requestType: "Project repository access",
    message: "",
  });
  const [attachment, setAttachment] = useState<File | null>(null);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    if (attachment && attachment.size > 8 * 1024 * 1024) {
      setStatus("error");
      setErrorMessage("Attachment must be 8 MB or smaller.");
      return;
    }

    const apiBaseUrl = (import.meta.env.VITE_API_URL ?? "").replace(/\/$/, "");

    try {
      const payload = new FormData();
      payload.append("name", formData.name);
      payload.append("email", formData.email);
      payload.append("request_type", formData.requestType);
      payload.append("message", formData.message);
      if (attachment) payload.append("attachment", attachment);

      const response = await fetch(`${apiBaseUrl}/api/contact`, {
        method: "POST",
        body: payload,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.detail || "Failed to send");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        requestType: "Project repository access",
        message: "",
      });
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Failed to send. Please email me directly at thwalathembinkosi16@gmail.com"
      );
    }
  };

  return (
    <section className="section" data-testid="contact-section">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-primary uppercase tracking-widest text-sm font-medium">
          Get In Touch
        </span>
        <h2
          className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white"
          data-testid="contact-title"
        >
          Let's Build Something <span className="text-gradient">Amazing</span>
        </h2>
        <p className="mt-6 text-lg text-muted">
          <strong className="text-white">
            Looking for a Junior Full-Stack Developer?
          </strong>{" "}
          I'm available for exciting opportunities! Have a project in mind, want
          to collaborate, or just want to say hello? I'd love to hear from you!
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
        {/* Contact Info */}
        <div className="lg:col-span-2 space-y-8">
          <div className="space-y-4">
            <InfoCard
              icon={<Mail size={20} />}
              title="Email"
              value="thwalathembinkosi16@gmail.com"
              href="mailto:thwalathembinkosi16@gmail.com"
            />
            <InfoCard
              icon={<Phone size={20} />}
              title="Phone"
              value="064 802 3069"
              href="tel:+27648023069"
            />
            <InfoCard
              icon={<MapPin size={20} />}
              title="Location"
              value="Ennerdale, Johannesburg, 1830"
            />
          </div>

          {/* Social Links */}
          <div className="card p-6">
            <h3 className="font-display font-semibold text-lg mb-4 text-white">
              Connect With Me
            </h3>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/thembinkosi-eden-thwala-69083a1a4"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="contact-linkedin"
                className="w-12 h-12 rounded-xl bg-surface border border-white/5 flex items-center justify-center text-muted hover:text-primary hover:border-primary/30 transition-all hover:scale-105"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="https://github.com/PixieStack"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="contact-github"
                className="w-12 h-12 rounded-xl bg-surface border border-white/5 flex items-center justify-center text-muted hover:text-primary hover:border-primary/30 transition-all hover:scale-105"
                aria-label="GitHub"
              >
                <Github size={22} />
              </a>
            </div>
          </div>

          {/* CV Download */}
          <div className="card p-6">
            <h3 className="font-display font-semibold text-lg mb-4 text-white">
              Download My CV
            </h3>
            <p className="text-muted text-sm mb-4">
              Get a detailed overview of my experience, skills, and
              qualifications.
            </p>
            <a
              href={`${import.meta.env.BASE_URL}cv/Thembinkosi-Eden-Thwala-Resume.pdf`}
              download="Thembinkosi-Eden-Thwala-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="contact-cv-download"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple to-purple-dark text-white font-medium text-sm shadow-glow-purple hover:scale-105 transition-transform"
            >
              <Download size={18} />
              Download CV (PDF)
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-3">
          <div className="card p-8 md:p-10" data-testid="contact-form-card">
            <h3 className="font-display font-semibold text-2xl mb-6 text-white">
              Send Me a Message
            </h3>

            {status === "success" ? (
              <div className="text-center py-12" data-testid="contact-success">
                <div className="w-20 h-20 mx-auto rounded-full bg-emerald-500/20 flex items-center justify-center mb-6">
                  <CheckCircle size={40} className="text-emerald-500" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">
                  Message Sent!
                </h4>
                <p className="text-muted">
                  Thank you for reaching out. I'll get back to you within 24-48
                  hours!
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 px-6 py-3 rounded-xl bg-surface border border-white/10 text-white font-medium hover:border-primary/30 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
                data-testid="contact-form"
              >
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-muted-light mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="John Doe"
                    data-testid="contact-name-input"
                    className="w-full px-5 py-4 rounded-xl bg-surface border border-white/10 text-white placeholder-muted focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-muted-light mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="john@example.com"
                    data-testid="contact-email-input"
                    className="w-full px-5 py-4 rounded-xl bg-surface border border-white/10 text-white placeholder-muted focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>

                {/* Request Type */}
                <div>
                  <label className="block text-sm font-medium text-muted-light mb-2">
                    What are you contacting me about?
                  </label>
                  <select
                    name="requestType"
                    required
                    value={formData.requestType}
                    onChange={(e) =>
                      setFormData({ ...formData, requestType: e.target.value })
                    }
                    data-testid="contact-request-type-select"
                    className="w-full px-5 py-4 rounded-xl bg-surface border border-white/10 text-white focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
                  >
                    <option value="Project repository access">Project repository access</option>
                    <option value="Technical samples">Technical samples</option>
                    <option value="Project walkthrough">Project walkthrough</option>
                    <option value="Application demo">Application demo</option>
                    <option value="Recruitment opportunity">Recruitment opportunity</option>
                    <option value="Collaboration">Collaboration</option>
                    <option value="General enquiry">General enquiry</option>
                  </select>
                </div>
                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-muted-light mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell me about your project or opportunity..."
                    data-testid="contact-message-input"
                    className="w-full px-5 py-4 rounded-xl bg-surface border border-white/10 text-white placeholder-muted focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                  />
                </div>

                {/* Optional Attachment */}
                <div>
                  <label className="block text-sm font-medium text-muted-light mb-2">
                    Optional attachment
                  </label>
                  <label className="flex items-center gap-3 w-full px-5 py-4 rounded-xl bg-surface border border-dashed border-white/15 text-muted-light hover:border-primary/40 cursor-pointer transition-colors">
                    <Paperclip size={20} className="text-primary flex-shrink-0" />
                    <span className="min-w-0 truncate">
                      {attachment ? attachment.name : "Attach a PDF, Word document or image"}
                    </span>
                    <input
                      key={attachment?.name ?? "empty"}
                      type="file"
                      name="attachment"
                      accept=".pdf,.doc,.docx,.png,.jpg,.jpeg,.webp"
                      onChange={(e) => setAttachment(e.target.files?.[0] ?? null)}
                      data-testid="contact-attachment-input"
                      className="sr-only"
                    />
                  </label>
                  <p className="mt-2 text-xs text-muted">PDF, DOC, DOCX, JPG, PNG or WebP. Maximum 8 MB.</p>
                </div>
                {/* Error */}
                {status === "error" && (
                  <div
                    className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20"
                    data-testid="contact-error"
                  >
                    <AlertCircle size={20} className="text-red-500" />
                    <span className="text-red-400 text-sm">{errorMessage}</span>
                  </div>
                )}

                {/* Send */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  data-testid="contact-submit-btn"
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-white font-semibold bg-gradient-to-r from-primary to-primary-dark shadow-glow hover:scale-[1.02] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon,
  title,
  value,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div
      className="card p-5 flex items-center gap-4 card-hover"
      data-testid={`contact-info-${title.toLowerCase()}`}
    >
      <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-sm text-muted">{title}</p>
        <p className="font-medium text-white">{value}</p>
      </div>
    </div>
  );

  return href ? (
    <a href={href} className="block hover:scale-[1.02] transition-transform">
      {content}
    </a>
  ) : (
    content
  );
}
