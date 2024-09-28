import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Reserver from './components/Reserver';
import About from './components/About';
import Menu from './components/Menu';
import Glossaire from './components/Glossaire';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center">
        

        {/* Menu */}
        <Menu />

        {/* Main content */}
        <div className="flex-1 w-full max-w-5xl mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reserver" element={<Reserver />} />
            <Route path="/glossaire" element={<Glossaire />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        {/* Logo */}
        <img src={logo} className="App-logo h-24 w-24 mt-6" alt="logo" />

        {/* Footer */}
        <footer className="w-full p-4 bg-gray-800 text-center">
          <p className="text-sm text-gray-400">© 2024 Un essaie</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
