import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Home() {
    
  const [jam, setJam]=useState(new Date().toLocaleTimeString("id-ID"))
  const tick = ()=>{
    setInterval(()=>setJam(new Date().toLocaleTimeString("id-ID")),1000)
  }
  useEffect(()=>{
    tick()
    return (()=>{
      setJam([])
    })
  },[])


  return (
    <>
    <p className='jam' >{jam}</p>
      <div className='d-flex flex-column justify-content-center align-items-center full'>
      <h1 className='display-4 naik d-md-none' ><Link to='/work'>Work</Link></h1>
      <h1 className='display-4 turun d-md-none' ><Link to='/about'>About</Link></h1>
      <h1 className='display-4 naik d-md-none' ><Link to='/contact'>Contact</Link></h1>
      <h1 className='display-4 turun d-md-none' ><Link to='/blog'>Blog</Link></h1>
      <h1 className='display-1 naik d-none d-md-block' ><Link to='/work'>Work</Link></h1>
      <h1 className='display-1 turun d-none d-md-block' ><Link to='/about'>About</Link></h1>
      <h1 className='display-1 naik d-none d-md-block' ><Link to='/contact'>Contact</Link></h1>
      <h1 className='display-1 turun d-none d-md-block' ><Link to='/blog'>Blog</Link></h1>
      </div>
    </>
  );
}

export default Home;