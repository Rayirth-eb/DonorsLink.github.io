import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { mockDisasters, heroImages } from '../data/mock';
import { Play, Shield, Zap, Globe, ArrowRight, AlertTriangle, TrendingUp, Users, Target } from 'lucide-react';

const HomePage = () => {
  const [disasters, setDisasters] = useState([]);
  const [stats, setStats] = useState({
    totalRaised: 0,
    activeCampaigns: 0,
    countries: 0
  });

  useEffect(() => {
    // Simulate loading disasters
    setTimeout(() => {
      setDisasters(mockDisasters);
      
      // Calculate stats
      const totalRaised = mockDisasters.reduce((sum, disaster) => sum + disaster.raised, 0);
      setStats({
        totalRaised,
        activeCampaigns: mockDisasters.length,
        countries: mockDisasters.length
      });
    }, 500);
  }, []);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getProgressPercentage = (raised, target) => {
    return Math.min((raised / target) * 100, 100);
  };

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case 'Critical': return 'text-red-400';
      case 'High': return 'text-orange-400';
      default: return 'text-yellow-400';
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Enhanced Hero Section with Background */}
      <section className="hero-section-enhanced">
        <div className="hero-background">
          <img src={heroImages.blockchain} alt="Blockchain Technology" className="hero-bg-image" />
          <div className="hero-overlay"></div>
        </div>
        
        <div className="dark-content-container">
          <div className="hero-content-enhanced">
            <div className="hero-text">
              <h1 className="display-huge mb-6">
                Where Transparency
                <br />
                <span className="text-brand-primary">Meets Generosity</span>
              </h1>
              <p className="body-large mb-8 max-w-2xl">
                Restoring trust in online donations using blockchain smart contracts. 
                Every donation is secure, transparent, and reaches the right cause.
              </p>
              
              <div className="hero-buttons">
                <a href="#disasters" className="btn-primary dark-button-animate">
                  <Play className="w-5 h-5" />
                  Try the Demo
                </a>
                <a href="#how-it-works" className="btn-secondary dark-button-animate">
                  Learn How It Works
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>

              {/* Enhanced Demo Disclaimer */}
              <div className="demo-disclaimer-enhanced">
                <Shield className="w-5 h-5 text-brand-primary" />
                <span className="body-small">
                  All transactions on this site are for demonstration purposes only
                </span>
              </div>
            </div>

            {/* Enhanced Stats Section */}
            <div className="hero-stats-enhanced">
              <div className="stat-card-enhanced">
                <div className="stat-icon">
                  <Target className="w-8 h-8 text-brand-primary" />
                </div>
                <div className="stat-number">{formatCurrency(stats.totalRaised)}</div>
                <div className="stat-label">Total Raised (Demo)</div>
              </div>
              <div className="stat-card-enhanced">
                <div className="stat-icon">
                  <AlertTriangle className="w-8 h-8 text-warning" />
                </div>
                <div className="stat-number">{stats.activeCampaigns}</div>
                <div className="stat-label">Active Campaigns</div>
              </div>
              <div className="stat-card-enhanced">
                <div className="stat-icon">
                  <Globe className="w-8 h-8 text-info" />
                </div>
                <div className="stat-number">{stats.countries}</div>
                <div className="stat-label">Countries Helped</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Current Disasters Section */}
      <section id="disasters" className="disasters-section-enhanced">
        <div className="dark-content-container">
          <div className="section-header">
            <h2 className="display-medium mb-4">Current Disasters Needing Help</h2>
            <p className="body-medium mb-12 max-w-3xl">
              Support ongoing relief efforts around the world. Each campaign is verified and 
              connected directly to government disaster relief wallets.
            </p>
          </div>

          <div className="disasters-grid-enhanced">
            {disasters.map((disaster) => (
              <div key={disaster.id} className="disaster-card-enhanced glass-card glass-card-hover">
                <div className="disaster-image-enhanced">
                  <img src={disaster.image} alt={disaster.title} />
                  <div className="urgency-badge-enhanced">
                    <AlertTriangle className="w-4 h-4" />
                    <span className={`text-sm font-medium ${getUrgencyColor(disaster.urgency)}`}>
                      {disaster.urgency}
                    </span>
                  </div>
                  <div className="image-overlay"></div>
                </div>

                <div className="disaster-content-enhanced">
                  <div className="disaster-meta">
                    <span className="category-tag-enhanced">{disaster.category}</span>
                    <span className="location-tag-enhanced">{disaster.location}</span>
                  </div>

                  <h3 className="heading-2 mb-3">{disaster.title}</h3>
                  <p className="body-small mb-4 text-text-secondary">
                    {disaster.description}
                  </p>

                  {/* Enhanced Progress Bar */}
                  <div className="progress-section-enhanced">
                    <div className="progress-header">
                      <span className="body-small font-medium">
                        {formatCurrency(disaster.raised)} raised
                      </span>
                      <span className="body-small text-text-muted">
                        of {formatCurrency(disaster.target)}
                      </span>
                    </div>
                    <div className="progress-bar-enhanced">
                      <div 
                        className="progress-fill-enhanced"
                        style={{ width: `${getProgressPercentage(disaster.raised, disaster.target)}%` }}
                      ></div>
                    </div>
                    <div className="progress-percentage">
                      {Math.round(getProgressPercentage(disaster.raised, disaster.target))}% funded
                    </div>
                  </div>

                  <Link 
                    to={`/donate/${disaster.id}`}
                    className="btn-primary w-full mt-6 dark-button-animate justify-center"
                  >
                    Donate Now
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced How It Works Section */}
      <section id="how-it-works" className="how-it-works-enhanced">
        <div className="dark-content-container">
          <div className="section-header text-center">
            <h2 className="display-medium mb-4">How Donors Link Works</h2>
            <p className="body-medium mb-16 max-w-3xl mx-auto">
              Our blockchain-powered platform ensures every donation is secure, transparent, and reaches its intended destination.
            </p>
          </div>

          <div className="steps-grid-enhanced">
            <div className="step-card-enhanced glass-card glass-card-hover">
              <div className="step-number-enhanced">01</div>
              <div className="step-icon-enhanced">
                <TrendingUp className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="heading-3 mb-3">Enter Donation Amount</h3>
              <p className="body-small text-text-secondary">
                Choose your preferred currency and donation amount. Our system shows real-time conversion rates to USDT and ETH.
              </p>
            </div>

            <div className="step-card-enhanced glass-card glass-card-hover">
              <div className="step-number-enhanced">02</div>
              <div className="step-icon-enhanced">
                <Zap className="w-8 h-8 text-brand-accent" />
              </div>
              <h3 className="heading-3 mb-3">Automatic Conversion</h3>
              <p className="body-small text-text-secondary">
                Smart contracts instantly convert your donation to cryptocurrency, ensuring stability and transparency.
              </p>
            </div>

            <div className="step-card-enhanced glass-card glass-card-hover">
              <div className="step-number-enhanced">03</div>
              <div className="step-icon-enhanced">
                <Shield className="w-8 h-8 text-success" />
              </div>
              <h3 className="heading-3 mb-3">Direct Transfer</h3>
              <p className="body-small text-text-secondary">
                Funds are sent directly to verified government disaster relief wallets without any intermediaries.
              </p>
            </div>

            <div className="step-card-enhanced glass-card glass-card-hover">
              <div className="step-number-enhanced">04</div>
              <div className="step-icon-enhanced">
                <Globe className="w-8 h-8 text-info" />
              </div>
              <h3 className="heading-3 mb-3">Track & Verify</h3>
              <p className="body-small text-text-secondary">
                Monitor your donation's journey with real-time blockchain tracking and government confirmation updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;