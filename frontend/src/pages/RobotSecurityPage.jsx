import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'

const RobotSecurityPage = () => {
    const navigate = useNavigate();
    const [chackbox, setChackbox] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userData = {
            chackbox // send as boolean
        };
        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/robotsecurity`, userData);
            if (response.status === 201) {
                navigate('/Profile');
            }
        } catch (error) {
            setErrorMessage(error.response?.data?.message || "Robot security failed");
            console.error("Robot security failed:", error);
        }
        setChackbox(false);
        setErrorMessage('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='p-5'>
                <div className='border-gray-400 border-[1px] p-5 mb-[4rem]' >
                    <div>
                        <h1 className='text-center mt-2 text-gray-500 text-[20px] font-[1rem]'>Help us confirm it`s you</h1>
                    </div>
                    <div>
                        <p className='text-center text-[0.8rem] mt-5 text-gray-700'>We detected that your password is weak, which may make it easy for other to guess. To confirm it`s you, follow the next step to log into your account. To avoid seeing this again, you can change your password in settings.</p>
                    </div>
                    <div className='border-gray-400 bg-gray-50 rounded-none border-[1px] mt-[1.2rem]' >
                        <label className='flex items-center gap-2 rounded-none border-black'>
                            <input 
                                required
                                name='robotSecurity'
                                type='checkbox'
                                checked={chackbox}
                                onChange={() => setChackbox(!chackbox)}
                                className='accent-slate-200 rounded-none border-black scale-150 ml-5' 
                            />
                            <div className='text-lg'>I'm not a robot</div>
                            <img className='size-20 ml-9' src='https://images.seeklogo.com/logo-png/34/2/recaptcha-logo-png_seeklogo-340088.png' alt="recaptcha" />
                        </label>
                    </div>
                    {errorMessage && (
                        <div className="text-red-500 text-center mt-2">{errorMessage}</div>
                    )}
                    <div>
                        <p className='mt-5 text-xs text-gray-700'>This helps us to combat harmful conduct, detect and prevent spam and maintain the integrity of our Products.</p>
                        <p className='mt-2 text-xs text-gray-700'>We`ve used Google`s reCAPTCHA Enterprise product to provide this security check. Your use of reCAPTCHA Enterprise is subject to Google`s Privacy Policy and Terms of Use.</p>
                        <p className='mt-2 text-xs text-gray-700'>reCAPTCHA Enterprise collects hardware and software information, such as device and application data, and sends it to Google to provide, maintain, and improve reCAPTCHA Enterprise and for general security purposes. This information is not used by Google for personalized advertising.</p>
                    </div>
                </div>
                <div className='border-gray-400 -mt-14 border-[1px]'>
                    <div className=' mt-2 mb-2.5 '>
                        <button className='border-gray-400 bg-blue-500 border-[1px] ml-2 w-[20rem]' type="submit">
                            <div className='text-black flex text-sm items-center justify-center rounded px-4 py-2 w-full placeholder:text-base'>
                                <b className='text-white'>Next</b>
                            </div>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default RobotSecurityPage
