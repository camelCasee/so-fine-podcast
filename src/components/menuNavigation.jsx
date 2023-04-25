'use client'

import { useState } from "react";
import MenuButton from "./menuButton";

export default function MenuNavigation() {
    const [openMenu, setOpenMenu] = useState(false)
    const [translateProp, setTranslateProp] = useState('translate-x-0')

    const menuButtonClickHandler = () => {
        if (translateProp === 'translate-x-0') {
            setOpenMenu(!openMenu)
            setTimeout(() => {
                setTranslateProp('translate-x-full')
            }, 0)
        }
        else {
            setTranslateProp('translate-x-0')
            setTimeout(()=>{
                setOpenMenu(false)
            },500)
        }
    }

    return <>
        <MenuButton className={'p-1'} onClick={menuButtonClickHandler} />
        {openMenu &&
            <div className={`left-[-70vw] fixed ease-in-out duration-500 w-[70vw] h-full bg-white ${translateProp}`}>

            </div>
        }

    </>
}