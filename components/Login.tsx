import Image from 'next/image'
import React from 'react'
import {signIn} from "next-auth/client"

function Login() {
  return (
    <div className='grid place-items-center mt-10'>
        <Image
        src="https://links.papareact.com/t4i"
        height="300"
        width="400"
        alt=""
        />
        <h1  onClick={() => signIn()}
        className='mt-11 p-5 bg-blue-500 rounded-full text-white 
        text-center cursor-pointer'>Login with Facebook</h1>
    </div>
  )
}

export default Login