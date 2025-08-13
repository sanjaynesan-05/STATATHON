import React, { createContext, useContext, useReducer } from 'react';
import { PIPELINE_STEPS } from '../utils/constants';

const PipelineContext = createContext();

const initialState = {
  isAuthenticated: false,
  user: null,
  currentDataset: null,
  pipelineSteps: PIPELINE_STEPS,
  currentStep: 1,
  notifications: []
};

function pipelineReducer(state, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        currentDataset: null
      };
    case 'SET_DATASET':
      return {
        ...state,
        currentDataset: action.payload
      };
    case 'UPDATE_STEP':
      return {
        ...state,
        currentStep: action.payload
      };
    case 'COMPLETE_STEP':
      return {
        ...state,
        pipelineSteps: state.pipelineSteps.map(step =>
          step.id === action.payload
            ? { ...step, completed: true }
            : step
        )
      };
    case 'ADD_NOTIFICATION':
      return {
        ...state,
        notifications: [action.payload, ...state.notifications].slice(0, 5)
      };
    default:
      return state;
  }
}

export function PipelineProvider({ children }) {
  const [state, dispatch] = useReducer(pipelineReducer, initialState);

  return (
    <PipelineContext.Provider value={{ state, dispatch }}>
      {children}
    </PipelineContext.Provider>
  );
}

export function usePipeline() {
  const context = useContext(PipelineContext);
  if (!context) {
    throw new Error('usePipeline must be used within PipelineProvider');
  }
  return context;
}