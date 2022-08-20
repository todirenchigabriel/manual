import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/Landing';
import QuestionnairePage from './pages/Questionnaire';
import { ROUTES } from './constants';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.LANDING} element={<LandingPage />} />
        <Route path={ROUTES.QUESTIONNAIRE} element={<QuestionnairePage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
