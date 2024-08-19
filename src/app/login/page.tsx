'use client'
import React, { FormEvent, useEffect } from 'react';
import { signIn } from 'next-auth/react';
import {signOut, useSession } from 'next-auth/react';
import './login.scss';

const Login = () => {

  const session = useSession();
  console.log(session)
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    
    const email = (form.elements.namedItem('emailInp') as HTMLInputElement).value.toLowerCase();
    const password = (form.elements.namedItem('passwordInp') as HTMLInputElement).value.toLowerCase();

    (e.target as HTMLFormElement).reset();
  }

  return (
    <div className='myContainer'>
      <p className='header'>Log In</p>
      <form className='form' onSubmit={handleSubmit}>
        <input className='input'type="email" placeholder='Email' />
        <input className='input'type="password" placeholder='Password' />
        <button className='btn' >Log In</button>
      </form>
      <div className='icon' onClick={() => signIn ("google")}></div>
      <div className='icon' onClick={() => signOut()}></div>
      <p className='iconText'>login by google account</p>
    </div>
  )
}

export default Login