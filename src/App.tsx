import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PipelineProvider } from './context/PipelineContext';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <PipelineProvider>
      <BrowserRouter>
        <div className="App">
          <AppRoutes />
        </div>
      </BrowserRouter>
    </PipelineProvider>
  );
}

export default App;