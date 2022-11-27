import React from 'react'
import {  BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from './Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <Homepage/>
    </div>
  )
}

export default App