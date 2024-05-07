import React from 'react'
import api from '../../../api'
import Image from 'next/image'
import { getCurrentMonthData } from '../../../utils'
import { Pictures } from '../../../types'

export default async function Calendar() {


    // Sacar esto a una función que siempre me traiga el inicio de mes, el fin de mes, el current mes, la cantidad de dias del mes
    // ---------------------------------------------------------
    const startDay = '2024-05-01'
    const endDay = '2024-05-07'


    const allPictures = await api.list(startDay, endDay)


    const totalDaysOfMonth = [
        ...allPictures,
        {
            date: parseInt(endDay) < parseInt('2024-05-31') ? parseInt(endDay) + 1 : '',
            explanation: "",
            hdurl: '',
            media_type: '',
            service_version: '',
            title: '',
            url: '/default.jpg'
        }
    ]

    console.log(totalDaysOfMonth, 'totla dias en el mes')

    return (
        <>
            {
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 w-full py-8 px-8 ">
                    {allPictures?.map((picture: Pictures, i: number) => {
                        return (
                            <div key={picture.title} className={`h-80 border-2 border-solid border-white rounded`}>
                                <Image className='h-full w-full overflow-hidden aspect-square' width={200} height={200} src={`${picture.media_type === 'image' ? picture.url : '/default.jpg'}`} alt="imagen" />
                            </div>
                        );
                    })}
                </div>
            }
        </>
    )
}
