import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Heart, Shield, Eye } from 'lucide-react';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="dark-header">
      <div className="dark-content-container">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 bg-brand-primary rounded-sm">
              <Heart className="w-6 h-6 text-black" />
            </div>
            <span className="heading-2 text-brand-primary">Donors Link</span>
          </Link>

          {/* Navigation */}
          <nav className="dark-nav hidden md:flex">
            <Link to="/" className="dark-nav-link nav-text">
              Home
            </Link>
            <a href="#disasters" className="dark-nav-link nav-text">
              Current Disasters
            </a>
            <a href="#how-it-works" className="dark-nav-link nav-text">
              How It Works
            </a>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate('/track/demo')}
              className="btn-secondary dark-button-animate flex items-center gap-2"
            >
              <Eye className="w-4 h-4" />
              Track Demo
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

// Header styles
const headerStyles = `
.dark-header {
  background: var(--bg-primary);
  border-bottom: 1px solid var(--border-subtle);
  padding: 16px 0;
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  z-index: 50;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.dark-nav {
  display: flex;
  align-items: center;
  gap: 32px;
}

.dark-nav-link {
  color: var(--text-muted);
  text-decoration: none;
  font-size: 18px;
  font-weight: 400;
  transition: color 0.3s ease;
}

.dark-nav-link:hover {
  color: var(--text-primary);
}

.dark-nav-link.active {
  color: var(--brand-active);
}

@media (max-width: 767px) {
  .dark-header {
    padding: 16px 20px;
    height: 70px;
  }
  
  .dark-nav {
    display: none;
  }
}
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = headerStyles;
  document.head.appendChild(styleSheet);
}

export default Header;