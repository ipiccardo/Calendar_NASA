'use client'

import React from 'react'
import { useState } from 'react'
import Button from './Button'
import { useRouter, useSearchParams, usePathname } from "next/navigation";

// SACAR A UN ARCHIVO EXTERNO
export const months = [
    { number: 1, name: 'ENERO' },
    { number: 2, name: 'FEBRERO' },
    { number: 3, name: 'MARZO' },
    { number: 4, name: 'ABRIL' },
    { number: 5, name: 'MAYO' },
    { number: 6, name: 'JUNIO' },
    { number: 7, name: 'JULIO' },
    { number: 8, name: 'AGOSTO' },
    { number: 9, name: 'SEPTIEMBRE' },
    { number: 10, name: 'OCTUBRE' },
    { number: 11, name: 'NOVIEMBRE' },
    { number: 12, name: 'DICIEMBRE' }
];

const Pagination = ({ monthOnGoing, formattedSelectedMonth }: any) => {
    const pathName = usePathname()
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams)
    const { replace } = useRouter();

    const [currentMonth, setCurrentMonth] = useState(parseInt(monthOnGoing))

    params.set('month', currentMonth.toString())

    const handleChangeMonth = (increment: number) => {
        const newMonth = currentMonth + increment;
        if (newMonth < 1) {
            setCurrentMonth(parseInt(monthOnGoing));
        } else if (newMonth > parseInt(monthOnGoing)) {
            setCurrentMonth(1);
        } else {
            setCurrentMonth(newMonth);
        }
    };

    replace(`${pathName}?${params?.toString()}`)


    return (
        <div>
            <h1 className='text-center'>{months[currentMonth - 1].name}</h1>
            <div className='flex justify-between'>
                <Button onClick={() => handleChangeMonth(-1)}>Prev</Button>
                <Button onClick={() => handleChangeMonth(1)}>Next</Button>
            </div>
        </div>
    )
}

export default Pagination