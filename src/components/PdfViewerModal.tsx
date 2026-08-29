import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { FileText, X } from "lucide-react";

interface PdfViewerModalProps {
  title: string;
  src: string;
  onClose: () => void;
}

export default function PdfViewerModal({ title, src, onClose }: PdfViewerModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center bg-background/90 p-3 backdrop-blur-md sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="pdf-viewer-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="flex h-[94vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-surface shadow-2xl shadow-black/60">
        <div className="flex items-center justify-between gap-4 border-b border-white/10 bg-surface-light/90 px-4 py-3 sm:px-6">
          <div className="flex min-w-0 items-center gap-3">
            <span className="grid h-10 w-10 flex-none place-items-center rounded-xl bg-purple/15 text-purple">
              <FileText size={20} />
            </span>
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-[0.18em] text-muted">Document preview</p>
              <h2 id="pdf-viewer-title" className="truncate font-display text-sm font-semibold text-white sm:text-base">
                {title}
              </h2>
            </div>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="inline-flex flex-none items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-white transition hover:border-primary/40 hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Close PDF viewer"
          >
            <X size={18} />
            <span className="hidden sm:inline">Close</span>
          </button>
        </div>

        <iframe
          src={`${src}#view=FitH&toolbar=1&navpanes=0`}
          title={`${title} PDF`}
          className="min-h-0 flex-1 bg-white"
        />
      </div>
    </div>,
    document.body,
  );
}
