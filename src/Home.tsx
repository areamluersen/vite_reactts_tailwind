import { useState } from 'react'
import Header from './components/Header'
import List from './components/Table'


function CardUser() {
  return (
    <div className='bg-gradient-to-r from-gray-800 to-zinc-900 p-2 mb-20 rounded-lg grid grid-cols-3 shadow-lg'>
      <div className='flex justify-start w-40'>
        <img src={'https://avatars.githubusercontent.com/u/24281509?v=4'} className="rounded-full" alt="logo" />
      </div>
      <div className='pl-6 col-span-2 flex justify-start text-3xl'>
        <div className='grid align-middle content-center place-items-start'>
          <p className='mb-2' > Aream Luersen</p>
          <p className='text-2xl'>Full Stack Developer</p>  
          <a href='https://github.com/areamluersen' className='text-blue-500 text-2xl'>Github</a>  
        </div>
      </div>
    </div>
  )
}

function Home() {
  
  return (
    <div className="App">
      <Header />
      <body className='App-body'>
 
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
  )
}

export default Home

