import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { Suspense } from 'react';

import Dashboard from './pages/Dashboard';

function App() {
  return (
      <Router>
        <div className='App'>
          <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/dashboard' element={<Dashboard/>}/>
          </Routes>
        </Suspense>
        </div>
      </Router>
  )
}

export default App
