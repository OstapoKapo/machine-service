'use client'
import React, { FormEvent, useEffect } from 'react';
import './register.scss';
import axios from 'axios';
import { serverUrlStore } from '../../store/serverUrl';
import { useRouter } from 'next/navigation';

interface user {
  name: string,
  email: string,
  password: string
}

const Register = () => {
   
  const {serverUrl, setServerUrl} = serverUrlStore();
  const router = useRouter(); 

  useEffect(()=>{
    const handleToSetServerUrl = () => {
      setServerUrl()
    };
    handleToSetServerUrl();
  },[])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    
    const name = (form.elements.namedItem('nameInp') as HTMLInputElement).value.toLowerCase();
    const email = (form.elements.namedItem('emailInp') as HTMLInputElement).value.toLowerCase();
    const password = (form.elements.namedItem('passwordInp') as HTMLInputElement).value.toLowerCase();
    const user: user = {
      name: name,
      email: email,
      password: password
    };

    (e.target as HTMLFormElement).reset();
    try{
      createUser(user);
    }catch(err){
      console.log(`You have error ---- ${err}`)
    }
  }

  const createUser = async (user:user) => {
    await axios.post(`${serverUrl}/signIn`, {user})
    .then((response) => {
    if(response.status === 200){
      console.log(response.data)
      router.push('/login');
    }
    })
  }

  return (
    <div className='myContainer'>
        <p className='header'>Sign In</p>
        <form className='form' onSubmit={handleSubmit}>
          <input className='input' name='nameInp' type="text" placeholder='NickName' />
          <input className='input' name='emailInp' type="email" placeholder='Email' />
          <input className='input' name='passwordInp' type="password" placeholder='Password' />
          <button className='btn'>Sign In</button>
        </form>
    </div>
  )
}

export default Register