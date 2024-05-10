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
    <Link href={`/?month=${month}`}>Back</Link>
  )
}

export default ReturnBack