export const privacyEnhancementData = {
  methods: {
    SDC: {
      name: 'Statistical Disclosure Control',
      description: 'Traditional anonymization methods',
      techniques: [
        { name: 'Suppression', applied: true, impact: 'Low utility loss' },
        { name: 'Generalization', applied: true, impact: 'Medium utility loss' },
        { name: 'Noise Addition', applied: false, impact: 'Variable utility loss' }
      ],
      parameters: {
        kAnonymity: 5,
        lDiversity: 3,
        suppressionThreshold: 0.05
      }
    },
    DIFFERENTIAL: {
      name: 'Differential Privacy',
      description: 'Mathematically provable privacy guarantee',
      techniques: [
        { name: 'Laplace Mechanism', applied: true, impact: 'Controlled noise' },
        { name: 'Exponential Mechanism', applied: false, impact: 'Selection privacy' },
        { name: 'Gaussian Mechanism', applied: true, impact: 'Composition bounds' }
      ],
      parameters: {
        epsilon: 1.0,
        delta: 1e-5,
        sensitivity: 2.0
      }
    },
    SYNTHETIC: {
      name: 'Synthetic Data Generation',
      description: 'Generate artificial data preserving statistical properties',
      techniques: [
        { name: 'GAN-based', applied: true, impact: 'High fidelity' },
        { name: 'Bayesian Networks', applied: false, impact: 'Interpretable' },
        { name: 'Copula-based', applied: false, impact: 'Dependency preservation' }
      ],
      parameters: {
        epochs: 1000,
        batchSize: 64,
        learningRate: 0.0002
      }
    }
  },
  preview: {
    originalSample: [
      { age: 34, income: 75000, education: 'Masters', zipcode: '110001' },
      { age: 28, income: 45000, education: 'Bachelors', zipcode: '110023' },
      { age: 42, income: 95000, education: 'PhD', zipcode: '110067' }
    ],
    enhancedSample: [
      { age: '30-35', income: '70000-80000', education: 'Masters', zipcode: '1100**' },
      { age: '25-30', income: '40000-50000', education: 'Bachelors', zipcode: '1100**' },
      { age: '40-45', income: '90000-100000', education: 'PhD', zipcode: '1100**' }
    ]
  }
};