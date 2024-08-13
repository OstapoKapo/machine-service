'use client'
import { useEffect } from 'react';
import style from  './page.module.scss';
import axios from 'axios';

export default function Home() {

  const getApiUrl = () => {
    if (process.env.NODE_ENV === 'development') {
        return 'http://localhost:3000/api'; // Local development
    } else {
        // Use the VERCEL_URL environment variable for the production environment
        return `https://${process.env.VERCEL_URL}/api`;
    }
};

 useEffect( ()=>{
 const getUser = async () => {
  const URL = getApiUrl()
    try {
      await axios.get(`${URL}/user`, {})
      .then((response) => {
          if(response.status === 200 ){
           console.log('dasd') 
          }else{
            alert('somethin went wrong');
          }
      })
      .catch((error) => {
          console.error('Error:', error);
      });
  }
  catch(error) {
      console.log(error);
  }
  }
  getUser()
 },[])

  return (
    <div className={style.container}>
      dsdas
    </div>
  );
}
