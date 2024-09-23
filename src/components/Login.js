import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Redirect or update state upon successful login
    } catch (error) {
      console.error('Error logging in:', error.message);
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