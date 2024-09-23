import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { BrowserRouter as Router } from 'react-router-dom';
import { auth } from './firebase'; 
import Inventory from './Inventory';
import Login from './components/Login.js'; 
import Header from './components/Header.js'; 

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <div>
        <Header />
        {user ? (
          <>
            <h1>Welcome, {user.email}</h1>
            <button onClick={() => auth.signOut()}>Logout</button>
            <Inventory />
          </>
        ) : (
          <Login />
        )}
      </div>
    </Router>
  );
};

export default App;