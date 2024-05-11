"use client"
import React, { useState } from 'react'
import { Menu, SquareX } from "lucide-react"

const page = () => {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <>
      <main className='w-screen  bg-slate-200'>
        <div className='w-full h-screen relative'>
          <div className={`md:w-[300px] w-full ${!open ? "-translate-x-full " : ""} ${open ? "xl:translate-x-0" : ""}  bg-violet-300 h-full fixed anime`}>
            <div className='w-full flex justify-end '><SquareX onClick={() => { setOpen(false) }} className='m-4 cursor-pointer' /></div>
          </div>
          <div className={`${open ? "xl:w-[calc(100%-300px)] xl:ml-[300px]" : ""}   w-full  h-full bg-red-400 anime`}>
            <div className='w-full p-5 bg-yellow-300'><Menu className=' cursor-pointer' onClick={() => { setOpen(!open) }} /></div>
            <div>
            </div>
          </div>
        </div>

      </main>
    </>
  )
}

export default page