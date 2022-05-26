import { useState } from 'react';
import { CardUser } from './components/CardUser';
import Header from './components/Header';
import List from './components/Table';

function Home() {
  return (
    <div className="App bg-dark-950">
      <Header />
      <body className="App-body">
        <CardUser />
        <h2>Some dev Examples</h2>
        <List />
      </body>
      <footer>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tailwind
          </a>
        </p>
      </footer>
    </div>
  );
}

export default Home;
