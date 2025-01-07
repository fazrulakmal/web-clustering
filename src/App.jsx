// import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';

import Dashboard from './pages/Dashboard';
import InputData from './pages/InputDataPage';
import Hasil from './pages/HasilPage';
import Analisa from './pages/AnalisaPage';

function App() {
  return (
      <Router>
        <div className='App'>
          <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/inputdata' element={<InputData/>}/>
            <Route path='/hasil' element={<Hasil/>}/>
            <Route path='/analisa' element={<Analisa/>}/>
          </Routes>
        </Suspense>
        </div>
      </Router>
  )
}

export default App
