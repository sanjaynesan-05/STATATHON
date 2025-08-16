import React from "react";
import { Link } from "react-router-dom";
import {
  ChartBarIcon,
  ShieldCheckIcon,
  EyeSlashIcon,
  ChartPieIcon,
  CloudArrowUpIcon,
  Bars3Icon,
  XMarkIcon
} from "@heroicons/react/24/outline";
import { ROUTES } from "../utils/constants";

const menuItems = [
  { name: "Dashboard", path: ROUTES.DASHBOARD, icon: ChartBarIcon },
  { name: "Risk Assessment", path: ROUTES.RISK_ASSESSMENT, icon: ShieldCheckIcon },
  { name: "Privacy Enhancement", path: ROUTES.PRIVACY_ENHANCEMENT, icon: EyeSlashIcon },
  { name: "Utility Measurement", path: ROUTES.UTILITY_MEASUREMENT, icon: ChartPieIcon },
  { name: "Data Release", path: ROUTES.DATA_RELEASE, icon: CloudArrowUpIcon }
];

export default function Sidebar({ collapsed, setCollapsed, mobileOpen, setMobileOpen }) {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className={`fixed top-16 h-[calc(100vh-4rem)] bg-gradient-to-b from-primary-700 to-primary-800 shadow-xl z-40 
        transition-all duration-300 ${collapsed ? "w-20" : "w-64"} hidden md:flex flex-col`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-primary-600">
          {!collapsed && (
            <span className="text-white font-bold text-lg tracking-wide">Menu</span>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="text-white hover:text-gold-400 focus:outline-none"
          >
            {collapsed ? (
              <Bars3Icon className="h-6 w-6" /> // Expand
            ) : (
              <XMarkIcon className="h-6 w-6" /> // Collapse
            )}
          </button>
        </div>

        {/* Navigation */}
        <div className="p-4 flex-1">
          <nav className="space-y-2">
            {menuItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
                    location.pathname === item.path
                      ? "bg-white text-primary-700 shadow-lg"
                      : "text-white hover:bg-primary-600"
                  }`}
                >
                  <IconComponent className="h-5 w-5 flex-shrink-0" />
                  {!collapsed && <span className="font-medium ml-3">{item.name}</span>}
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* Mobile Sidebar Drawer */}
      <div className="md:hidden">
        {/* Hamburger Button (open) */}
        {!mobileOpen && (
          <button
            className="p-3 text-white bg-primary-700 fixed top-16 left-0 z-50"
            onClick={() => setMobileOpen(true)}
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        )}

        {/* Drawer */}
        {mobileOpen && (
          <div className="fixed inset-0 z-50 flex">
            {/* Overlay */}
            <div
              className="flex-1 bg-black bg-opacity-50"
              onClick={() => setMobileOpen(false)}
            ></div>

            {/* Sidebar Drawer */}
            <div className="w-64 bg-gradient-to-b from-primary-700 to-primary-800 h-full p-4 shadow-lg">
              {/* Header */}
              <div className="flex items-center justify-between mb-4 border-b border-primary-600 pb-3">
                <span className="text-white font-bold text-lg">Menu</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-white hover:text-gold-400 focus:outline-none"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>

              {/* Navigation */}
              <nav className="space-y-2">
                {menuItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
                        location.pathname === item.path
                          ? "bg-white text-primary-700 shadow-lg"
                          : "text-white hover:bg-primary-600"
                      }`}
                      onClick={() => setMobileOpen(false)}
                    >
                      <IconComponent className="h-5 w-5 flex-shrink-0" />
                      <span className="font-medium ml-3">{item.name}</span>
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
