//import liraries
import React, { useState } from 'react';

// create a component
const SignUp = () => {
    const [number, setNumber] = useState('');
    console.log('number: ' + number);
    return (
        <div className='flex flex-col w-full h-screen bg-white items-center justify-center'>
            <div className='bg-slate-50 px-4 py-5 rounded-xl shadow border flex flex-col  w-full]'> {/* Decreased width to 300px */}
                <h1 className='font-bold text-2xl text-purple-600 i text-center my-2'>Register an account</h1>
                <div className='flex'>
                    <div className='mx-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
                            First Name
                        </label>
                        <input
                            className='shadow appearance-none border rounded mb-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            id='text'
                            type='text'
                            placeholder='First Name'
                        />
                    </div>
                    <div>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
                            Last Name
                        </label>
                        <input
                            className='shadow appearance-none border rounded mb-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            id='text'
                            type='text'
                            placeholder='Last Name'
                        />
                    </div>

                </div>
                <div className='ml-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
                        Adress
                    </label>
                    <input
                        className='shadow appearance-none border rounded mb-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        id='text'
                        type='text'
                        placeholder='Adress'
                    />
                </div>
                <div className='flex'>
                    <div className='mx-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
                            City
                        </label>
                        <input
                            className='shadow appearance-none border rounded mb-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            id='text'
                            type='text'
                            placeholder='City'
                        />
                    </div>
                    <div>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
                            State/Province
                        </label>
                        <input
                            className='shadow appearance-none border rounded mb-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            id='text'
                            type='text'
                            placeholder='State/Province'
                        />
                    </div>

                </div>
                <div className='flex'>
                    <div className='mx-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
                            Email
                        </label>
                        <input
                            className='shadow appearance-none border rounded mb-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            id='email'
                            type='email'
                            placeholder='Email'
                        />
                    </div>
                    <div>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
                            Password
                        </label>
                        <input
                            className='shadow appearance-none border rounded mb-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            id='password'
                            type='password'
                            placeholder='Password'
                        />
                    </div>

                </div>
                <div className='ml-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
                        Phone Number
                    </label>
                    <input
                        className='shadow appearance-none border rounded mb-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        id='number'
                        type='tel'
                        placeholder='Phone Number'
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                    />
                </div>
                <button className=' bg-lime-600 text-white h-50 w-full py-2 rounded my-2'>Submit</button>

                <div className='items-center justify-center flex'>
                    <p>Already have an account? <a href="#" className="text-blue-500 hover:text-red-500">Login Now</a></p>
                </div>
            </div>
        </div>
    );
};

//make this component available to the app
export default SignUp;
