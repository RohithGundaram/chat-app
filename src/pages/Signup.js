import React, { useState } from 'react';
import Add from "../static/images/addAvatar.png";
import { Link } from 'react-router-dom';
import { auth, storage, db } from '../firebaseConfig';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const Signup = () => {
  const [err, setErr] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault()
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)
      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on('state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        },
        (error) => {
          setErr(true)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then( async (downloadURL) => {
            console.log('File available at', downloadURL);
          });
        }
      );

    }
    catch (err) {
      setErr(true)
    }
  }
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <div className='logo'>Chat App</div>
        <div className='title'>Register</div>
        <div>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="profile name"></input>
            <input type="email" placeholder="email"></input>
            <input type="password" placeholder="password"></input>
            <input style={{ display: "none" }} type="file" id='file'></input>
            <label htmlFor='file' className='file'>
              <img className='avatar' src={Add} alt=""></img>
              <span>Add an avatar</span>
            </label>
            <button>Sign up</button>
            {err && <span>Error while creating the account</span>}
          </form>
        </div>
        <div>
          <p>You do have an account? <Link to='/'>Login</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Signup
