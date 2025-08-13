export const riskAssessmentData = {
  overallRisk: {
    level: 'HIGH',
    score: 8.2,
    color: '#ef4444'
  },
  riskCategories: [
    {
      category: 'Identity Disclosure',
      risk: 7.8,
      records: 2340,
      description: 'Risk of identifying individuals through quasi-identifiers'
    },
    {
      category: 'Attribute Disclosure',
      risk: 8.5,
      records: 1890,
      description: 'Risk of inferring sensitive attributes'
    },
    {
      category: 'Membership Disclosure',
      risk: 6.2,
      records: 567,
      description: 'Risk of determining dataset membership'
    }
  ],
  linkageAnalysis: {
    externalDatasets: [
      { name: 'Census 2021', similarity: 0.78, records: 12000 },
      { name: 'Voter Registry', similarity: 0.65, records: 8900 },
      { name: 'AADHAAR Database', similarity: 0.89, records: 15600 }
    ],
    vulnerableFields: ['Age', 'ZIP Code', 'Education', 'Occupation']
  },
  recommendations: [
    'Apply k-anonymity with k ≥ 5 for quasi-identifiers',
    'Suppress or generalize high-risk records',
    'Consider differential privacy for aggregate statistics',
    'Implement additional anonymization for vulnerable fields'
  ]
};

export const uploadedDatasets = [
  {
    id: 1,
    name: 'household_survey_2024.csv',
    size: '25.6 MB',
    records: 45230,
    uploadDate: '2024-01-15T10:30:00Z',
    status: 'processed',
    riskLevel: 'HIGH'
  },
  {
    id: 2,
    name: 'employment_data_Q1.xlsx',
    size: '12.8 MB',
    records: 28790,
    uploadDate: '2024-01-14T16:45:00Z',
    status: 'processing',
    riskLevel: 'MEDIUM'
  }
];