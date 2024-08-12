'use client'
import { useEffect } from 'react';
import style from  './page.module.scss';
import axios from 'axios';

export default function Home() {

 useEffect( ()=>{
 const getUser = async () => {
    const response = await axios.get('http://localhost:3000/api/user', {});
    console.log(response)
  }
  getUser()
 },[])

  return (
    <div className={style.container}>
      dsdas
    </div>
  );
}
