import Link from 'next/link';
import Button from '@/Components/Button';
import UploadArea from '@/Components/UploadArea';

export default function HomePage() {
  return (
    <div className="homepage">
      <section className="hero-section">
        <div className="container hero-content">
          <div className="hero-left">
            <h1 className="hero-title">
              Transform Documents & Images into{' '}
              <span className="hero-accent">Actionable Insights</span>
            </h1>
            <p className="hero-description">
              Upload any PDF or image and get smart summaries, key points, and improvement suggestions. Perfect for reports, contracts, research papers, and more.
            </p>
          </div>
          <div className="hero-right">
            <UploadArea variant="compact" />
            <div className="hero-actions">
               <p style={{fontSize: '14px', color: '#666', marginTop: '10px', textAlign: 'center'}}>
             Drope you file, Supported formats: PDF, JPEG, PNG. 📤<br />
              No account needed. We do not store your documents or history. 
            </p>
             
            </div>
          </div>
        </div>
      </section>
      
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Why Choose Our AI Assistant?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon feature-icon-blue">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="icon-svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 4H7a2 2 0 01-2-2V6a2 2 0 012-2h5l5 5v9a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3>Smart Analysis</h3>
              <p>Advanced text extraction from PDFs, scanned documents, and images with high accuracy.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon feature-icon-green">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="icon-svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <h3>AI-Powered OCR</h3>
              <p>Cutting-edge AI technology with OCR capabilities that understands both text and visual content.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon feature-icon-yellow">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="icon-svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3>Lightning Fast</h3>
              <p>Get your summaries in seconds, not minutes. Optimized for speed across all formats.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon feature-icon-purple">📚</div>
              <h3>Multiple Formats & Lengths</h3>
              <p>Support for PDFs, JPEG, PNG images. Choose from short, medium, or long summaries.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon feature-icon-red">🔐</div>
              <h3>Privacy First</h3>
              <p>We do not store the documents details or the history.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon feature-icon-orange">🤳🏼</div>
              <h3>Easy to Use</h3>
              <p>User-friendly interface designed for everyone. No technical skills required.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
