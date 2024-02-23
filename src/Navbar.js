import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div className='flex mt-10 font-sans text-xl font-medium '>
    <Link to="/" style={{marginLeft:'40%'}}>Home</Link>
    <Link to="/recipes" style={{marginLeft:'2%'}}>Recipes</Link>
    </div>
  )
}
