import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const UserSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullname, setFullName] = useState('');
  const [username, setUserName] = useState('');
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
      fullname,
      username
    };
    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/UserSignup`, userData);
      if (response.status === 201) {
        const data = response.data;
        localStorage.setItem('token', data.token);
        navigate('/EmailSignup');
      }
    } catch (error) {
      console.error("Signup failed:", error);
    }
    setEmail('');
    setPassword('');
    setFullName('');
    setUserName('');
  }

  return (
    <div className='h-screen flex justify-between flex-col w-full bg-white '>
      <div className='p-4 h-screen flex flex-col justify-between'>
        <form
          className='border-gray-400 border-[1px] p-6 mb-[6rem]'
          onSubmit={(e) =>
            submitHandler(e)
          }>
          <div className='-mt-9'>
            <div>
              <img className='text-center -mt-2 px-5 py-3' src='https://assets.codepen.io/6060109/ig-logo.png'></img>
            </div>

            <div className='font-bold text-zinc-400 text-[12px] text-center mb-14 -mt-[30px]'>
              <p>Sign up to see photos and videos <br /> from your friends.</p>
            </div>

            <div className='mb-10 -mt-[65px] rounded'>
              <button
                className='bg-blue-500 text-white mb-2 mt-5 rounded px-4 py-1 border w-full text-lg placeholder:text-base'
              ><Link to='/LoginWthFaceBook'>Log in with Facebook</Link></button>
            </div>

            <div className='text-center -mt-12 mb-9'>
              <b><spam className='text-stone-300 text-[21px]'>_____________</spam><samp className='text-stone-500 text-[17px]'>     OR    </samp><spam className='text-stone-300 text-[21px]'>_____________</spam></b>
            </div>

            <div className='-mt-4'>
              <input
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                formNoValidate='a-z0-9@$&#_'
                className='bg-slate-100 rounded-lg px-4 border-gray-400 py-1 border w-full text-lg placeholder:text-base'
                type="email"
                placeholder='Mobile Number or Email'
              />

              <input
                className='bg-slate-100 mb-2 mt-3 border-gray-400 rounded-lg px-4 py-1 border w-full text-lg placeholder:text-base'
                required type="password"
                formNoValidate='a-z0-9@$&#_'
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder='password'
              />

              <input
                required
                value={fullname}
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
                className='bg-slate-100 mb-2 mt-1 border-gray-400 rounded-lg px-4 py-1 border w-full text-lg placeholder:text-base'
                type="text"
                placeholder='Full name'
              />

              <input
                required
                value={username}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
                className='bg-slate-100 mb-2 mt-1 border-gray-400 rounded-lg px-4 py-1 border w-full text-lg placeholder:text-base'
                type="username"
                placeholder='Username'
              />
            </div>

            <div className='text-slate-500 text-center mb-7 -mt-[10px]'>
              <p className='text-[10px] mt-3 -mb-2 leading-tight'>People who use service may have uplod your contact information to Instagram. <span className='text-blue-950'>Learn Morn</span> <span className='text-blue-950'><Link to='/https://www.facebook.com/help/instagram/261704639352628'>Terms</Link></span>, <span className='text-blue-950'>Data Policy</span> and <span className='text-blue-950'>Cookies Policy. </span></p>
              <p className='text-[10px] mt-3 -mb-2 leading-tight'>By Signing up, you agree to our <span className='text-blue-950'><Link to='#'>Terms</Link></span>, <span className='text-blue-950'>Data Policy</span> and <span className='text-blue-950'>Cookies Policy. </span></p>
            </div>

            <button 
              className='bg-blue-500 text-white mb-2 mt-2 rounded px-4 py-1 border w-full text-lg placeholder:text-base'
             >Sign up
            </button>

          </div>
        </form>

        <div className='border-gray-400 border-[1px] p-4 -mt-[5.5rem]'>
          <p className='text-center'>Have an account? <Link to='/' className='text-blue-600'>Log in</Link></p>
        </div>

      </div>
    </div>
  );
};

export default UserSignup;
