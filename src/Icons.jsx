import React from 'react';
import './icons.css';

function Icons() {
  return (
        <footer className='icon-container'>
            <a href='https://github.com/LuisPa98/react-api-project' target='_blank'>
              <img src='https://cdn1.iconfinder.com/data/icons/unicons-line-vol-3/24/github-alt-512.png' alt="icon of github"/>
              </a>
            <a><img src="https://cdn1.iconfinder.com/data/icons/unicons-line-vol-4/24/linkedin-1024.png" alt="icon of linkedin" /></a>
            <a href='https://api.le-systeme-solaire.net/en/' target='_blank'>
              <img src="https://cdn1.iconfinder.com/data/icons/unicons-line-vol-2/24/database-512.png" alt="icon of database"></img></a>
        </footer>
  )
}

export default Icons