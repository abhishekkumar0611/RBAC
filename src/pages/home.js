import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="p-4">
    <h1 className="text-2xl">Welcome to RBAC Demo</h1>
    <Link to="/login" className="text-blue-500">Login</Link>
  </div>
);

export default Home;
