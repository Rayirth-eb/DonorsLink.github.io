import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Shield, Globe, Lock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="dark-footer">
      <div className="dark-content-container">
        <div className="footer-content">
          {/* Logo and Description */}
          <div className="footer-section">
            <Link to="/" className="footer-logo">
              <div className="flex items-center justify-center w-10 h-10 bg-brand-primary rounded-sm">
                <Heart className="w-6 h-6 text-black" />
              </div>
              <span className="heading-3 text-brand-primary">Donors Link</span>
            </Link>
            <p className="body-small mt-4 max-w-sm">
              Restoring trust in online donations through blockchain transparency and smart contract security.
            </p>
            <div className="demo-badge">
              <Shield className="w-4 h-4" />
              <span className="text-sm">Demo Site - All transactions are simulated</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="heading-3 mb-4">Quick Links</h4>
            <nav className="footer-nav">
              <Link to="/" className="footer-link">Home</Link>
              <a href="#disasters" className="footer-link">Current Disasters</a>
              <a href="#how-it-works" className="footer-link">How It Works</a>
              <Link to="/track/demo" className="footer-link">Track Demo</Link>
            </nav>
          </div>

          {/* Features */}
          <div className="footer-section">
            <h4 className="heading-3 mb-4">Why Blockchain?</h4>
            <div className="feature-list">
              <div className="feature-item">
                <Lock className="w-4 h-4 text-brand-primary" />
                <span className="body-small">Tamper-Proof Transactions</span>
              </div>
              <div className="feature-item">
                <Globe className="w-4 h-4 text-brand-primary" />
                <span className="body-small">Global Accessibility</span>
              </div>
              <div className="feature-item">
                <Shield className="w-4 h-4 text-brand-primary" />
                <span className="body-small">Fraud Prevention</span>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div className="footer-section">
            <h4 className="heading-3 mb-4">Legal</h4>
            <nav className="footer-nav">
              <a href="#" className="footer-link">Privacy Policy</a>
              <a href="#" className="footer-link">Terms of Service</a>
              <a href="#" className="footer-link">Contact Us</a>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="body-muted">
            © 2024 Donors Link. This is a demonstration website. All data and transactions are simulated for testing purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Footer styles
const footerStyles = `
.dark-footer {
  background: var(--bg-primary);
  border-top: 1px solid var(--border-subtle);
  padding: 60px 0 20px;
  margin-top: 100px;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 40px;
}

.footer-section {
  display: flex;
  flex-direction: column;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  margin-bottom: 16px;
}

.footer-nav {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-link {
  color: var(--text-muted);
  text-decoration: none;
  font-size: 16px;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: var(--text-primary);
}

.demo-badge {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.1);
  padding: 8px 12px;
  border-radius: 4px;
  margin-top: 16px;
  color: var(--brand-primary);
  max-width: fit-content;
}

.feature-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.footer-bottom {
  border-top: 1px solid var(--border-subtle);
  padding-top: 20px;
  text-align: center;
}

@media (max-width: 767px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .dark-footer {
    padding: 40px 0 20px;
  }
}
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = footerStyles;
  document.head.appendChild(styleSheet);
}

export default Footer;