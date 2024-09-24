import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Redirect to home page upon successful login
      navigate('/'); // Navigate to the home page
    } catch (error) {
      console.error('Error logging in:', error.message);
      // You might want to show an error message to the user here
    }
  };

  return (
    <form onSubmit={handleLogin} className="flex flex-col space-y-2 p-4 bg-white rounded shadow-md max-w-sm mx-auto mt-20">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
        className="p-2 border border-gray-300 rounded text-sm"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
        className="p-2 border border-gray-300 rounded text-sm"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 text-sm">Login</button>
    </form>
  );
};

export default Login;