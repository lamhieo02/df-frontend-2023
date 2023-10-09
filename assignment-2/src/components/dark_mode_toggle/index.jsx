import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useDarkMode from 'use-dark-mode';
import './styles.scss'


function DarkModeToggle() {

  const [mode, setMode] = useState(true)
  const darkMode = useDarkMode(false);

  return (
    <div className='switchMode'>
      <label className="switch">
        <input type="checkbox" onClick={() => {
          setMode(!mode)
          if(mode === false) {
            darkMode.disable()
          } else {
            darkMode.enable()
          }
        }} />
        <span className="slider round"></span>
      </label>
      <p className='stateMode'>{setStatusMode(mode)}</p>
    </div>
  );
}

const setStatusMode = (status) => {
  if(status === true) {
    return 'Light mode'
  } else {
    return 'Dark mode'
  }
}

export default DarkModeToggle;