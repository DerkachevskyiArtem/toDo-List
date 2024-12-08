import React from 'react';
import s from './Header.module.scss'

function Header() {
  return (
    <header className={s.Header}>
      <h1 className={s.headerHeading}>To-Do List</h1>
    </header>
  );
}

export default Header;
