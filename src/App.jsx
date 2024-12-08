import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './layouts/Home';
import WebinarPage from './layouts/WebinarPage';
import AboutUsPage from './layouts/AboutUsPage';
import AdminLayout from './Admin/AdminLayout/AdminLayout';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/webinar" element={<WebinarPage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/admin/*" element={<AdminLayout />} />
      </Routes>
    </Router>
  );
};

export default App;
