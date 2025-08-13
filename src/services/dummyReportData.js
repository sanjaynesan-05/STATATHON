export const reportingData = {
  compliance: {
    DPDP: {
      name: 'Digital Personal Data Protection Act 2023',
      status: 'COMPLIANT',
      score: 0.89,
      checklist: [
        { item: 'Lawful basis for processing', status: 'pass', description: 'Statistical purpose under Section 8(1)(d)' },
        { item: 'Data minimization principle', status: 'pass', description: 'Only necessary fields retained' },
        { item: 'Purpose limitation', status: 'pass', description: 'Used only for official statistics' },
        { item: 'Technical safeguards', status: 'warning', description: 'Enhanced anonymization recommended' }
      ]
    },
    IT_ACT: {
      name: 'Information Technology Act 2000',
      status: 'COMPLIANT',
      score: 0.92,
      checklist: [
        { item: 'Data security measures', status: 'pass', description: 'Encryption and access controls in place' },
        { item: 'Audit trail maintenance', status: 'pass', description: 'Complete processing logs maintained' },
        { item: 'Breach notification', status: 'pass', description: 'Incident response procedures defined' }
      ]
    }
  },
  thresholds: {
    riskThreshold: 7.5,
    utilityThreshold: 0.7,
    kAnonymity: 5,
    epsilonBudget: 1.0
  },
  audit: {
    timestamp: '2024-01-15T14:30:00Z',
    processor: 'Dr. Sarah Kumar',
    reviewer: 'Amit Sharma',
    approvalStatus: 'PENDING',
    comments: 'Risk assessment completed. Privacy enhancement applied. Ready for review.'
  }
};