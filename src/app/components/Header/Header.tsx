import React from 'react';
import './Header.scss';
import Logo from '../Logo/Logo';
import { userStore } from '../../../store/user';
import { signOut } from 'next-auth/react';

const Header = () => {
  let {user} = userStore()

  return (
    <div className='header'>
      <Logo/>
      <div className='header__block'>
        <div className='header__userImg'>
          {user.profileImg.length > 3 ? <img src={`${user.profileImg}`} alt="" /> : 'O'}
        </div>
        <button className='header__btn' onClick={() => {signOut()}}>Sign Out</button>
      </div>
    </div>
  )
}

export default Header