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
    <div className="start">
      <div className='start__left'>
        <div className='min-w-[300px] h-full flex flex-col items-start justify-center'>
          <Logo />
          <div className="start__btnGroup">
            <Link href="/login">
              <div className="start__btn start__btn_login">Log In</div>
            </Link>
            <Link href="/register">
              <div className="start__btn start__btn_register">Sign In</div>
            </Link>
          </div>
        </div>
      </div>
      <div className='start__right'>
        <div className='start__img'></div>
      </div>
    </div>
  );
}
