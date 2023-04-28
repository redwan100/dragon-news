import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';



const Register = () => {

  const {createUser} =useContext(AuthContext);

 const formHandle = (event)=>{
  event.preventDefault();
    const form = event.target
    const username= form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;


    createUser(email, password)
    .then(result=>{
      const createdUser = result.user;
      form.reset()
    })
    .catch(error=>console.log(error))
    
 }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-center text-2xl font-bold mb-4">Register</h2>
        <form onSubmit={formHandle}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="border border-gray-400 p-2 w-full"
              type="text"
              name="name"
              id="name"
              placeholder="name"
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
              placeholder='email'
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="photo">
              Photo
            </label>
            <input
              className="border border-gray-400 p-2 w-full"
              type="text"
              name="photo"
              id="photo"
             
              placeholder='photo url'
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
            
              placeholder='password'
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
              name="confirmPassword"
              id="confirm-password"
              
              placeholder='confirm password'
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