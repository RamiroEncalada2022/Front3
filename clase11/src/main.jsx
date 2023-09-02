import React from 'react'
import ReactDOM from 'react-dom/client'
import { render } from "react-dom";
import App from "./App";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './Home'
import About from './About'
import Faqs from './Faqs'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<App/>} >
      <Route path='home' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='faqs' element={<Faqs/>} />
  </Route>
  </Routes>
  </BrowserRouter>
  </React.StrictMode>
  )
  