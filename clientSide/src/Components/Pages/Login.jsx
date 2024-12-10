import React from 'react';

const Login = () => {
    return (
        <div className='flex flex-col w-full h-screen bg-white items-center justify-center'>
            <div className='bg-slate-50 px-4 py-10 rounded-xl shadow border flex flex-col  w-[350px]'> {/* Decreased width to 300px */}
                <h1 className='font-bold text-2xl text-purple-600 i text-center'>Welcome Back</h1>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
                    Email
                </label>
                <input
                    className='shadow appearance-none border rounded mb-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    id='email'
                    type='email'
                    placeholder='Enter your email'
                />
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
                    Password
                </label>
                <input
                    className='shadow appearance-none border rounded w-full mb-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    id='password'
                    type='password'
                    placeholder='Enter your password'
                />
                <button className=' bg-lime-600 text-white h-50 w-full py-2 rounded my-2'>Submit</button>

                <div className='items-center justify-center flex'>
                    <p>Don't have an account? <a href="#" className="text-blue-500 hover:text-red-500">Register Now</a></p>
                </div>
            </div>
        </div>
    )
}
export default Login