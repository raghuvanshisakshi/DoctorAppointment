import React, { useState } from 'react';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
   <div className="mt--100 bg-white p-8 shadow-xl rounded-xl w-96">
        <h2 className="text-2xl font-bold mb-2">{isLogin ? 'Login' : 'Create Account'}</h2>
        <p className="mb-6 text-sm text-gray-500">
          {isLogin ? 'Please log in to book appointment' : 'Please sign up to book appointment'}
        </p>

        {!isLogin && (
          <input
            type="text"
            placeholder="Full Name"
            className="w-full mb-4 p-2 border rounded"
          />
        )}

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 p-2 border rounded"
        />

        <button className="w-full bg-blue-500 text-white py-2 rounded">
          {isLogin ? 'Login' : 'Create account'}
        </button>

        <p className="mt-4 text-sm text-center">
          {isLogin ? (
            <>Create a new account? <span onClick={toggleForm} className="text-blue-500 cursor-pointer">Click here</span></>
          ) : (
            <>Already have an account? <span onClick={toggleForm} className="text-blue-500 cursor-pointer">Login here</span></>
          )}
        </p>
      </div>
    </div>
  );
};

export default Login;

