// import { useState } from 'react'
import './App.css'
import { ApolloProvider } from '@apollo/client'
import client from './client'
// import Country from './components/Country'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Vista1 from './pages/Vista1'
import Vista2 from './pages/Vista2'
import Sidebar from './components/Sidebar'
import Search from './components/Search'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <ApolloProvider client={client}>
      {/* <Country/> */}
      <div className='w-full grid grid-rows-1 content'>
        <Sidebar/>
        <div>
          <Search/>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/vista1" element={<Vista1/>} />
              <Route path="/vista2" element={<Vista2 />} />
              {/* <Route path="/edit/:id" element={<TaskForm />} /> */}
          </Routes>
        </div>
      </div>
    </ApolloProvider>
  )
}

export default App
