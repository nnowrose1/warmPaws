import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import { updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
import { toast } from 'react-toastify';

const UpdateProfile = () => {
    const {setUser, user} = use(AuthContext);
    const navigate = useNavigate();

    const handleUpdate = (e) => {
        e.preventDefault();
        const name= e.target?.name.value;
        const photo = e.target?.photo.value;
        console.log(name, photo);
        
        const profile = {
          displayName: name,
          photoURL: photo,
        };

      updateProfile(auth.currentUser, profile)  
      .then(() => {
        setUser({...auth.currentUser, profile});
     toast.success('Profile updated successfully!');
    navigate('/profile');
      })
      .catch(error =>{
        console.log(error);
        setUser(user);
      })
    }

    return (
  <div className='bg-orange-100 p-5'>
    <div className="card bg-white w-full mx-auto max-w-sm shrink-0 shadow-2xl ">
        <h1 className="text-5xl font-bold text-center text-primary mt-5">Update Your Profile!</h1>
      <div className="card-body">
        <form  onSubmit={handleUpdate}>
        <fieldset className="fieldset">
          <label className="label text-primary font-semibold">Your Name</label>
          <input type="text" name='name' required className="input text-accent" placeholder="Name" />
          <label className="label text-primary font-semibold">Photo</label>
          <input type="text" name='photo' className="input text-accent" placeholder="PhotoURL" />
   <button className="btn bg-primary w-full text-white mt-3">Update</button> 
        </fieldset>
        </form>
      </div>
    </div>
   
    </div>
    );
};

export default UpdateProfile;