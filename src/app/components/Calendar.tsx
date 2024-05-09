import React from 'react'
import api from '../../../api'
import Image from 'next/image'
import { getCurrentMonthData } from '../../../utils'
import { Pictures } from '../../../types'
import Pagination from './Pagination'
import Link from 'next/link'

export default async function Calendar({ selectedMonth }: any) {

    // Sacar esto a una función que siempre me traiga el inicio de mes, el fin de mes, el current mes, la cantidad de dias del mes
    // ---------------------------------------------------------

    const formattedSelectedMonth = selectedMonth < '9' && !selectedMonth.includes('0') ? `0${selectedMonth}` : selectedMonth

    const { currentDay, currentMonth, currentYear, daysInCurrentMonth } = getCurrentMonthData(formattedSelectedMonth)

    const startDay = `${currentYear}-${currentMonth !== formattedSelectedMonth && formattedSelectedMonth !== '0' ? formattedSelectedMonth : currentMonth}-01`
    const endDay = `${currentYear}-${currentMonth !== formattedSelectedMonth && formattedSelectedMonth !== '0'? formattedSelectedMonth : currentMonth}-${currentMonth !== formattedSelectedMonth && formattedSelectedMonth !== '0' ? daysInCurrentMonth.toString() : currentDay}`


    const allPictures = await api.list(startDay, endDay)

    const totalDaysOfMonth: Pictures[] = [];

    for (let i = 1; i <= daysInCurrentMonth; i++) {

        const currentDate = `${currentYear}-${currentMonth !== formattedSelectedMonth && formattedSelectedMonth !== '0' ? formattedSelectedMonth : currentMonth}-${i <= 9 ? '0' + i : i}`;

        const picture = allPictures?.find((p: Pictures) => p.date.toString() === currentDate.toString());

        picture ? totalDaysOfMonth?.push(picture) :

            totalDaysOfMonth.push({
                title: '',
                date: currentDate,
                explanation: "",
                media_type: '',
                thumbnail_url: '',
                url: '/default.jpg'
            });
    }

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
                                                <Image style={{ objectFit: "cover" }} quality={100} placeholder='blur' blurDataURL='/default.jpg' loading='lazy' className='h-full w-full overflow-hidden aspect-square' width={500} height={500} src={`${picture?.media_type === 'image' ? picture.url : '/default.jpg'}`} alt="imagen" />
                                            ) :
                                            (
                                                <Image style={{ objectFit: "cover" }} quality={100} loading='lazy' className='h-full w-full overflow-hidden aspect-square' width={500} height={500} src={`${picture?.thumbnail_url}`} alt="imagen" />
                                            )
                                    }
                                    <span className="absolute left-4 top-1 text-2xl font-semibold">{i + 1}</span>
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
