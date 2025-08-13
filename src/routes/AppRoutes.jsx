import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { usePipeline } from '../context/PipelineContext';
import { ROUTES } from '../utils/constants';

// Layout Components
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

// Page Components
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard/Dashboard';
import RiskAssessment from '../pages/RiskAssessment/RiskAssessment';
import PrivacyEnhancement from '../pages/PrivacyEnhancement/PrivacyEnhancement';
import UtilityMeasurement from '../pages/UtilityMeasurement/UtilityMeasurement';
import ReportingConfig from '../pages/ReportingConfiguration/ReportingConfig';
import DataRelease from '../pages/DataRelease/DataRelease';
import NotFound from '../pages/NotFound';

function ProtectedLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Sidebar />
      <main className="ml-64 pt-16">
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}

function ProtectedRoute({ children }) {
  const { state } = usePipeline();

  if (!state.isAuthenticated) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }

  return <ProtectedLayout>{children}</ProtectedLayout>;
}

export default function AppRoutes() {
  const { state } = usePipeline();

  return (
    <Routes>
      {/* Public Routes */}
      <Route 
        path={ROUTES.LOGIN} 
        element={
          state.isAuthenticated ? (
            <Navigate to={ROUTES.DASHBOARD} replace />
          ) : (
            <Login />
          )
        } 
      />

      {/* Protected Routes */}
      <Route
        path={ROUTES.DASHBOARD}
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      
      <Route
        path={ROUTES.RISK_ASSESSMENT}
        element={
          <ProtectedRoute>
            <RiskAssessment />
          </ProtectedRoute>
        }
      />
      
      <Route
        path={ROUTES.PRIVACY_ENHANCEMENT}
        element={
          <ProtectedRoute>
            <PrivacyEnhancement />
          </ProtectedRoute>
        }
      />
      
      <Route
        path={ROUTES.UTILITY_MEASUREMENT}
        element={
          <ProtectedRoute>
            <UtilityMeasurement />
          </ProtectedRoute>
        }
      />
      
      <Route
        path={ROUTES.REPORTING_CONFIG}
        element={
          <ProtectedRoute>
            <ReportingConfig />
          </ProtectedRoute>
        }
      />
      
      <Route
        path={ROUTES.DATA_RELEASE}
        element={
          <ProtectedRoute>
            <DataRelease />
          </ProtectedRoute>
        }
      />

      {/* Default redirect */}
      <Route
        path="/"
        element={
          <Navigate to={
            state.isAuthenticated ? ROUTES.DASHBOARD : ROUTES.LOGIN
          } replace />
        }
      />

      {/* 404 Not Found */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}