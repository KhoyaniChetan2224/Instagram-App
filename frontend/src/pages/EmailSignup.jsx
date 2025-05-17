import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const EmailSignup = () => {
    const months = [
        { value: '1', label: 'January' },
        { value: '2', label: 'February' },
        { value: '3', label: 'March' },
        { value: '4', label: 'April' },
        { value: '5', label: 'May' },
        { value: '6', label: 'June' },
        { value: '7', label: 'July' },
        { value: '8', label: 'August' },
        { value: '9', label: 'September' },
        { value: '10', label: 'October' },
        { value: '11', label: 'November' },
        { value: '12', label: 'December' }
    ];
    const days = Array.from({ length: 31 }, (_, i) => ({ value: i + 1, label: i + 1 }));
    const years = Array.from({ length: 100 }, (_, i) => ({ value: new Date().getFullYear() - i, label: new Date().getFullYear() - i }));

    const [monthOptions, setMonthOptions] = useState(months);
    const [dayOptions, setDayOptions] = useState(days);
    const [yearOptions, setYearOptions] = useState(years);

    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();
        const userData = {
            month: e.target.month.value,
            day: e.target.day.value,
            year: e.target.year.value
        };
        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/EmailSingup`, userData);
            if (response.status === 201) {
                const data = response.data;
                localStorage.setItem('token', data.token);
                navigate('/RobotSecurityPage');
            }
        } catch (error) {
            console.error("Signup failed:", error);
        }
        setMonthOptions(months);
        setDayOptions(days);
        setYearOptions(years);
    };

    return (
        <div className='h-screen flex justify-between flex-col w-full bg-white '>
            <form
                onSubmit={(e) => submitHandler(e)}
                className='p-4 mb-[6rem]'
            >
                <div className='border-gray-400 border-[1px] p-6 mb-[6rem]' >
                    <div>
                        <img className='-mt-6' src='https://hd2.tudocdn.net/886319?w=824&h=494' alt="Birthday" />
                        <div className='mb-7 -mt-8 font-semibold'>
                            <p className='text-center'>Add Your Birthday</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-center -mt-4 mb-2 text-[15px]'>This won`t be a part of your public profile.</p>
                        <p className='text-center text-blue-400 -mt-1 font-semibold text-[13px]'>Why do I need to provide my birthday?</p>
                    </div>

                    <div className='flex gap-4 mb-5 mt-4'>
                        <section className='timeline-landing'>
                            <div className='row container'>
                                <div className='select-div'>
                                    <select
                                        name="month"
                                        onChange={(e) => {
                                            const selectedMonth = e.target.value;
                                            const daysInMonth = new Date(new Date().getFullYear(), selectedMonth, 0).getDate();
                                            setDayOptions(Array.from({ length: daysInMonth }, (_, i) => ({ value: i + 1, label: i + 1 })));
                                        }}
                                        className='select bg-white rounded border-gray-400 px-0 py-2 border w-full text-[15px]'
                                        required
                                    >
                                        <option value="">Month</option>
                                        {monthOptions.map((month) => (
                                            <option key={month.value} value={month.value}>
                                                {month.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </section>

                        <section className='timeline-landing'>
                            <div className='row container'>
                                <div className='select-div'>
                                    <select
                                        name="day"
                                        className='select bg-white -mt-[3px] rounded border-gray-400 px-1 py-2 border w-full text-[15px]'
                                        required
                                    >
                                        <option value="">Day</option>
                                        {dayOptions.map((day) => (
                                            <option key={day.value} value={day.value}>
                                                {day.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </section>

                        <section className='timeline-landing'>
                            <div className='row container'>
                                <div className='select-div'>
                                    <select
                                        name="year"
                                        className='select bg-white -mt-[3px] rounded border-gray-400 px-3 py-2 border w-full text-[15px]'
                                        required
                                    >
                                        <option value="">Year</option>
                                        {yearOptions.map((year) => (
                                            <option key={year.value} value={year.value}>
                                                {year.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div>
                        <p className='text-center text-gray-500 text-[12px] mb-2'>You need to enter the date you were born</p>
                        <p className='text-center text-gray-500 text-[12px]'>Use your own birthday, even if this account is for a business, a pet, or something else</p>
                    </div>
                    <div>
                        <button
                            className='bg-blue-500 text-white mb-1 mt-6 rounded px-4 py-1 border w-full text-lg placeholder:text-base'
                        >Next</button>
                    </div>
                    <div>
                        <p className='text-center font-bold text-blue-500 mt-5'>
                            <Link to='/UserSignup'>
                                Go back</Link></p>
                    </div>
                </div>
            </form>
            <div className='p-4'>
                <div className='border-gray-400 border-[1px] p-2 -mt-[13.5rem]' >
                    <Link to='/' className='text-black flex text-sm items-center justify-center rounded px-4 py-2 w-full placeholder:text-base'>
                        Have an account?
                        <b className='text-blue-500'>Log in</b></Link>
                </div>
            </div>
        </div>
    );
};

export default EmailSignup;
