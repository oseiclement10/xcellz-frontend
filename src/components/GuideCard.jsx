import React from 'react'
import fallbackImg from "@/assets/fallback2.jpg"

const GuideCard = () => {
    return (
        <div className='py-2 px-4 bg-white border-t font-poppins rounded-xl transition-smooth hover:-translate-y-2 hover:shadow-lg cursor-pointer  shadow-md max-w-[290px]'>
            <div className="flex items-center mb-3 space-x-3">
                <span className='bg-black mt-1 text-white text-sm px-2 py-[2px] rounded-xl h-7 flex items-center'>Guide</span>
                <div className="">
                    <h2 className="text-lg font-semibold">
                        Property Guide
                    </h2>
                    <p className='-mt-1 text-xs text-gray-600'>14th Street Avenue, NY.</p>
                </div>
            </div>
            <img src={fallbackImg} alt="news fallback image" className='object-cover h-[145px] rounded-2xl w-full' />
            <div className="mt-1 text-sm">
                <div className="flex items-center justify-between py-2">
                    <h2 className='flex items-center'> <span className='w-2 h-2 rounded-full bg-[orange] mr-2 flex' /> 2 Mins Read</h2>
                    <button className='font-medium'>Buy news</button>
                </div>
            </div>
            <div className="mb-3">
                <h2 className='mb-1 text-xs'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
                <ul className='pl-4 pr-3 text-xs list-disc'>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sunt voluptate tenetur! </li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sunt voluptate tenetur! </li>
                </ul>
            </div>
            
            <button className='flex items-center justify-center w-full py-3 mb-2 text-xs text-center text-white bg-black/90 rounded-2xl hover:bg-black transtion-smooth active:opacity-10'>View More</button>
        </div>
    )
}

export default GuideCard