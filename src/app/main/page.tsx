'use client'
import React, {useEffect} from 'react';
import './main.scss'
import axios from 'axios';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { serverUrlStore } from '../../store/serverUrl';
import { userStore } from '../../store/user';
import { fullUser } from '../../types/index';

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

  if (session.status === 'loading') {
    return <p>Loading... </p>;
  }

  return (
    <div onClick={()=> {signOut()}}>{user.name} {user.email}</div>
  )
}

export default Main;