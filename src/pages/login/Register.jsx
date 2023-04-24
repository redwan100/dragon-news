import React from 'react'
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-center text-2xl font-bold mb-4">Register</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="border border-gray-400 p-2 w-full"
              type="text"
              name="name"
              id="name"
              required
            />
          </div>
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
          <div className="mb-6">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="confirm-password"
            >
              Confirm Password
            </label>
            <input
              className="border border-gray-400 p-2 w-full"
              type="password"
              name="confirm-password"
              id="confirm-password"
              required
            />
          </div>
          <div className="flex justify-between items-center flex-col">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
              Register
            </button>
            <p className="text-gray-700 text-sm">
              Already have an account?{" "}
              <Link to={'/login'} className="text-blue-500 font-bold" >
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register