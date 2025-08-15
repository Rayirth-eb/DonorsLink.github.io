import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { mockDisasters, mockConversionRates, simulateApiDelay, generateMockTransactionId } from '../data/mock';
import { ArrowLeft, Zap, Shield, AlertTriangle, ArrowRight, Loader2, CheckCircle } from 'lucide-react';

const DonatePage = () => {
  const { disasterId } = useParams();
  const navigate = useNavigate();
  
  const [disaster, setDisaster] = useState(null);
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [cryptoType, setCryptoType] = useState('USDT');
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1); // 1: Amount, 2: Conversion, 3: Processing
  const [conversionRates, setConversionRates] = useState(mockConversionRates);

  useEffect(() => {
    const foundDisaster = mockDisasters.find(d => d.id === parseInt(disasterId));
    if (!foundDisaster) {
      navigate('/');
      return;
    }
    setDisaster(foundDisaster);
  }, [disasterId, navigate]);

  const getCryptoAmount = () => {
    if (!amount || !conversionRates[currency]) return 0;
    return (parseFloat(amount) * conversionRates[currency][cryptoType]).toFixed(6);
  };

  const handleCurrencyChange = (newCurrency) => {
    setCurrency(newCurrency);
  };

  const handleCryptoChange = (newCrypto) => {
    setCryptoType(newCrypto);
  };

  const handleNextStep = () => {
    if (!amount || parseFloat(amount) <= 0) return;
    setStep(2);
  };

  const handleDonate = async () => {
    setLoading(true);
    setStep(3);
    
    // Simulate blockchain processing
    await simulateApiDelay(3000);
    
    const transactionId = generateMockTransactionId();
    
    setLoading(false);
    navigate(`/track/${transactionId}`, {
      state: {
        disaster,
        amount: parseFloat(amount),
        currency,
        cryptoAmount: getCryptoAmount(),
        cryptoType
      }
    });
  };

  const formatCurrency = (amount, curr = currency) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: curr,
    }).format(amount);
  };

  if (!disaster) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-brand-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <div className="donate-page">
        <div className="dark-content-container">
          {/* Back Button */}
          <button 
            onClick={() => navigate('/')}
            className="btn-secondary mb-8 dark-button-animate"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Disasters
          </button>

          <div className="donate-layout">
            {/* Left: Disaster Info */}
            <div className="disaster-info">
              <div className="disaster-image-large">
                <img src={disaster.image} alt={disaster.title} />
                <div className="urgency-overlay">
                  <AlertTriangle className="w-5 h-5" />
                  <span className="font-medium">{disaster.urgency} Priority</span>
                </div>
              </div>

              <div className="disaster-details">
                <div className="disaster-meta">
                  <span className="category-tag">{disaster.category}</span>
                  <span className="location-tag">{disaster.location}</span>
                </div>

                <h1 className="display-medium mb-4">{disaster.title}</h1>
                <p className="body-medium mb-6 text-text-secondary">
                  {disaster.description}
                </p>

                <div className="disaster-stats">
                  <div className="stat-item">
                    <span className="stat-label">Government Wallet</span>
                    <span className="stat-value font-mono text-sm">
                      {disaster.governmentWallet}
                    </span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Total Raised</span>
                    <span className="stat-value">
                      {formatCurrency(disaster.raised)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Donation Form */}
            <div className="donation-form">
              {/* Step Indicator */}
              <div className="step-indicator">
                <div className={`step ${step >= 1 ? 'active' : ''}`}>
                  <span>1</span>
                  <span>Amount</span>
                </div>
                <div className={`step ${step >= 2 ? 'active' : ''}`}>
                  <span>2</span>
                  <span>Convert</span>
                </div>
                <div className={`step ${step >= 3 ? 'active' : ''}`}>
                  <span>3</span>
                  <span>Process</span>
                </div>
              </div>

              {step === 1 && (
                <div className="form-step">
                  <h2 className="heading-2 mb-6">Enter Donation Amount</h2>
                  
                  {/* Currency Selection */}
                  <div className="currency-selector mb-6">
                    <label className="body-small mb-2 block">Select Currency</label>
                    <div className="currency-grid">
                      {Object.keys(conversionRates).map((curr) => (
                        <button
                          key={curr}
                          onClick={() => handleCurrencyChange(curr)}
                          className={`currency-btn ${currency === curr ? 'active' : ''}`}
                        >
                          {curr}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Amount Input */}
                  <div className="amount-input mb-6">
                    <label className="body-small mb-2 block">Amount</label>
                    <div className="input-wrapper">
                      <span className="currency-symbol">{currency}</span>
                      <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="0.00"
                        className="amount-field"
                        min="1"
                        step="1"
                      />
                    </div>
                  </div>

                  {/* Quick Amount Buttons */}
                  <div className="quick-amounts mb-8">
                    <span className="body-small mb-3 block">Quick Select</span>
                    <div className="quick-grid">
                      {[25, 50, 100, 250].map((quickAmount) => (
                        <button
                          key={quickAmount}
                          onClick={() => setAmount(quickAmount.toString())}
                          className="quick-btn"
                        >
                          {formatCurrency(quickAmount)}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button 
                    onClick={handleNextStep}
                    disabled={!amount || parseFloat(amount) <= 0}
                    className="btn-primary w-full dark-button-animate justify-center"
                  >
                    Continue to Conversion
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="form-step">
                  <h2 className="heading-2 mb-6">Review & Convert</h2>
                  
                  {/* Conversion Display */}
                  <div className="conversion-display mb-6">
                    <div className="conversion-row">
                      <span className="body-medium">You're donating:</span>
                      <span className="heading-3">{formatCurrency(parseFloat(amount))}</span>
                    </div>
                    <div className="conversion-arrow">
                      <Zap className="w-6 h-6 text-brand-primary" />
                    </div>
                    <div className="conversion-row">
                      <span className="body-medium">Converts to:</span>
                      <span className="heading-3 text-brand-primary">
                        {getCryptoAmount()} {cryptoType}
                      </span>
                    </div>
                  </div>

                  {/* Crypto Selection */}
                  <div className="crypto-selector mb-8">
                    <label className="body-small mb-3 block">Convert to:</label>
                    <div className="crypto-options">
                      <button
                        onClick={() => handleCryptoChange('USDT')}
                        className={`crypto-btn ${cryptoType === 'USDT' ? 'active' : ''}`}
                      >
                        <div className="crypto-info">
                          <span className="crypto-name">USDT</span>
                          <span className="crypto-desc">Stable Coin</span>
                        </div>
                        <span className="crypto-rate">
                          1 {currency} = {conversionRates[currency]?.USDT} USDT
                        </span>
                      </button>
                      <button
                        onClick={() => handleCryptoChange('ETH')}
                        className={`crypto-btn ${cryptoType === 'ETH' ? 'active' : ''}`}
                      >
                        <div className="crypto-info">
                          <span className="crypto-name">ETH</span>
                          <span className="crypto-desc">Ethereum</span>
                        </div>
                        <span className="crypto-rate">
                          1 {currency} = {conversionRates[currency]?.ETH} ETH
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* Security Notice */}
                  <div className="security-notice mb-8">
                    <Shield className="w-5 h-5 text-brand-primary" />
                    <div>
                      <p className="body-small font-medium">Secure Smart Contract Transfer</p>
                      <p className="text-sm text-text-muted">
                        Funds will be sent directly to verified government wallet: {disaster.governmentWallet}
                      </p>
                    </div>
                  </div>

                  <div className="form-actions">
                    <button 
                      onClick={() => setStep(1)}
                      className="btn-secondary dark-button-animate"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Back
                    </button>
                    <button 
                      onClick={handleDonate}
                      className="btn-primary dark-button-animate flex-1"
                    >
                      Donate Now
                      <CheckCircle className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="form-step text-center">
                  <div className="processing-animation mb-6">
                    <Loader2 className="w-16 h-16 animate-spin text-brand-primary mx-auto" />
                  </div>
                  <h2 className="heading-2 mb-4">Processing Your Donation</h2>
                  <p className="body-medium text-text-secondary mb-6">
                    Your donation is being processed through our secure blockchain network. 
                    This may take a few moments.
                  </p>
                  <div className="processing-steps">
                    <div className="processing-step completed">
                      <CheckCircle className="w-5 h-5 text-brand-primary" />
                      <span>Smart Contract Initiated</span>
                    </div>
                    <div className="processing-step completed">
                      <CheckCircle className="w-5 h-5 text-brand-primary" />
                      <span>Currency Converted</span>
                    </div>
                    <div className="processing-step active">
                      <Loader2 className="w-5 h-5 animate-spin text-brand-primary" />
                      <span>Transferring to Government Wallet</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DonatePage;