/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { OKRs } from './pages/OKRs';
import { Imports } from './pages/Imports';
import { Decisions } from './pages/Decisions';
import { Workforce } from './pages/Workforce';
import { Knowledge } from './pages/Knowledge';
import { Reports } from './pages/Reports';
import { DataStreams } from './pages/DataStreams';
import { Governance } from './pages/Governance';
import { StrategicContextProvider } from './context/StrategicContext';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  return (
    <Router>
      <LanguageProvider>
        <StrategicContextProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/okrs" element={<OKRs />} />
              <Route path="/imports" element={<Imports />} />
              <Route path="/decisions" element={<Decisions />} />
              <Route path="/workforce" element={<Workforce />} />
              <Route path="/knowledge" element={<Knowledge />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/data-streams" element={<DataStreams />} />
              <Route path="/settings" element={<Governance />} />
            </Routes>
          </Layout>
        </StrategicContextProvider>
      </LanguageProvider>
    </Router>
  );
}
