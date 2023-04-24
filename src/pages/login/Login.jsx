import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-center text-2xl font-bold mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="border border-gray-400 p-2 w-full"
              type="email"
              name="email"
              id="email"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="border border-gray-400 p-2 w-full"
              type="password"
              name="password"
              id="password"
              required
            />
          </div>
          <div className="flex justify-between items-center flex-col">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
              Login
            </button>
            <small
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
             
            >
              Forgot Password?
            </small>
          </div>
          <p className='text-sm'>Don't have an Account? <Link to={'/register'} className='text-blue-500 font-bold'>Register</Link></p>
        </form>
      </div>
    </div>
  );
}

export default Login