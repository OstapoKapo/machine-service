'use client'
import React, {useEffect} from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import './page.scss';
import Logo from './components/Logo/Logo';
import Link from 'next/link';

export default function Home() {

  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session.status === 'authenticated') {
      router.push('/main');
    }
  }, [session.status, router]);

  if (session.status === 'loading') {
    return <p>Loading... </p>;
  }

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
