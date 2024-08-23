import React from 'react';
import './Logo.scss';
import Image from 'next/image';

const Logo = () => {
  return (
    <div className='logo'>
        <div className='logo__img'>
          <img src="/icon/logo.png" alt="machineService" />
        </div>
        <p className='logo__text'>MachineService</p>
    </div>
  )
}

export default Logo