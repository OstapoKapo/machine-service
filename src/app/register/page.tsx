'use client'
import React, { FormEvent, useEffect } from 'react';
import './register.scss';
import axios from 'axios';
import { serverUrlStore } from '../../store/serverUrl';
import { useRouter } from 'next/navigation';
import { fullUser } from '../../types';


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

    (e.target as HTMLFormElement).reset();

    if(name.length > 2 && email.length > 2 && password.length > 2){
      const user: fullUser = {
        name: name,
        email: email,
        password: password,
        cars: [],
        profileImg: ''
      };

      try{
      await createUser(user);
      }catch(err){
        console.log(`You have error ---- ${err}`)
      }
    }else{
      alert('Please fill all inputs')
    }
  }

  const createUser = async (user: fullUser) => {
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
    <div className='register'>
        <p className='register__tittle'>Sign In</p>
        <form className='register__form' onSubmit={handleSubmit}>
          <input className='register__input' name='nameInp' type="text" placeholder='NickName' />
          <input className='register__input' name='emailInp' type="email" placeholder='Email' />
          <input className='register__input' name='passwordInp' type="password" placeholder='Password' />
          <button className='register__btn'>Sign In</button>
        </form>
    </div>
  )
}

export default Register