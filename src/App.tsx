import React, { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importing pages
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignUpPage';
import UserLoginPage from './pages/UserLoginPage';
import AdminLoginPage from './pages/AdminLoginPage';

import UserDashboard from './pages/UserDashboard';
import NextPage from './pages/NextPage';
import Page1 from './pages/Page1'; // Import Page1
import Page2 from './pages/Page2'; // Import Page2
import Page3WithButtons from './pages/Page3WithButtons';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';
import CardDetailsPage from './pages/CardDetailsPage';
import EconomicDetailsPage from './pages/EconomicDetailsPage';

import AdminDashboard from './pages/AdminDashboard';
import ButtonsPage from './pages/ButtonsPage';

const App: FC = () => {
  return (
    <Router>
      <Routes>
        {/* Common routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/user-login" element={<UserLoginPage />} />
        <Route path="/admin-login" element={<AdminLoginPage />} />

        {/* User routes */}
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/next" element={<NextPage />} />
        <Route path="/page1" element={<Page1 />} /> {/* Route for Page1 */}
        <Route path="/page2" element={<Page2 />} /> {/* Route for Page2 */}
        <Route path="/page3" element={<Page3WithButtons />} />
        <Route path="/page4" element={<Page4 />} />
        <Route path="/page5" element={<Page5 />} />
        <Route path="/card-details/:cardId" element={<CardDetailsPage />} />
        <Route path="/economic-details/:cardId" element={<EconomicDetailsPage />} />
        <Route path="/social-details/:cardId" element={<CardDetailsPage />} />

        {/* Admin routes */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/buttons-page/:imageId" element={<ButtonsPage />} />
        <Route path="/admin/card-details/:cardId" element={<CardDetailsPage />} />
        <Route path="/admin/economic-details/:cardId" element={<EconomicDetailsPage />} />
        <Route path="/admin/social-details/:cardId" element={<CardDetailsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
