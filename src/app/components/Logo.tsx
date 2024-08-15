import React from 'react';
import './Logo.scss';
import Image from 'next/image';

const Logo = () => {
  return (
    <div className='logo'>
        <Image src='/icon/logo.png' width={80} height={80} alt='machine_service'></Image>
        <p className='logo__text'>Machine_Service</p>
    </div>
  )
}

export default Logo