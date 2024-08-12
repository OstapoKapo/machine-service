'use client'
import { useEffect } from 'react';
import style from  './page.module.scss';
import axios from 'axios';

export default function Home() {

 useEffect( ()=>{
 const getUser = async () => {
    try {
      await axios.get('https://machine-service.vercel.app/api/user', {})
      .then((response) => {
          if(response.status === 200 ){
            const res = response;
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
