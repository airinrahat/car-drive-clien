/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const SingUp = () => {
  const { createUser } = useContext(AuthContext);

  const handleSingUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log("created user", user);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <form onSubmit={handleSingUp}>
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
            {/* <!-- left side --> */}
            <div className="flex flex-col justify-center p-8 md:p-14">
              {/* <p className="text-red-600 text-center">{error}</p>
                <p className="text-green-600">{success}</p> */}
              <span className="mb-3 text-4xl text-center font-bold">
                Please Register
              </span>
              <span className="font-light text-center text-gray-400 mb-8">
                Hey! Enter your details to get create account
              </span>
              <div className="py-4">
                <span className="mb-2 text-md">Name</span>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                  required
                  placeholder="Enter Your Name"
                  name="name"
                />
              </div>
              <div className="py-4">
                <span className="mb-2 text-md">Email</span>
                <input
                  className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                  type="email"
                  required
                  placeholder="Enter Your Email"
                  name="email"
                />
              </div>

              <div className="py-4">
                <span className="mb-2 text-md">Password</span>
                <input
                  type="password"
                  required
                  placeholder="Enter Your Password"
                  name="password"
                  className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                />
              </div>

              <div className="flex justify-between w-full py-4">
                <div className="mr-24">
                  <input type="checkbox" name="ch" id="ch" className="mr-2" />
                  <span className="text-md">Remember </span>
                </div>
                <span className="font-bold text-md">Forgot password</span>
              </div>
              <button className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300">
                Sign Up
              </button>
              <button className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white">
                <img
                  src="/src/assets/google.svg"
                  alt="img"
                  className="w-6 h-6 inline mr-2"
                />
                Sign in with Google
              </button>
              <div className="text-center text-gray-400">
                Already have an account?
                <Link className="text-blue-600 font-bold ml-1" to="/login">
                  <u>login</u>
                </Link>
                {/* <span className="font-bold text-black">Sign up for free</span> */}
              </div>
            </div>
            {/* right side  */}
            <div className="relative">
              <img
                src="https://i.ibb.co/NZT370F/image.jpg"
                alt="img"
                className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
              />
              {/* <!-- text on image  --> */}
              <div className="absolute hidden bottom-10 right-6 p-6 bg-white bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg md:block">
                <span className="text-white text-xl">
                  We have been uesing Untitle to kick
                  <br />
                  start every new project and can not <br />
                  imagine working without it
                </span>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SingUp;
