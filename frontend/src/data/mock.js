// Mock data for Donors Link application with enhanced images

export const mockDisasters = [
  {
    id: 1,
    title: "Turkey-Syria Earthquake Relief",
    description: "Supporting earthquake victims across Turkey and Syria with emergency aid, medical supplies, and shelter assistance.",
    location: "Turkey & Syria",
    urgency: "Critical",
    raised: 2450000,
    target: 5000000,
    image: "https://images.unsplash.com/photo-1728320771441-17a19df0fe4c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwyfHxkaXNhc3RlciUyMHJlbGllZnxlbnwwfHx8fDE3NTUyNjAyNjF8MA&ixlib=rb-4.1.0&q=85",
    governmentWallet: "0x742d35Cc6Ca7C0532D0d6C0532D0d6C0532D0d6C",
    category: "Natural Disaster"
  },
  {
    id: 2,
    title: "Morocco Earthquake Emergency Fund", 
    description: "Immediate relief for families affected by the devastating earthquake in Morocco's Atlas Mountains region.",
    location: "Morocco",
    urgency: "High",
    raised: 1200000,
    target: 3000000,
    image: "https://images.unsplash.com/photo-1541710005980-7ea80ff232d6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHw0fHxkaXNhc3RlciUyMHJlbGllZnxlbnwwfHx8fDE3NTUyNjAyNjF8MA&ixlib=rb-4.1.0&q=85",
    governmentWallet: "0x853e46Dd7Ba8D1Fa4E3Ce6D1Fa4E3Ce6D1Fa4E3C",
    category: "Natural Disaster"
  },
  {
    id: 3,
    title: "Ukraine Humanitarian Crisis",
    description: "Providing essential supplies, medical aid, and shelter for displaced families in Ukraine.",
    location: "Ukraine",
    urgency: "Critical",
    raised: 8750000,
    target: 15000000,
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxjaGFyaXR5fGVufDB8fHx8MTc1NTI2MDI2NXww&ixlib=rb-4.1.0&q=85",
    governmentWallet: "0x964f57Ee8Cb9E2Gb5F4Df7E2Gb5F4Df7E2Gb5F4D",
    category: "Humanitarian Crisis"
  },
  {
    id: 4,
    title: "Pakistan Flood Relief 2024",
    description: "Emergency assistance for communities devastated by severe flooding across Pakistan.",
    location: "Pakistan", 
    urgency: "High",
    raised: 890000,
    target: 2500000,
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwyfHxjaGFyaXR5fGVufDB8fHx8MTc1NTI2MDI2NXww&ixlib=rb-4.1.0&q=85",
    governmentWallet: "0xa75g68Ff9Dc0F3Hc6G5Eg8F3Hc6G5Eg8F3Hc6G5E",
    category: "Natural Disaster"
  }
];

// Additional images for various sections
export const heroImages = {
  background: "https://images.unsplash.com/photo-1639322537228-f710d846310a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWlufGVufDB8fHx8MTc1NTI2MDI2OXww&ixlib=rb-4.1.0&q=85",
  blockchain: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwyfHxibG9ja2NoYWlufGVufDB8fHx8MTc1NTI2MDI2OXww&ixlib=rb-4.1.0&q=85",
  crypto: "https://images.unsplash.com/photo-1640161704729-cbe966a08476?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwzfHxibG9ja2NoYWlufGVufDB8fHx8MTc1NTI2MDI2OXww&ixlib=rb-4.1.0&q=85"
};

export const featureImages = {
  charity: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwzfHxjaGFyaXR5fGVufDB8fHx8MTc1NTI2MDI2NXww&ixlib=rb-4.1.0&q=85",
  blockchain3D: "https://images.unsplash.com/photo-1639815188546-c43c240ff4df?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHw0fHxibG9ja2NoYWlufGVufDB8fHx8MTc1NTI2MDI2OXww&ixlib=rb-4.1.0&q=85"
};

export const mockConversionRates = {
  USD: {
    USDT: 1.00,
    ETH: 0.000432
  },
  EUR: {
    USDT: 1.08,
    ETH: 0.000467
  },
  GBP: {
    USDT: 1.25,
    ETH: 0.000540
  },
  CAD: {
    USDT: 0.74,
    ETH: 0.000320
  }
};

export const mockDonations = [
  {
    id: "TXN001",
    disasterId: 1,
    amount: 250,
    currency: "USD",
    cryptoAmount: 250,
    cryptoType: "USDT",
    status: "completed",
    timestamp: "2024-01-15T10:30:00Z",
    blockchainHash: "0xabcd1234567890efgh",
    governmentConfirmed: true
  },
  {
    id: "TXN002", 
    disasterId: 2,
    amount: 500,
    currency: "EUR",
    cryptoAmount: 0.216,
    cryptoType: "ETH",
    status: "processing",
    timestamp: "2024-01-14T15:45:00Z",
    blockchainHash: "0xefgh5678901234abcd",
    governmentConfirmed: false
  }
];

export const mockTrackingUpdates = [
  {
    step: 1,
    title: "Donation Initiated",
    description: "Your donation has been received and is being processed",
    completed: true,
    timestamp: "2024-01-15T10:30:00Z"
  },
  {
    step: 2,
    title: "Blockchain Verification",
    description: "Transaction recorded on blockchain for transparency",
    completed: true,
    timestamp: "2024-01-15T10:32:15Z"
  },
  {
    step: 3,
    title: "Government Wallet Transfer",
    description: "Funds transferred to verified government disaster relief wallet",
    completed: true,
    timestamp: "2024-01-15T10:35:22Z"
  },
  {
    step: 4,
    title: "Aid Distribution",
    description: "Government has confirmed receipt and begun aid distribution",
    completed: false,
    timestamp: null
  }
];

// Simulate API delays and responses
export const simulateApiDelay = (ms = 1500) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export const generateMockTransactionId = () => {
  return 'TXN' + Date.now().toString().slice(-6);
};

export const generateMockBlockchainHash = () => {
  const chars = '0123456789abcdef';
  let hash = '0x';
  for (let i = 0; i < 18; i++) {
    hash += chars[Math.floor(Math.random() * chars.length)];
  }
  return hash;
};