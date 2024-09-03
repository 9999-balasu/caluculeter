
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <ul style={{height:'70px',backgroundColor:'black',color:'white'}}>
      <li ><Link style={{color:'white'}} to="/home">Home</Link></li>
        <li><Link style={{color:'white'}} to="/pow2">Cal</Link></li>
      </ul>
    </div>
  )
}

export default Header
