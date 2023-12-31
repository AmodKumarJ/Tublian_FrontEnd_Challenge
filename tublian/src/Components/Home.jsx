import React from 'react'
import logo from '../assets/Logo_2.svg'
import world_map from '../assets/World Map.png'

import './Home.css'
import Account from './Account'
function Home() {
  const proceed = () =>{
    <Account/>
  }
  
  return (
    <>
    <div className='flex '>
      <div className=" div1 hidden md:block  w-1/2 md:h-screen  ">
        <img src={world_map} alt="" className='absolute bottom-0 left-9 '/>
        <div className='h-3/4 w-full bg-blue-600 rounded-t-full mt-44 '></div>
            
      </div>
    <div>
        <div className='logo justify-center w-fit px-6 pt-4 flex gap-2 text-[color:var(--base-900-dark,#FEFEFE)]'>
            <img src={logo} alt="logo" className='w-[21.531px] h-[24.913px] '/>
            <h1 className='text-[13.072px] pt-1 text-center font-normal leading-[140%]'>Tublian</h1>
        </div>
        <div className='list px-5 py-2'>
            <ul className='flex flex-wrap gap-3 '>
                <li className='text-sm not-italic font-medium leading-5  text-[color:var(--base-300-dark,#696969)] '>1:Get Started</li>
                <li className='text-sm not-italic font-medium leading-5  text-[color:var(--base-300-dark,#696969)]'>2:Create Account</li>
                <li className='text-sm not-italic font-medium leading-5  text-[color:var(--base-300-dark,#696969)]'>3:Account Setting</li>
                <li className='text-sm not-italic font-medium leading-5  text-[color:var(--base-300-dark,#696969)]'>4:Payment</li>
            </ul>
            <h1 className='py-2 text-[color:var(--base-900-dark,#FEFEFE)] text-lg not-italic font-bold leading-[30px] md:text-4xl md:leading-[52px]'>Get Started</h1>
            <p className='text-[color:var(--base-800-dark,#CFCFCF)] text-sm not-italic font-medium leading-5 '>Start recruiting streetcred developers, Today!!</p>
            
            <input type="text" placeholder="FirstName" className='bg-transparent flex w-80 items-center pb-[16px] pt-[8px] border-b-2 border-b-[color:var(--base-500-dark-secondary,#888) ] pr-[176px]  border-solid md:w-[405px]'/>
            <input type="text" placeholder="LastName"className='md:w-[405px] bg-transparent flex w-80 items-center pb-[16px] pt-[8px] border-b-2 border-b-[color:var(--base-500-dark-secondary,#888) ] pr-[176px]  border-solid '/>
            <button className='bg-yellow-600 flex md:w-[405px] w-[320px] justify-center my-4 mx-0 px-4 py-2 rounded-[30px] text-[color:var(--base-900-light,#121212)] text-base not-italic font-medium leading-6 ' onClick={proceed}>Proceed</button>
            <p className='text-white'>Already have an account?<span className='font-bold'>Log in</span></p>
        </div>
      
    </div>
    </div>
      
    </>
    
  )
}

export default Home
