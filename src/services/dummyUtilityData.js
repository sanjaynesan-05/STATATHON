export const utilityMeasurementData = {
  overallUtility: {
    score: 0.782,
    grade: 'B+',
    interpretation: 'Good utility preservation with acceptable privacy trade-off'
  },
  metrics: {
    distributionSimilarity: 0.85,
    correlationPreservation: 0.73,
    statisticalAccuracy: 0.78,
    queryAccuracy: 0.81
  },
  chartData: {
    distributionComparison: [
      { attribute: 'Age', original: 0.89, enhanced: 0.84 },
      { attribute: 'Income', original: 0.92, enhanced: 0.79 },
      { attribute: 'Education', original: 0.95, enhanced: 0.88 },
      { attribute: 'Location', original: 0.87, enhanced: 0.72 }
    ],
    correlationMatrix: {
      original: [
        [1.00, 0.65, 0.78, 0.43],
        [0.65, 1.00, 0.56, 0.39],
        [0.78, 0.56, 1.00, 0.52],
        [0.43, 0.39, 0.52, 1.00]
      ],
      enhanced: [
        [1.00, 0.62, 0.74, 0.38],
        [0.62, 1.00, 0.53, 0.35],
        [0.74, 0.53, 1.00, 0.48],
        [0.38, 0.35, 0.48, 1.00]
      ]
    },
    utilityTimeline: [
      { step: 'Original', utility: 1.0, privacy: 0.0 },
      { step: 'Suppression', utility: 0.92, privacy: 0.3 },
      { step: 'Generalization', utility: 0.85, privacy: 0.6 },
      { step: 'Noise Addition', utility: 0.78, privacy: 0.8 }
    ]
  }
};