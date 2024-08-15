'use client'
import { useEffect } from 'react';
import style from  './page.module.scss';

export default function Home() {

 useEffect( ()=>{
 const getUser = async () => {
    try {
      await axios.post(`https://machine-service-server.onrender.com/api/user`, {})
      .then((response) => {
          if(response.status === 200 ){
           console.log(response.data)
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
