import React from 'react';

import ServerStatus from "../ServerStatus/ServerStatus";

import './Footer.scss';

const Footer = () => {
  return (
    <footer className='Footer'>
      <div className='Copyright'>&copy;2023 Trugilho</div>
      <ServerStatus />
    </footer>
  )
};

export default Footer;
