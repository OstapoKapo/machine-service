'use client'
import React, { FormEvent, useEffect } from 'react';
import './login.scss';
import axios from 'axios';
import { serverUrlStore } from '../../store/serverUrl';
import { signIn } from 'next-auth/react';
import {signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';


const Login = () => {

  const session = useSession();
  const router = useRouter();
  const {serverUrl, setServerUrl} = serverUrlStore();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const email = (form.elements.namedItem('emailInp') as HTMLInputElement).value.toLowerCase();
    const password = (form.elements.namedItem('passwordInp') as HTMLInputElement).value.toLowerCase();

    signIn('credentials', {email,password});

    (e.target as HTMLFormElement).reset();
  }

  useEffect(() => {
    const handleToSetServerUrl = () => {
      setServerUrl()
    };
    handleToSetServerUrl();

    if (session.status === 'authenticated') {
      const changeImgDbUser = async () => {
        const sessionUser = session.data?.user;

        await axios.post(`${serverUrl}/changeImgDbUser`, {sessionUser})
          .then((response) => {
            if(response.status === 200 ){
              router.push('/main');
            }else if(response.status === 201){
              signOut();
              alert('You dont have account with this email');
              router.push('/');
            }
          })
      }

      if (session.data.user?.image !== undefined){
        if(serverUrl !== 'server'){
          changeImgDbUser();
        }
      }else{
        router.push('/main');
      }
    }
  }, [session.status, router]);

  if (session.status === 'loading') {
    return <p>Loading... </p>;
  }
  
  return (
    <div className='login'>
      <p className='login__tittle'>Log In</p>
      <form className='login__form' onSubmit={handleSubmit}>
        <input className='login__input' name='emailInp' type="email" placeholder='Email' />
        <input className='login__input' name='passwordInp' type="password" placeholder='Password' />
        <button className='login__btn' >Log In</button>
      </form>
      <div className='login__icon' onClick={() => signIn ("google")}></div>
      {/* <div className='icon' onClick={() => signOut()}></div> */}
      <p className='login__iconText'>login by google account</p>
    </div>
  )
}

export default Login