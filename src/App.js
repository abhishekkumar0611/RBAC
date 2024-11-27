import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import ProtectedRoute from '/components/ProtectedRoute';
import Home from '/pages/Home';
import Dashboard from '/pages/Dashboard';
import Login from '/pages/Login';
import Forbidden from './pages/Forbidden';

const App = () => (
  <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<ProtectedRoute permission="view_dashboard"><Dashboard /></ProtectedRoute>} />
        <Route path="/403" element={<Forbidden />} />
      </Routes>
    </Router>
  </AuthProvider>
);

export default App;
