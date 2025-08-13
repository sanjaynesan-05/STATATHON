export const ROUTES = {
  LOGIN: '/login',
  DASHBOARD: '/dashboard',
  RISK_ASSESSMENT: '/risk-assessment',
  PRIVACY_ENHANCEMENT: '/privacy-enhancement',
  UTILITY_MEASUREMENT: '/utility-measurement',
  REPORTING_CONFIG: '/reporting-config',
  DATA_RELEASE: '/data-release',
};

export const PIPELINE_STEPS = [
  { id: 1, name: 'Data Upload', route: ROUTES.RISK_ASSESSMENT, completed: false },
  { id: 2, name: 'Risk Assessment', route: ROUTES.RISK_ASSESSMENT, completed: false },
  { id: 3, name: 'Privacy Enhancement', route: ROUTES.PRIVACY_ENHANCEMENT, completed: false },
  { id: 4, name: 'Utility Measurement', route: ROUTES.UTILITY_MEASUREMENT, completed: false },
  { id: 5, name: 'Compliance Check', route: ROUTES.REPORTING_CONFIG, completed: false },
  { id: 6, name: 'Data Release', route: ROUTES.DATA_RELEASE, completed: false },
];

export const PRIVACY_METHODS = {
  SDC: 'Statistical Disclosure Control',
  DIFFERENTIAL: 'Differential Privacy',
  SYNTHETIC: 'Synthetic Data Generation'
};

export const COMPLIANCE_FRAMEWORKS = [
  'DPDP Act 2023',
  'IT Act 2000',
  'Statistical Act 2008',
  'RTI Act 2005'
];