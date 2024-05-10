'use client'

import React, { useEffect } from 'react'
import { useState } from 'react'
import Button from '../components/ui/Button'
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { PaginationProps } from '../../../types';
import { months } from '../../../data';


const Pagination:React.FC<PaginationProps> = ({ monthOnGoing, formattedSelectedMonth }) => {
    const pathName = usePathname()
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams)
    const { replace } = useRouter();

    const [currentMonth, setCurrentMonth] = useState(formattedSelectedMonth !== monthOnGoing && formattedSelectedMonth !== '0' ? parseInt(formattedSelectedMonth) : parseInt(monthOnGoing))

    params.set('month', currentMonth.toString())


    const handleChangeMonth = (increment: number) => {
        const newMonth = currentMonth + increment;
        if (newMonth < 1) {
            setCurrentMonth(1);
        } else if (newMonth > parseInt(monthOnGoing)) {
            setCurrentMonth(parseInt(formattedSelectedMonth));
        } else {
            setCurrentMonth(newMonth);
        }
    };
    
    useEffect(() => {
        replace(`${pathName}?${params?.toString()}`)
    }, [currentMonth])
    
    

    return (
        <div>
            <h1 className='text-center text-4xl'>{months[currentMonth - 1].name}</h1>
            <div className='flex justify-between'>
                <Button onClick={() => handleChangeMonth(-1)}>Prev</Button>
                <Button onClick={() => handleChangeMonth(1)}  name='next'>Next</Button>
            </div>
        </div>
    )
}

export default Pagination