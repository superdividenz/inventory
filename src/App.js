// App.jsx
import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { auth } from './components/firebase';
import Inventory from './components/Inventory';
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  // Handle logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null); // Clear user state after logout
    } catch (error) {
      console.error('Error logging out:', error.message);
    }
  };

  return (
    <Router>
      <div>
        <Header user={user} onLogout={handleLogout} />
        <Routes>
          {/* Redirect to Home when logged in */}
          <Route path="/" element={user ? <Navigate to="/home" /> : <Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={user ? <Home user={user} /> : <Navigate to="/Home" />} />
          <Route path="/inventory" element={user ? <Inventory /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
