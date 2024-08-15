'use client'
import './page.scss';
import { serverUrlStore } from '../store/serverUrl';
import { useEffect } from 'react';
import Logo from './components/Logo';

export default function Home() {

 const {setServerUrl} = serverUrlStore();

 useEffect(()=>{
  const handleToSetServerUrl = () => {
    setServerUrl()
  };
  handleToSetServerUrl();
 },[])

  return (
    <div className="myContainer">
      <div className='myContainer__left'>
        <div className='w-min h-full flex flex-col items-start justify-center'>
        <Logo />
          <div className="btnGroup">
            <div className="btn btn_login">Log In</div>
          <div className="btn btn_register">Sign In</div>
        </div>
        </div>
      </div>
      <div className='myContainer__right'>
        <div className='img'></div>
      </div>
    </div>
  );
}
