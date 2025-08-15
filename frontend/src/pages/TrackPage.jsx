import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { mockTrackingUpdates, simulateApiDelay, generateMockBlockchainHash } from '../data/mock';
import { ArrowLeft, CheckCircle, Clock, ExternalLink, Copy, Shield, AlertCircle } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const TrackPage = () => {
  const { transactionId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [trackingData, setTrackingData] = useState(mockTrackingUpdates);
  const [donation, setDonation] = useState(null);
  const [blockchainHash, setBlockchainHash] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeTracking = async () => {
      setLoading(true);
      
      // Get donation data from navigation state or create mock data
      const donationData = location.state || {
        disaster: {
          title: "Demo Disaster Relief",
          location: "Demo Location",
          governmentWallet: "0x742d35Cc6Ca7C0532D0d6C0532D0d6C0532D0d6C"
        },
        amount: 100,
        currency: "USD",
        cryptoAmount: "100.00",
        cryptoType: "USDT"
      };
      
      setDonation(donationData);
      setBlockchainHash(generateMockBlockchainHash());
      
      // Simulate loading
      await simulateApiDelay(1500);
      setLoading(false);
      
      // Simulate step completion
      setTimeout(() => {
        setTrackingData(prev => prev.map((step, index) => 
          index < 4 ? { ...step, completed: true, timestamp: new Date().toISOString() } : step
        ));
      }, 3000);
    };

    initializeTracking();
  }, [location.state]);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard",
      description: "Transaction details have been copied.",
    });
  };

  const formatCurrency = (amount, currency = 'USD') => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
    }).format(amount);
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'Pending';
    return new Date(dateString).toLocaleString();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black">
        <Header />
        <div className="flex items-center justify-center min-h-[70vh]">
          <div className="text-center">
            <div className="loading-spinner mb-4"></div>
            <h2 className="heading-2 mb-2">Loading Transaction Details</h2>
            <p className="body-medium text-text-secondary">
              Retrieving your donation information from the blockchain...
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <div className="track-page">
        <div className="dark-content-container">
          {/* Back Button */}
          <button 
            onClick={() => navigate('/')}
            className="btn-secondary mb-8 dark-button-animate"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>

          <div className="track-layout">
            {/* Left: Transaction Details */}
            <div className="transaction-details">
              <div className="detail-card">
                <h1 className="display-medium mb-6">Track Your Donation</h1>
                
                {/* Transaction ID */}
                <div className="detail-section mb-6">
                  <h3 className="heading-3 mb-3">Transaction ID</h3>
                  <div className="id-display">
                    <span className="font-mono text-brand-primary">{transactionId}</span>
                    <button 
                      onClick={() => copyToClipboard(transactionId)}
                      className="copy-btn"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Donation Summary */}
                <div className="detail-section mb-6">
                  <h3 className="heading-3 mb-3">Donation Summary</h3>
                  <div className="summary-grid">
                    <div className="summary-item">
                      <span className="summary-label">Disaster</span>
                      <span className="summary-value">{donation?.disaster?.title}</span>
                    </div>
                    <div className="summary-item">
                      <span className="summary-label">Location</span>
                      <span className="summary-value">{donation?.disaster?.location}</span>
                    </div>
                    <div className="summary-item">
                      <span className="summary-label">Amount Donated</span>
                      <span className="summary-value">
                        {formatCurrency(donation?.amount, donation?.currency)}
                      </span>
                    </div>
                    <div className="summary-item">
                      <span className="summary-label">Crypto Amount</span>
                      <span className="summary-value text-brand-primary">
                        {donation?.cryptoAmount} {donation?.cryptoType}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Blockchain Details */}
                <div className="detail-section mb-6">
                  <h3 className="heading-3 mb-3">Blockchain Details</h3>
                  <div className="blockchain-info">
                    <div className="blockchain-item">
                      <span className="blockchain-label">Transaction Hash</span>
                      <div className="blockchain-value">
                        <span className="font-mono text-sm">{blockchainHash}</span>
                        <button 
                          onClick={() => copyToClipboard(blockchainHash)}
                          className="copy-btn"
                        >
                          <Copy className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <div className="blockchain-item">
                      <span className="blockchain-label">Government Wallet</span>
                      <div className="blockchain-value">
                        <span className="font-mono text-sm">{donation?.disaster?.governmentWallet}</span>
                        <ExternalLink className="w-4 h-4 text-text-muted" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Demo Notice */}
                <div className="demo-notice">
                  <Shield className="w-5 h-5 text-brand-primary" />
                  <div>
                    <p className="body-small font-medium">Demo Transaction</p>
                    <p className="text-sm text-text-muted">
                      This is a simulated transaction for demonstration purposes. No real funds were transferred.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Tracking Progress */}
            <div className="tracking-progress">
              <div className="progress-card">
                <h2 className="heading-2 mb-6">Donation Progress</h2>
                
                <div className="progress-timeline">
                  {trackingData.map((step, index) => (
                    <div key={step.step} className={`timeline-item ${step.completed ? 'completed' : 'pending'}`}>
                      <div className="timeline-marker">
                        {step.completed ? (
                          <CheckCircle className="w-6 h-6 text-brand-primary" />
                        ) : (
                          <Clock className="w-6 h-6 text-text-muted" />
                        )}
                      </div>
                      
                      <div className="timeline-content">
                        <h4 className="heading-3 mb-1">{step.title}</h4>
                        <p className="body-small text-text-secondary mb-2">
                          {step.description}
                        </p>
                        <span className="timestamp">
                          {formatDate(step.timestamp)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Current Status */}
                <div className="current-status mt-8">
                  <div className="status-header">
                    <AlertCircle className="w-5 h-5 text-brand-primary" />
                    <span className="heading-3">Current Status</span>
                  </div>
                  <p className="body-medium text-text-secondary mt-2">
                    Your donation has been successfully processed and transferred to the government relief wallet. 
                    Aid distribution is expected to begin within 24-48 hours.
                  </p>
                </div>

                {/* Actions */}
                <div className="tracking-actions mt-8">
                  <button 
                    onClick={() => navigate('/')}
                    className="btn-primary w-full dark-button-animate justify-center"
                  >
                    Make Another Donation
                  </button>
                  <button 
                    onClick={() => copyToClipboard(window.location.href)}
                    className="btn-secondary w-full mt-3 dark-button-animate justify-center"
                  >
                    <Copy className="w-4 h-4" />
                    Share Tracking Link
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TrackPage;