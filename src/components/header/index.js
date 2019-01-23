import React from 'react';
import { HeaderUI, Info, Menu, BoxTitle } from './style';
import gitHubLogo from '../../assets/images/github.svg';
import emailLogo from '../../assets/images/email.svg';
import twiiterLogo from '../../assets/images/twiiter.svg';

const Header = () => (
  <HeaderUI>
    <Info>
      <span>Julio V. Melo</span>
      <Menu>
        <ul>
          <li>
            <a href="https://github.com/JulioVMelo" rel="noopener noreferrer" target="_blank"><img src={ gitHubLogo } alt="github" /></a>
          </li>
          <li>
            <a href="https://twitter.com/JulioVilarM" rel="noopener noreferrer" target="_blank"><img src={ twiiterLogo } alt="twiiter"/></a>
          </li>
          <li>
            <a href="mailto:juliovilar93@gmail.com"><img src={ emailLogo }  alt="email"/></a>
          </li>
        </ul>
      </Menu>
    </Info>
    <BoxTitle>
      <h2>Best Sellers <span>The New York Times</span></h2>
    </BoxTitle>
  </HeaderUI>
);

export default Header;
