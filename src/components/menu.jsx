'use client'

import { useState } from 'react'

export default function Menu({className}) {
    const [clicked, setClicked] = useState(false)

    const clickHandler =() =>{
        setClicked(!clicked)
    }

    return <button onClick={clickHandler} className={`${className} flex flex-col w-12 gap-2.5`}>
        <div className={`bg-black h-[2px] w-full rounded-[5px] transition-all duration-500 origin-left ${clicked && 'rotate-[38deg]'}`}></div>
        <div className={`bg-black h-[2px] w-full rounded-[5px] transition-all duration-500 origin-left ${clicked && 'opacity-0'}`}></div>
        <div className={`bg-black h-[2px] w-full rounded-[5px] transition-all duration-500 origin-left ${clicked && '-rotate-[38deg]'}`}></div>
    </button>
} 