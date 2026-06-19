import React from 'react'
import { ArrowLeft } from "lucide-react";

const DetailedPage = ({country}) => {
  return (
    <div>

        <div className="mt-20 ml-6">
        <button
        className="
        mt-10 ml-6
        w-[150px] 
        h-[40px]
        flex items-center
        gap-[20px]
        px-[25px]
        bg-[#FEFEFE]
        rounded-[8px]
        shadow-[0_3px_12px_rgba(0,0,0,0.22)]
        text-[#2f2f2f]
        text-[17px]
        font-normal
        hover:cursor-pointer">
  <ArrowLeft size={18} strokeWidth={2.3} />
  <span>Back</span>
</button>
        </div>

    <div className="w-120 mt-15 ml-11 ">
        <img alt="flag-logo" src={country.flags.svg}/>

    </div>

    </div>
  )
}

export default DetailedPage;