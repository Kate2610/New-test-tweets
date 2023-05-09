import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Tweets from './pages/Tweets';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
      </Routes>
    </div>
  );
}

export default App;
