
import React from 'react'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Cal from './Cal.js'
import Header from './Header.js'
import Home from './Home.js'
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route exact path = '/home' element ={ <Home/> } /> 
      <Route exact path = '/pow2' element ={ <Cal/> } /> 
          </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
