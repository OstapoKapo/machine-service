'use client'
import React, {useEffect, useState} from 'react';
import './main.scss'
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { serverUrlStore } from '../../store/serverUrl';
import { userStore } from '../../store/user';
import Header from '../components/Header/Header';
import CarBlock from '../components/Car/CarBlock';
import Pagination from '../components/Pagination/Pagination';
import CreateCar from '../components/CreateCar/CreateCar';

const Main = () => { 

  const session = useSession();
  const router = useRouter();

  const [addCarKey, setAddCarKey] = useState<boolean>(false);
  const [carNumber, setCarNumber] = useState<number>(0);
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
    <div className='main'>
      <Header/>
      <div className='main__line'></div>
      <div className='main__row'>
        <div className='main__btnGroup'>
          <button className='main__btn' onClick={() => {setAddCarKey(!addCarKey)}}>{addCarKey ? 'Cancel' : 'Add Car'}</button>
          <div>
            <div className='main__storyImg'>
              <img src="/icon/history-book.png" alt="machine-service" />
            </div>
          </div>
        </div>
        <input name='findCarInp' type="text" className='main__input' placeholder='Find CarBlock' />
      </div>
      {user.name.length > 0 ? addCarKey ? <CreateCar setAddCarKey={ setAddCarKey }/> : <CarBlock carNumber={carNumber}/> : ''}
      <Pagination carNumber={carNumber} setCarNumber={setCarNumber} />
    </div>
  )
}

export default Main;