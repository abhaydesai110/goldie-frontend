"use client"
import React, { useState } from 'react'
import { Menu, SquareX } from "lucide-react"

const page = () => {
  const [open, setOpen] = useState<boolean>(true)
  return (
    <>
      <main className='w-screen  bg-slate-200'>
        <div className='w-full h-screen relative'>
          {/* left-sidebar  */}
          <div className={`md:w-[300px] w-full ${!open ? "-translate-x-full " : ""} ${open ? "xl:translate-x-0" : ""}  bg-goldie-grayLight  h-full fixed anime px-7`}>
            <div className='h-2/12 bg-slate-100'>
              <div className='w-full flex justify-end '><SquareX onClick={() => { setOpen(false) }} className='mt-2 cursor-pointer' /></div>
              <div>Logo</div>
            </div>
            <div className='h-9/12  overflow-y-auto py-2'>
              <div className='w-full'>
                <div className='py-4 w-full bg-gradient-to-r from-yellow-100 to-goldie-grayLight'>
                  <div className='w-full border-l-2 px-5  border-goldie-primary text-lg font-semibold text-goldie-primary'>
                    Users
                  </div>
                </div>
              </div>
              <div className='w-full'>
                <div className='py-4 w-full  bg-goldie-grayLight'>
                  <div className='w-full  px-5   text-lg  text-goldie-gray'>
                    Product
                  </div>
                </div>
              </div>
              <div className='w-full'>
                <div className='py-4 w-full  bg-goldie-grayLight'>
                  <div className='w-full  px-5   text-lg  text-goldie-gray'>
                    Product
                  </div>
                </div>
              </div>
              <div className='w-full'>
                <div className='py-4 w-full  bg-goldie-grayLight'>
                  <div className='w-full  px-5   text-lg  text-goldie-gray'>
                    Product
                  </div>
                </div>
              </div>
              <div className='w-full'>
                <div className='py-4 w-full  bg-goldie-grayLight'>
                  <div className='w-full  px-5   text-lg  text-goldie-gray'>
                    Product
                  </div>
                </div>
              </div>
              <div className='w-full'>
                <div className='py-4 w-full  bg-goldie-grayLight'>
                  <div className='w-full  px-5   text-lg  text-goldie-gray'>
                    Product
                  </div>
                </div>
              </div>
              <div className='w-full'>
                <div className='py-4 w-full  bg-goldie-grayLight'>
                  <div className='w-full  px-5   text-lg  text-goldie-gray'>
                    Product
                  </div>
                </div>
              </div>
            </div>
            <div className='h-1/12 '>
              <button className='text-goldie-dander text-lg font-semibold w-full text-center bg-white hover:bg-goldie-grayLight shadow anime  rounded py-4'>
                Logout
              </button>
            </div>
          </div>
          <div className={`${open ? "xl:w-[calc(100%-300px)] xl:ml-[300px]" : ""} flex flex-col  w-full  h-full bg-white anime`}>
            {/* Top-bar */}
            <div className='w-full py-3.5 bg-white shadow-xl shadow px-12 flex items-center space-x-2'>
              <Menu className=' cursor-pointer' onClick={() => { setOpen(!open) }} />
              <h3 className='font-semibold' >
                All Users
              </h3>
            </div>

            {/* Right-sidebar */}
            <div className='righsidebarcontant'>
              <div className='wrapper  h-[1000px] bg-white'>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default page