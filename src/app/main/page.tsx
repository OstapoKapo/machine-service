'use client'
import React, {useEffect} from 'react';
import './main.scss'
import axios from 'axios';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { serverUrlStore } from '../../store/serverUrl';
import { userStore } from '../../store/user';
import { fullUser } from '../../types/index';
import Header from '../components/Header/Header';
import Pagination from '../components/Pagination/Pagination';

const Main = () => { 

  const session = useSession();
  const router = useRouter();

  const {user, updateUser} = userStore();
  const {serverUrl, setServerUrl} = serverUrlStore();

  useEffect(() => {
    if (session.status === 'unauthenticated') {
      router.push('/');
    }

    const handleToSetServerUrl = () => {
      setServerUrl();
    };
    handleToSetServerUrl();

    const getDbUser = async () => {
      const sessionEmail = session.data?.user?.email;

      await axios.post(`${serverUrl}/getDbUser`, {sessionEmail})
        .then((response) => {
            if(response.status === 200 ){
              updateUser(response.data.dbUser);
            }
      })
    }
    
    if(serverUrl !== 'server' && session.data?.user !== undefined){
      getDbUser();
    }
    
  }, [session.status, router, serverUrl]);


  useEffect(()=>{
    console.log(user)
  },[user])

  if (session.status === 'loading') {
    return <p>Loading... </p>;
  }

  return (
    <div className='main'>
      <Header/>
      <div className='main__line'></div>
      <div className='main__row'>
        <div className='main__btn'>Add Car</div>
        <input name='findCarInp' type="text" className='main__input' placeholder='Find Car' />
      </div>
      <Pagination/>
    </div>
  )
}

export default Main;