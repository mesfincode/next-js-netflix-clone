"use client"

import Input from '@/components/input'
import React, { useCallback, useState } from 'react'

const Auth = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    
    const [variant, setVariant] = useState('login')

    const toggleVariant = useCallback(()=>{
setVariant((currentVariant)=> currentVariant === 'login'? 'register':'login')
    },[])
    return (
        <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-fixed bg-cover">
            <div className='bg-black w-full h-full lg:bg-opacity-50'>
                <nav className='px-12 py-5'>
                    <img src="/images/logo.jpg" alt="logo" className='h-12' />
                </nav>
                <div className='flex justify-center'>
                    <div className='bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md w-full'>
                        <h2 className='text-white text-4xl mb-8 font-semibold'>{variant==='login'?"Sign in":"Register"}</h2>
                        <div className='flex flex-col gap-4 '>
                            {
                                variant === 'register' &&(
                                    <Input
                                    id='name'
                                    onChange={(ev:any) => setName(ev.target.value)}
                                    value={name}
                                    label='Name'
                                    type='text'
                                />
                                )
                            }
                            <Input
                                id='email'
                                onChange={(ev:any) => setEmail(ev.target.value)}
                                value={email}
                                label='Email'
                                type='email'
                            />

                           

                            <Input
                                id='password'
                                onChange={(ev:any) => setPassword(ev.target.value)}
                                value={password}
                                label='Password'
                                type='password'
                            />
                        </div>
                        <button className='bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition'>
                             {
                                variant ==='login'?'Login':'Register'
                             }
                        </button>
                       {
                        variant ==='register'?(
                          

<p className='text-neutral-500 mt-12'>Already have an account?
<span onClick={toggleVariant} className='text-white ml-1 hover:underline cursor-pointer'>Login</span>
</p>
                        ):(
                            <p className='text-neutral-500 mt-12'>First time using Netflix?
                            <span onClick={toggleVariant} className='text-white ml-1 hover:underline cursor-pointer'>Create an account</span>
                            </p>
                        )
                       }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth
