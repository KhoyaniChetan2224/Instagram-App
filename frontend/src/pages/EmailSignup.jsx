import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const EmailSignup = () => {

    return (
        <div className='h-screen flex justify-between flex-col w-full bg-white '>
            <form
                className='p-4 mb-[6rem]'
            >
                <div className='border-gray-400 border-[1px] p-6 mb-[6rem]' >
                    <div >
                        <img className='-mt-6' src='https://hd2.tudocdn.net/886319?w=824&h=494'></img>
                        <div className='mb-7 -mt-8 font-semibold'>
                            <p className='text-center'>Add Your Birthday</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-center -mt-4 mb-2 text-[15px]'>This won`t be a part of your public profile.</p>
                        <p className='text-center text-blue-400 -mt-1 font-semibold text-[13px]'>Why do I nneed to provide my birthday?</p>
                    </div>

                    <div className='flex gap-4 mb-5 mt-4'>
                        <section className='timeline-landing'>
                            <div className='row container'>
                                <div className='select-div'>
                                    <select className='select bg-white -mt-[3px] rounded border-gray-400 px-4 py-2 border w-full text-[15px]' id='month'></select>
                                </div>
                            </div>
                        </section>

                        <section className='timeline-landing'>
                            <div className='row container'>
                                <div className='select-div'>
                                    <select className='select bg-white -mt-[3px] rounded border-gray-400 px-4 py-2 border w-full text-[15px]' id='month'></select>
                                </div>
                            </div>
                        </section>

                        <section className='timeline-landing'>
                            <div className='row container'>
                                <div className='select-div'>
                                    <select className='select bg-white -mt-[3px] rounded border-gray-400 px-4 py-2 border w-full text-[15px]' id='month'></select>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div>
                        <p className='text-center text-gray-500 text-[12px] mb-2'>Your need to enter the date you were born</p>
                        <p className='text-center text-gray-500 text-[12px]'>User your own birthday, even if this account is for a business, a pet, or something else</p>
                    </div>
                    <div>
                        <button
                            className='bg-blue-400 text-white mb-1 mt-6 rounded px-4 py-1 border w-full text-lg placeholder:text-base'
                        ><Link to='/RobotSecurityPage'>Next</Link></button>
                    </div>
                    <div>
                        <p className='text-center font-bold text-blue-400 mt-5'>
                            <Link to='/UserSignup'>
                                Go back</Link></p>
                    </div>
                </div>
            </form>
            <div className='p-4'>
                <div className='border-gray-400 border-[1px] p-2 -mt-[13.5rem]' >
                    <Link to='/' className='text-black flex text-sm items-center justify-center rounded px-4 py-2 w-full placeholder:text-base'>
                        Have an account?
                        <b className='text-blue-400'>Log in</b></Link>
                </div>
            </div>
        </div>
    )
}

export default EmailSignup
