'use client'
import Link from 'next/link'
import React from 'react'
import { useParams } from 'next/navigation'

export const ReturnBack = () => {

    const params = useParams()

    const {pictureId}:any = params

    const convertIntoArray = pictureId.split('-')

    const month = parseInt(convertIntoArray[1])
    
  return (
    <Link href={`/?month=${month}`} className="inline-block bg-white text-primary px-4 py-2 mt-10 ml-8 rounded-lg border border-primary hover:text-primary hover:bg-secondary hover:border-transparent transition-colors duration-300 absolute top-2 left-2">Back</Link>
  )
}

export default ReturnBack