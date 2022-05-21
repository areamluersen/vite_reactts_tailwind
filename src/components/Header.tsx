import React from 'react';
import { RedirectButton } from './RedirectButton';

// Add option to return home
const Header: React.FC = () => {
  return (
  <header className="App-header">
    <p >{`<this is my temporary header />`}</p>
    <RedirectButton name='Home' redirectsTo='/'/>
    </header>
);
}

export default Header;