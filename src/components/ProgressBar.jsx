import React from 'react';
import { CheckIcon } from '@heroicons/react/24/solid';

export default function ProgressBar({ steps, currentStep }) {
  return (
    <div className="w-full py-6">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const isCompleted = step.completed;
          const isCurrent = step.id === currentStep;
          const isUpcoming = step.id > currentStep && !isCompleted;
          
          return (
            <React.Fragment key={step.id}>
              {/* Step Circle */}
              <div className="flex flex-col items-center">
                <div className={`
                  relative flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300
                  ${isCompleted ? 'bg-green-500 border-green-500' : ''}
                  ${isCurrent ? 'bg-primary-600 border-primary-600' : ''}
                  ${isUpcoming ? 'bg-gray-200 border-gray-300' : ''}
                `}>
                  {isCompleted ? (
                    <CheckIcon className="w-6 h-6 text-white" />
                  ) : (
                    <span className={`text-sm font-medium ${
                      isCurrent ? 'text-white' : 'text-gray-500'
                    }`}>
                      {step.id}
                    </span>
                  )}
                </div>
                <span className={`mt-2 text-xs font-medium text-center max-w-20 ${
                  isCompleted || isCurrent ? 'text-primary-600' : 'text-gray-500'
                }`}>
                  {step.name}
                </span>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className={`flex-1 h-1 mx-2 transition-all duration-300 ${
                  step.completed ? 'bg-green-500' : 'bg-gray-300'
                }`} />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}