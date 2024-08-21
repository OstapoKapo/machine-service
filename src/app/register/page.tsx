'use client'
import React, { FormEvent, useEffect } from 'react';
import './register.scss';
import axios from 'axios';
import { serverUrlStore } from '../../store/serverUrl';
import { useRouter } from 'next/navigation';
import { fullUser } from '../../types/index';

type RegUser = {
  name: string,
  email: string,
  password: string,
  profileImg: string,
  cars: Array<any>
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
    const user: RegUser = {
      name: name,
      email: email,
      password: password,
      cars: [],
      profileImg: '' 
    };

    (e.target as HTMLFormElement).reset();
    try{
      createUser(user);
    }catch(err){
      console.log(`You have error ---- ${err}`)
    }
  }

  const createUser = async (user: RegUser) => {
    await axios.post(`${serverUrl}/signIn`, {user})
    .then((response) => {
    if(response.status === 200){
      router.push('/login');
    }else if(response.status === 201){
      alert('You have empty inputs');
    }else if(response.status === 202 ){
      alert('You have account with this email')
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