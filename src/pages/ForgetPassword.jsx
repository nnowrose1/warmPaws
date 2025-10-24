import React, { use, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../context/AuthContext";

const ForgetPassword = () => {
  const { emailRef, resetPassword } = use(AuthContext);
  // console.log(emailRef);

  const [email, setEmail] = useState(emailRef.current?.value);

  const handlePasswordReset = (e) => {
    e.preventDefault();
    //  const email =emailRef.current.value;
    console.log(email);

    resetPassword(email)
      .then(() => {
        toast("Please check your Email");
        setEmail(' ');
        window.open("https://mail.google.com", "_blank");
      })

      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <div className="bg-orange-100 p-10">
      <div className="bg-white mx-auto shadow-xl rounded-3xl p-8 w-full max-w-sm border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-primary mb-6">
          Forgot Password?
        </h2>

        <p className="text-center text-accent mb-6">
          Enter your registered email to receive a password reset link.
        </p>

        <form onSubmit={handlePasswordReset}>
          <label className="label text-primary font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
            className="input input-bordered w-full text-accent mb-4"
            placeholder="Enter your email"
          />

          <button
            type="submit"
            className="btn bg-primary hover:bg-[#253B8A] text-white w-full mt-2 rounded-lg"
          >
            Reset Password
          </button>
        </form>
        <Toaster></Toaster>
      </div>
    </div>
  );
};

export default ForgetPassword;
