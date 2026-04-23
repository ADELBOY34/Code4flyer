import React from 'react'
import { Route, Routes } from 'react-router-dom'

import PageAdel from './pages/PageAdel'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<h1>home page</h1>}/>
      
        <Route path='/adelpage' element={
          <PageAdel/>
      }/>
    
      </Routes>
  
    </div>
  )
}

export default App