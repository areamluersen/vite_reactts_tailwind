import { useState } from 'react'
import './App.css'
import List from './components/Table'


function CardUser() {
  return (
    <div className='bg-gradient-to-r from-slate-500 to-slate-800 p-2 mb-20 rounded-lg grid grid-cols-3'>
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
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <CardUser />
        <h2>Hello Vite + React! + Tailwind</h2>
        <h2>Some examples</h2>
           <List />
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
        </p>
      </header>
    </div>
  )
}

export default Home

