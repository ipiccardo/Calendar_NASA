import React from 'react'
import api from '../../../api'
import Image from 'next/image'
import { getCurrentMonthData } from '../../../utils'
import { Pictures } from '../../../types'

export default async function Calendar() {

    const { currentDay, currentMonth, currentYear, currentMonthName, daysInCurrentMonth } = getCurrentMonthData()

    // Sacar esto a una función que siempre me traiga el inicio de mes, el fin de mes, el current mes, la cantidad de dias del mes
    // ---------------------------------------------------------
    const startDay = `${currentYear}-${currentMonth}-01`
    const amountOfDays = `${currentYear}-${currentMonth}-${daysInCurrentMonth}`
    const endDay = `${currentYear}-${currentMonth}-${currentDay}`


    const allPictures = await api.list(startDay, endDay)


    const totalDaysOfMonth: Pictures[] = [];
    for (let i = 1; i <= daysInCurrentMonth; i++) {
        const currentDate = `${currentYear}-${currentMonth}-${i <= 9 ? '0' + i : i}`;
        const picture = allPictures.find((p: Pictures) => p.date === currentDate.toString());

        picture ? totalDaysOfMonth?.push(picture) :

            totalDaysOfMonth.push({
                title: '',
                date: currentDate,
                explanation: "",
                media_type: '',
                thumbnailUrl: '',
                url: '/default.jpg'
            });

    }


    return (
        <>
            {
                <div>
                    <div>
                        <h1 className='text-center'>MAYO</h1>
                        <div className='flex justify-between'>
                            <button>Next</button>
                            <button>Prev</button>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 w-full py-8 px-8 ">
                        {totalDaysOfMonth?.map((picture: Pictures, i: number) => {
                            return (
                                <div key={currentDay + i} className={`h-80 border-2 border-solid border-white rounded`}>
                                    <Image style={{ objectFit: "cover" }} loading='lazy' className='h-full w-full overflow-hidden aspect-square' width={500} height={500} src={`${picture.media_type === 'image' ? picture.url : '/default.jpg'}`} alt="imagen" />
                                </div>
                            );
                        })}
                    </div>
                </div>
            }
        </>
    )
}