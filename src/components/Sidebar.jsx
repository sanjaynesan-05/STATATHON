import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '../utils/constants';
import {
  ChartBarIcon,
  ShieldCheckIcon,
  EyeSlashIcon,
  ChartPieIcon,
  DocumentCheckIcon,
  CloudArrowUpIcon
} from '@heroicons/react/24/outline';

const menuItems = [
  { name: 'Dashboard', path: ROUTES.DASHBOARD, icon: ChartBarIcon },
  { name: 'Risk Assessment', path: ROUTES.RISK_ASSESSMENT, icon: ShieldCheckIcon },
  { name: 'Privacy Enhancement', path: ROUTES.PRIVACY_ENHANCEMENT, icon: EyeSlashIcon },
  { name: 'Utility Measurement', path: ROUTES.UTILITY_MEASUREMENT, icon: ChartPieIcon },
  { name: 'Compliance Report', path: ROUTES.REPORTING_CONFIG, icon: DocumentCheckIcon },
  { name: 'Data Release', path: ROUTES.DATA_RELEASE, icon: CloudArrowUpIcon },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-gradient-to-b from-primary-700 to-primary-800 shadow-xl z-40">
      <div className="p-6">
        <nav className="space-y-2">
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'bg-white text-primary-700 shadow-lg transform scale-105'
                    : 'text-white hover:bg-primary-600 hover:transform hover:scale-105'
                }`}
              >
                <IconComponent className="h-5 w-5" />
                <span className="font-medium">{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>
      
      {/* Pipeline Status */}
      <div className="absolute bottom-6 left-6 right-6">
        <div className="bg-primary-600 bg-opacity-50 rounded-lg p-4">
          <h3 className="text-white font-semibold text-sm mb-2">Pipeline Status</h3>
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-white">
              <span>Progress</span>
              <span>3/6 Complete</span>
            </div>
            <div className="w-full bg-primary-800 rounded-full h-2">
              <div className="bg-gold-500 h-2 rounded-full" style={{ width: '50%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}