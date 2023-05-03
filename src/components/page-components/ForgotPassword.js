import keyImage from "../../assets/sahandkey.jpeg";
import { useState } from "react";
import { Link } from "react-router-dom";
import OAuth from "./ui/OAuth";

const ForgotPassword = () => {

    const [email,setEmail] =useState('');

  
    function emailChangeHandler(e){
        setEmail(e.target.value)
    }

    return ( 
        <section>
        <h1 className="text-3xl text-center font-bold">Forgot Password</h1>
        <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
          <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6 ">
            {/* <div className="md:w-1/2 lg:w-1/2 mb-12 md:mb-6 "> */}
            <img src={keyImage} alt="image" className="w-full rounded-2xl" />
          </div>
          <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
            {/* <div className={'w-full md:w-1/2 lg:w-1/3'}> this will wrk,but u hav to put gap in its parent container width here for md:50% for large: 33.3%*/}
            <form>
              
              <input
                type="email"
                id="email"
                value={email}
                onChange={emailChangeHandler}
                placeholder="email address"
                className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded-xl mb-6"
              />
              
              <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
                <p className="mb-6">
                  Have an account ?{" "}
                  <Link
                    to={"/sign-up"}
                    className="text-red-600 hover:text-red-800 transition duration-200 ease-in-out ml-1">
                    Sign up
                  </Link>{" "}
                </p>
                <p>
                  <Link
                    to={"/sign-in"}
                    className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out">
                    Sign in instead
                  </Link>
                </p>
              </div>
  
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded-xl shadow-md hover:bg-blue-800 transition duration-200 ease-in-out hover:shadow-lg">
                Send reset password
              </button>
              {/* <div className="flex items-center my-4 before:border-t before:border-gray-700  before:flex-1"> */}
              <div className="my-4 flex before:flex-1 items-center before:border-t before:border-gray-700  after:flex-1  after:border-t after:border-gray-700 ">
                <p className="font-semibold mx-4">OR</p>
              </div>
              <OAuth />
            </form>
          </div>
        </div>
      </section>
     );
}
 
export default ForgotPassword;