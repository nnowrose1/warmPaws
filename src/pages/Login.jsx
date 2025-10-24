import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {

    const {logInUser, setUser, googleSignIn, emailRef} = use(AuthContext);
    const [toggleEyeIcon, setToggleEyeIcon] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    logInUser(email, password)
    .then(result => {
        console.log(result.user);
        setUser(result.user);
        navigate(location?.state || '/');
        e.target.reset();
    })
    .catch(error => {
        toast.error(error.message);
    })
    
  };

  const handleGoogleLogIn = () => {
    googleSignIn()
    .then((result) => {
            setUser(result.user);
            navigate(location?.state || '/');
          })
          .catch((error) => {
            toast.error(error.message);
          });
  }

  return (
    <div className="hero container mx-auto bg-orange-100 text-primary min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <div className="card bg-white p-8 w-full max-w-sm shrink-0 shadow-2xl text-primary">
            <h1 className="text-5xl text-center font-bold">Login Now!</h1>
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
                    <Link to={"/auth/forgetPassword"}><button type="submit" className="link link-hover">Forgot password?</button></Link>
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
             <div className="text-center -mt-4">
              <span>----------</span>
              <span> or </span>
              <span>----------</span>
            </div>

            {/* Google */}
            <button onClick={handleGoogleLogIn}
              className="btn bg-white text-black border-[#e5e5e5]"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
          </div>
          
        </div>
      </div>
      <Toaster></Toaster>
    </div>
  );
};

export default Login;
