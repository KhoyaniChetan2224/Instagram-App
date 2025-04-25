import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const ForgotPassword = () => {

  const [username, setUserName] = useState('')

  const Navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault();
    const userData = {
      username: username
    }


    setUserName('')
  }

  return (
    <div className='p-3 -mb-[3rem]'>
      <form
        className='border-gray-400 border-[1px] p-6 -mb-[3rem]'
        onSubmit={(e) =>
          submitHandler(e)
        }>
        <div>
          <div className='ml-[3rem] bg-center -mt-[1rem]'>
            <img className='text-cente -mb-3' src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQQ2ckXLmtgqRELRlyyTg-Oohq2qVBH0GOEvXpuFvEmMnByXW79'></img>
          </div>
          <div>
            <p className='text-center font-bold'>Trouble logging in?</p>
            <p className='text-center text-stone-500 mt-1'>
              Enter your email, phone, or username and we`ll send your a link to get back in to your account.
            </p>
          </div>
          <div className='mt-4'>
            <input
              required
              value={username}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              className='bg-(#eeeeee) bg-slate-100 -mt-[3px] rounded border-gray-400 px-4 py-1 border w-full text-lg placeholder:text-xs  placeholder:text-stone-500'
              type='Phone number, email or username'
              placeholder='Phone number, email or username'
            />
          </div>
          <button
            className='bg-blue-500 text-white mb-2 mt-3 rounded px-4 py-1 border w-full text-lg placeholder:text-base'
          ><Link >Send login link</Link>
          </button>
          <p className='text-center text-xs mt-3 text-indigo-900'>
            <Link to='/#' >Can`t reset your password?</Link>
          </p>
          <div className='text-center'>
            <b><spam className='text-stone-300 text-[21px]'>____________</spam><samp className='text-stone-500 text-[16px]'>      OR      </samp><spam className='text-stone-300 text-[22px]'>____________</spam></b>
          </div>
          <p className='text-center font-bold text-xs from-neutral-700 mb-12 mt-7'>
            <Link to='/UserSignup' >Creat new account</Link>
          </p>
        </div>
      </form>
      <div className='border-gray-400 border-[1px] p-5 mt-[3.5rem] bg-slate-100'>
        <p className='text-center text-xs font-bold'>
          <Link to='/#' >Back to login</Link>
        </p>
      </div>
    </div>
  )
}

export default ForgotPassword
