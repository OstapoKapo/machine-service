'use client'
import './page.scss';
import Logo from './components/Logo/Logo';
import Link from 'next/link';

export default function Home() {

  return (
    <div className="myContainer">
      <div className='myContainer__left'>
        <div className='min-w-[300px] h-full flex flex-col items-start justify-center'>
          <Logo />
          <div className="btnGroup">
            <Link href="/login">
              <div className="btn btn_login">Log In</div>
            </Link>
            <Link href="/register">
              <div className="btn btn_register">Sign In</div>
            </Link>
          </div>
        </div>
      </div>
      <div className='myContainer__right'>
        <div className='img'></div>
      </div>
    </div>
  );
}
