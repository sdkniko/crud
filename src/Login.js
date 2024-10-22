// src/Login.js
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="container mt-5">
      <h1 className="text-center">Welcome to the User Task Management App</h1>
      <button onClick={loginWithRedirect} className="btn btn-primary">Log In</button>
    </div>
  );
};

export default Login;
