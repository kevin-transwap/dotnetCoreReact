import React from 'react';
//{ lazy, Suspense } from 'react';
//import logo from './logo.svg';
//import './App.css';
import { Header } from './Header';
import { HomePage } from './HomePage';

/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { fontFamily, fontSize, gray2 } from './Styles';

import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
//import { AskPage } from './AskPage';
import { SearchPage } from './SearchPage';
import { SignInPage } from './SignInPage';
import { NotFoundPage } from './NotFoundPage';
import { QuestionPage } from './QuestionPage';

const Suspense = (React as any).Suspense;
const lazy = (React as any).lazy;

const AskPage = lazy(() => import('./AskPage'));

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div
        className="App"
        css={css`
          font-family: ${fontFamily};
          font-size: ${fontSize};
          color: ${gray2};
        `}
      >
        <Header />
        <Switch>
          <Redirect from="/home" to="/" />
          <Route exact path="/" component={HomePage} />
          <Route path="/search" component={SearchPage} />
          <Route
            path="/ask"
            // component={AskPage}
          >
            <Suspense
              fallback={
                <div
                  css={css`
                    margin-top: 100px;
                    text-align: center;
                  `}
                >
                  Loading...
                </div>
              }
            >
              <AskPage />
            </Suspense>
          </Route>
          <Route path="/signin" component={SignInPage} />
          <Route path="/questions/:questionId" component={QuestionPage} />
          <Route component={NotFoundPage} />
        </Switch>
        {/* <HomePage /> */}
      </div>
    </BrowserRouter>
  );
};

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
