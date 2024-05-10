import React from 'react'
import Image from "next/image";
import { ImageRenderProps } from '../../../../types';


const ImageRender = ({ singlePic }: ImageRenderProps) => {
    
    const { url, thumbnail_url, title, explanation, media_type } = singlePic

    return (
        <div className="md:max-w-4xl mx-auto mt-10 mb-10 p-8 bg-white shadow-md rounded-lg">
            <div className="relative max-w-[900px] max-h-[500px]  md:h-[900px] md:max-w-full md:max-h-[900px] rounded-lg mb-6">
                <Image
                    quality={100}
                    src={media_type === 'image' ? url : thumbnail_url}
                    alt={title}
                    className="object-cover"
                    fill
                    sizes="(max-width: 900px) 100vh,"
                />
            </div>

            <h1 className="text-2xl font-bold mb-4">{title}</h1>
            <p className="text-lg text-gray-700 mb-4">{explanation}</p>
            <p className="text-sm text-gray-500">Source: NASA</p>
        </div>
    )
}

export default ImageRender