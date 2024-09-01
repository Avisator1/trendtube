import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import PricingPage from './PricingPage';
import FAQ from './FAQ';
import FeaturePage from './FeaturePage';


const App = () => {
  return (
    <div>
        <div>
          <BrowserRouter>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/features" element={<FeaturePage />} />
              
            </Routes>
        </BrowserRouter>
        </div>
    </div>
  );
};

export default App;