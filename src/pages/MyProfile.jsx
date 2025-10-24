import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router";

const MyProfile = () => {
  const { user } = use(AuthContext);

  return (
    <section className="flex justify-center items-center min-h-screen bg-orange-100 p-4">
      <div className="bg-white shadow-lg rounded-3xl p-8 w-full max-w-md text-center border border-gray-100">
        <div className="flex justify-center mb-5">
          <img
            src={user?.photoURL}
            alt="User"
            className="w-32 h-32 rounded-full object-cover border-4 border-[#FBBF24]"
          />
        </div>

        <h2 className="text-2xl font-bold text-primary mb-2">
          Name: {user?.displayName}
        </h2>
        <p className="text-accent mb-6">
          <span className="text-primary font-semibold">Email: </span>
          {user?.email}
        </p>

        <Link to={"/updateProfile"}>
          {" "}
          <button className="bg-primary hover:bg-[#253B8A] text-white px-6 py-2 rounded-full font-semibold">
            Update Profile
          </button>{" "}
        </Link>
      </div>
    </section>
  );
};

export default MyProfile;
