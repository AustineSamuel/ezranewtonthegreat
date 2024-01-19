import Link from 'next/link'
import React from 'react'
import {FaArrowDown, FaArrowUp, FaNairaSign, FaNetworkWired, FaPlus, FaUser} from 'react-icons/fa6'

export default function index() {
  return (
    <div>
      <div className='bg-primary p-4 rounded-b-lg '>
        <div className='flex items-center justify-between'>
          <div className=' '>
            <span className='text-sm text-gray-200'>Available Balance</span>
            <p className='flex items-center space-x-1'><span className='text-2xl text-white font-bold'>&#8358;</span> <span className='font-bold text-white text-2xl'>50,000</span></p>
          </div>
          <div className='flex justify-center items-center my-4'>
            <FaUser className='text-white  border-2 rounded-full p-1 text-4xl'/>

          </div>
        
        </div>

        <div className='flex justify-between mt-8 '>
          <div className='flex justify-center flex-col'>
            
          <Link  href={'/fund'} className='text-3xl  '><FaPlus className='text-primary rounded-lg bg-white p-2'/></Link>
          <span className='text-[12px] text-white mt-1'>Fund</span>

          </div>
        
          <div className='flex justify-center flex-col'>
            
            <Link  href={'/fund'} className='text-3xl  '><FaArrowUp className='text-primary rounded-lg bg-white p-2'/></Link>
            <span className='text-[12px] text-white mt-1'>Transfer</span>
  
            </div>
            <div className='flex justify-center flex-col'>
            
            <Link  href={'/fund'} className='text-3xl  '><FaArrowDown className='text-primary rounded-lg bg-white p-2'/></Link>
            <span className='text-[12px] text-white mt-1'>Withdraw</span>
  
            </div>
        </div>

      </div>

      <div className='bg-white  border rounded-t-lg  p-4 h-40 mt-2'>

        
      </div>

      



    </div>
  )
}
