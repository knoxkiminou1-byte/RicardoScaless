
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Bio from './Bio.jsx';
import Music from './Music.jsx';
import Contact from './Contact.jsx';
import NotableAchievements from './NotableAchievements.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/music" element={<Music />} />
        <Route path="/achievements" element={<NotableAchievements />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
