import React from 'react';

import './Header.scss';
import image from '../../../assets/thumbnail-vite-react.jpg';

export const Header = () => (
  <header>
    <div className="header-wrapper">
      <div>
        <img src={image} height={50}/>
        <h1>Find The Best Route Path</h1>
      </div>
    </div>
  </header>
);
