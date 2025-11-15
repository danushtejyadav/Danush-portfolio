import React, { useState } from 'react';
import { Mail, Github, Linkedin, Sparkles, Loader2, Copy, Send } from 'lucide-react'; // <-- Import Send
import { portfolioData } from '../../data/portfolioData';
import { callGeminiAPI } from '../../api/gemini';
import { copyToClipboard } from '../../lib/clipboard';
import { useAnimateOnScroll } from '../../hooks/useAnimateOnScroll';
import { Section } from '../layout/Section';
import { SectionTitle } from '../ui/SectionTitle';

export const Contact = React.forwardRef((props, ref) => {
  const [animRef, isVisible] = useAnimateOnScroll({ threshold: 0.3 });
  const [draft, setDraft] = useState("");
  const [isDraftLoading, setIsDraftLoading] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  const handleGenerateDraft = async (topic) => {
    setIsDraftLoading(true);
    setDraft("");
    const systemInstruction = `You are a helpful assistant for a visitor on a portfolio website. The portfolio belongs to ${portfolioData.name}, a ${portfolioData.headline}. Draft a concise, professional, and friendly message from the visitor to ${portfolioData.name}. Start the message with "Hi ${portfolioData.name}," and leave a blank for the visitor's name. Do not include a subject line or any preamble. Just return the message draft.`;
    const prompt = `Draft a message about: "${topic}"`;

    const newDraft = await callGeminiAPI(prompt, systemInstruction);
    setDraft(newDraft);
    setIsDraftLoading(false);
  };

  const handleCopy = () => {
    if (copyToClipboard(draft)) {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    }
  };

  return (
    <Section ref={ref} id="contact">
      <SectionTitle>Get In Touch</SectionTitle>
      <div
        ref={animRef}
        className={`contact-content ${isVisible ? 'is-visible' : ''}`}
      >
        <p className="contact-intro">
          I'm always open to discussing new projects, creative ideas, or opportunities. Feel free to reach out directly or use the AI helper below to draft a message!
        </p>

        {/* Contact Links */}
        <a
          href={`mailto:${portfolioData.email}`}
          className="contact-email-link"
        >
          <Mail size={24} className="contact-email-icon" />
          {portfolioData.email}
        </a>
        <div className="contact-socials">
          <a
            href={portfolioData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social-link"
          >
            <Github size={32} />
          </a>
          <a
            href={portfolioData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social-link"
          >
            <Linkedin size={32} />
          </a>
        </div>

        {/* Gemini Feature */}
        <div className="contact-gemini-feature">
          <h4 className="contact-gemini-title">Need help breaking the ice?</h4>
          <div className="gemini-buttons">
            <button
              onClick={() => handleGenerateDraft("A job opportunity at my company")}
              disabled={isDraftLoading}
              className="gemini-button"
            >
              <Sparkles size={16} className="gemini-button-icon" />
              Draft Recruiting Message
            </button>
            <button
              onClick={() => handleGenerateDraft("A potential collaboration on a project")}
              disabled={isDraftLoading}
              className="gemini-button"
            >
              <Sparkles size={16} className="gemini-button-icon" />
              Draft Collaboration Idea
            </button>
          </div>

          {isDraftLoading && (
            <div className="draft-loader-text">
              <Loader2 size={20} className="loader-spin gemini-button-icon" />
              <span>Generating draft...</span>
            </div>
          )}

          {/* --- UPDATED BLOCK --- */}
          {draft && !isDraftLoading && (
            <div className="draft-results-container">
              <div className="draft-textarea-wrapper">
                <textarea
                  readOnly
                  value={draft}
                  className="draft-textarea"
                />
                <button
                  onClick={handleCopy}
                  className="draft-copy-button"
                >
                  {copySuccess ? "Copied!" : <Copy size={16} />}
                </button>
              </div>
              <a
                href={`mailto:${portfolioData.email}?subject=${encodeURIComponent("Portfolio Inquiry")}&body=${encodeURIComponent(draft)}`}
                className="gemini-button mailto-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Send size={16} className="gemini-button-icon" />
                Open in Email Client
              </a>
            </div>
          )}
          {/* --- END OF UPDATE --- */}

        </div>
      </div>
    </Section>
  );
});