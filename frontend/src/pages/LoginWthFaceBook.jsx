import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const LoginWthFaceBook = () => {

  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const Navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault();
    const userData = {
      username: username,
      password: password
    }
    setUserName('')
    setPassword('')
  }

  return (
    <div>
      <form
        className='border-gray-400 border-[1px] p-6 mb-[6rem] bg-gray-100'
        onSubmit={(e) =>
          submitHandler(e)
        }>
        <div className='text-blue-600 font-bold text-[3rem]  text-center mt-4'>
          facebook
        </div>
        <div className='mt-4'>
          <input
            required
            className='bg-(#eeeeee) bg-white -mt-[3px] border-blue-600 rounded px-4 py-1 border w-full text-lg placeholder:text-xs placeholder:text-black'
            type='Phone number, email or username'
            placeholder='Your must log in to continue.'
          />
        </div>
        <div className='border-gray-400 border-[1px] p-6 mb-[6rem] mt-5 shadow-neutral-600 bg-white'>
          <div className='text-center mb-5'>
            Log in to Facebook
          </div>
          <div>
            <input
              required
              className='bg-(#eeeeee) bg-yellow-100 mb-3 -mt-[3px] rounded border-gray-400 px-4 py-1 border w-full text-lg placeholder:text-xs placeholder:text-center  placeholder:text-black'
              type='Phone number, email or username'
              placeholder='Your must log in to continue.'
            />
          </div>
          <div>
            <input
              required
              value={username}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              className='bg-(#eeeeee) bg-slate-100 mb-3 -mt-[3px] rounded border-gray-400 px-4 py-1 border w-full text-lg placeholder:text-xs  placeholder:text-stone-500'
              type='Phone number, email or username'
              placeholder='Email address or phone number'
            />

            <input
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className='bg-(#eeeeee) bg-slate-100 mb-3 -mt-[3px] rounded border-gray-400 px-4 py-1 border w-full text-lg placeholder:text-xs  placeholder:text-stone-500'
              type='Phone number, email or username'
              placeholder='Password'
            />
          </div>
          <div>
            <button
              className='bg-blue-600 text-white mb-1 mt-6 rounded px-4 py-1 border w-full text-lg placeholder:text-base'
            >
              Log in
            </button>
          </div>

          <div className='p-6 mt-[5.5rem]'>
            <p className='text-center text-blue-600 text-[0.7rem]'>
              Forgotte account? - Signup for Facebook</p>
          </div>
        </div>
      </form>
    </div>
  )
}

export default LoginWthFaceBook
