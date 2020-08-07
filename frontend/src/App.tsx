import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import {Header} from './Header';
import {HomePage} from './HomePage'

/** @jsx jsx */
import {css, jsx} from '@emotion/core'
import { fontFamily, fontSize, gray2 } from './Styles';

const App: React.FC = () =>{
  return (
    <div className="App"
    css={css`
      font-family: ${fontFamily};
      font-size: ${fontSize};
      color: ${gray2};
      `}
    >
      <Header/>
      <HomePage/>
    </div>
  )
}

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
export default App;
