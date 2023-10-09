import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.scss'
import DarkModeToggle from '../dark_mode_toggle';

Header.propTypes = {
  userName: PropTypes.string.isRequired
};

function Header({userName}) {

  return (
    <header className='header'>

      <div>
        <h3>Bookstore</h3>
      </div>
      <DarkModeToggle/>
      <div className='profile'>
        <span>👤</span>
        <span>{userName}</span>
      </div>
      <hr/>
    </header>
  );
}

export default Header;
