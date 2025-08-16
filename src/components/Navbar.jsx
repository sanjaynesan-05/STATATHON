import React, { useState } from "react";
import { Link } from "react-router-dom";
import { usePipeline } from "../context/PipelineContext";
import {
  UserCircleIcon,
  BellIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon
} from "@heroicons/react/24/outline";

export default function Navbar() {
  const { state, dispatch } = usePipeline();
  const [showUserMenu, setShowUserMenu] = useState(false);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    setShowUserMenu(false);
  };

  return (
    <nav className="bg-white shadow-lg border-b-4 border-primary-600 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-full mx-auto px-4">
        <div className="flex justify-between h-16">
          
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <Link to="/dashboard" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-quicksand font-bold text-lg">SD</span>
              </div>
              <h1 className="text-xl font-quicksand font-bold text-primary-600">
                SafeData Pipeline
              </h1>
            </Link>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <button className="relative p-2 text-gray-400 hover:text-primary-600 transition-colors">
              <BellIcon className="h-6 w-6" />
              {state.notifications.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {state.notifications.length}
                </span>
              )}
            </button>

            {/* User Menu */}
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 transition-colors"
              >
                <UserCircleIcon className="h-8 w-8" />
                <span className="hidden md:block font-medium">SENTINELS</span>
              </button>

              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 border border-gray-200">
                  <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2">
                    <Cog6ToothIcon className="h-4 w-4" />
                    <span>Settings</span>
                  </button>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                  >
                    <ArrowRightOnRectangleIcon className="h-4 w-4" />
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
