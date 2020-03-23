import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation('app');
  const hello = 'React i18n';

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p data-testid="hello-area">
          {t('hello', { target: hello })}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('learn_react')}
        </a>
      </header>
    </div>
  );
}

export default App;
