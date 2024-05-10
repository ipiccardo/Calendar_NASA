import React from 'react'
import api from '../../../api'
import Image from 'next/image'
import { fillWidthoUtPicture, getCurrentMonthData, getDayDataFormatted } from '../../../utils'
import { CalendarProps, Pictures } from '../../../types'
import Pagination from './Pagination'
import Link from 'next/link'



export default async function Calendar({ selectedMonth }:CalendarProps) {

    const formattedSelectedMonth = selectedMonth < '9' && !selectedMonth.includes('0') ? `0${selectedMonth}` : selectedMonth

    const {startDay, endDay} = getDayDataFormatted(formattedSelectedMonth)

    const allPictures = await api.list(startDay, endDay)

    const {totalDaysOfMonth, currentMonth, currentYear, currentDay} = fillWidthoUtPicture(allPictures, formattedSelectedMonth)


    return (
        <>
            {
                <div>
                    <Pagination monthOnGoing={currentMonth} formattedSelectedMonth={formattedSelectedMonth} />
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 w-full py-8 px-8 ">
                        {totalDaysOfMonth?.map((picture: Pictures, i: number) => {
                            const dayOfWeek = new Date(currentYear, currentMonth !== formattedSelectedMonth ? formattedSelectedMonth : parseInt(currentMonth) - 1, i).toLocaleDateString('en-US', { weekday: 'long' });
                            const dayInitial = dayOfWeek;
                            return (
                                <Link href={`/${picture.date}`} key={currentDay + i} className={`h-80 border-2 border-solid border-white rounded relative`}>
                                    {
                                        picture?.media_type === 'image' || picture?.media_type !== 'video' ?
                                            (
                                                <Image style={{ objectFit: "cover" }} quality={100} placeholder='blur' blurDataURL='/default.jpg' loading='lazy' className='h-full w-full overflow-hidden aspect-square hover:opacity-80' width={500} height={500} src={`${picture?.media_type === 'image' ? picture.url : '/default.jpg'}`} alt="imagen" />
                                            ) :
                                            (
                                                <Image style={{ objectFit: "cover" }} quality={100} loading='lazy' className='h-full w-full overflow-hidden aspect-square hover:opacity-80' width={500} height={500} src={`${picture?.thumbnail_url}`} alt="imagen" />
                                            )
                                    }
                                    <span className="absolute left-4 top-1 text-2xl font-semibold">{`${i < 9 ? `0${i+1}` :  i+1}`}</span>
                                    <span className="absolute right-4 bottom-1 text-lg font-semibold">{dayInitial}</span>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            }
        </>
    )
}
