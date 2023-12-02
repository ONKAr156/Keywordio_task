import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Ads from './pages/Ads'
import Donut from './components/Donut'
import AdsForm from './pages/AdsForm'
import MediaForm from './pages/MediaForm'
import Test from './pages/Test'

const App = () => {
  return <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/ads' element={<Ads />} />
      <Route path='/adsform' element={<AdsForm />} />
      <Route path='/mediaform' element={<MediaForm />} />
      {/* --------------error page-------------------- */}
      <Route path='*' element={<h1> Error 404 Page not found </h1>} />
    </Routes>
  </BrowserRouter>

    // return <>
    //   <Test />
    // </>
}

export default App