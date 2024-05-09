"use client"
import { Button } from '@/components/ui/button'
import { useCounte } from '@/redux/Slices/CounterSlice'
import React, { useState } from 'react'
import { Menu, SquareX } from "lucide-react"

const page = () => {
  const [open, setOpen] = useState<boolean>(false)


  return (
    <>
      <main className='w-screen  bg-slate-200'>
        <div className='w-full h-screen relative'>
          <div className={`md:w-[300px] w-full ${!open ? "-translate-x-full " : ""}  xl:translate-x-0 bg-violet-300 h-full fixed`}>
            <div className='w-full flex justify-end '><SquareX onClick={() => { setOpen(false) }} className='m-4 cursor-pointer' /></div>
          </div>
          <div className={`${!open ? "xl:w-[calc(100%-300px)] xl:ml-[300px]" : ""}   w-full  h-full bg-red-400`}>
            <div className='w-full p-5 bg-yellow-300'><Menu className='z-50 cursor-pointer' onClick={() => { setOpen(!open) }} /></div>
            <div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default page