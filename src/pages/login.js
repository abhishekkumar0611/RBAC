import React from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (role) => {
    login('testUser', role);
    navigate('/dashboard');
  };

  return (
    <div className="p-4">
      <h1>Login</h1>
      <button onClick={() => handleLogin('admin')} className="m-2 p-2 bg-blue-500 text-white">Admin</button>
      <button onClick={() => handleLogin('user')} className="m-2 p-2 bg-green-500 text-white">User</button>
    </div>
  );
};

export default Login;
