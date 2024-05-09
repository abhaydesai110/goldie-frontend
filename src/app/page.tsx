"use client"
import { Button } from '@/components/ui/button'
import { useCounte } from '@/redux/Slices/CounterSlice'
import React from 'react'

const page = () => {
  const user = useCounte()
  console.log('user', user)
  return (
    <>
      <Button>Click me</Button>
    </>
  )
}

export default page