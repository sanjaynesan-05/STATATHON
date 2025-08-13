export const dataReleaseData = {
  dataset: {
    id: 'MOSPI-HHS-2024-001',
    title: 'Household Health Survey 2024 - Anonymized Data',
    description: 'Comprehensive health indicators from national household survey with privacy-preserving anonymization',
    version: '1.2.0',
    releaseDate: '2024-01-15',
    size: '18.4 MB',
    records: 45230,
    format: 'CSV, JSON, XLSX'
  },
  metadata: {
    geographical: 'Pan-India (28 states, 8 UTs)',
    temporal: 'January - December 2024',
    demographic: 'All age groups, income levels',
    methodology: 'Stratified random sampling',
    confidentiality: 'Public use with statistical disclosure control'
  },
  licenses: [
    {
      id: 'open',
      name: 'Open Data License',
      description: 'Free to use with attribution',
      restrictions: ['Attribution required', 'Non-commercial research preferred']
    },
    {
      id: 'academic',
      name: 'Academic Research License',
      description: 'For academic and research institutions',
      restrictions: ['Institutional affiliation required', 'Publication acknowledgment mandatory']
    },
    {
      id: 'government',
      name: 'Government Use License',
      description: 'For government agencies and departments',
      restrictions: ['Government entity verification', 'Official use only']
    }
  ],
  downloadStats: {
    totalDownloads: 1547,
    lastMonthDownloads: 234,
    topUsers: ['IISc Bangalore', 'JNU Delhi', 'ISI Kolkata', 'State Planning Commission']
  }
};