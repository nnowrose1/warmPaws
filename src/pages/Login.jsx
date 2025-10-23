import React, { use, useRef } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {

    const {logInUser, setUser, resetPassword} = use(AuthContext);
    const [toggleEyeIcon, setToggleEyeIcon] = useState(false);
    const navigate = useNavigate();
    const emailRef = useRef();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    logInUser(email, password)
    .then(result => {
        console.log(result.user);
        setUser(result.user);
        navigate('/');
        e.target.reset();
    })
    .catch(error => {
        toast.error(error.message);
    })
    
  };

  const handlePasswordReset = () => {
    const email =emailRef.current.value;
    resetPassword(email).then(() => toast('Please check your Email'))
    .catch((error) => {
        console.log(error.message);
        
    })
  }
  return (
    <div className="hero container mx-auto bg-orange-100 text-primary min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <div className="card bg-white p-4 w-full max-w-sm shrink-0 shadow-2xl text-primary">
            <h1 className="text-5xl text-center font-bold">Login now!</h1>
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <fieldset className="fieldset">
                  <label className="label">Email</label>
                  <input
                    type="email"
                    ref={emailRef}
                    name="email"
                    required
                    className="input"
                    placeholder="Email"
                  />
                  <div className="relative">
                  <label className="label">Password</label>
                  <input
                    type={toggleEyeIcon ? "text" : "password"}
                    name="password"
                    required
                    className="input"
                    placeholder="Password"
                  />
                  <button type="button" onClick={() => (setToggleEyeIcon(!toggleEyeIcon))}
             className="absolute top-8 right-5" >
                    {toggleEyeIcon ?
                      ( <FaEye></FaEye> ) : ( <FaEyeSlash></FaEyeSlash> )}
                  </button>
                  </div>

                  <div>
                    <button onClick={handlePasswordReset} type="submit" className="link link-hover">Forgot password?</button>
                  </div>
                  <button className="btn btn-neutral mt-4 bg-primary rounded-md text-white">
                    Login
                  </button>
                </fieldset>
              </form>
              <p className="text-center">
                New to our website?{" "}
                <Link
                  to={"/auth/register"}
                  className="font-bold text-primary underline"
                >
                  Register
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
