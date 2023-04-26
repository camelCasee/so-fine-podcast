'use client'

import { useEffect, useState } from "react";
import MenuButton from "./menuButton";
import Link from "next/link";
import { usePathname } from "next/navigation";

const linksTemporadas = [
    {
        label: 'Temporada I',
        route: '/capitulos/temporada/1'
    },
    {
        label: 'Temporada II',
        route: '/capitulos/temporada/2'
    },
    {
        label: 'Temporada III',
        route: '/capitulos/temporada/3'
    },
    {
        label: 'Todos los capitulos',
        route: '/capitulos'
    },
]

export default function MenuNavigation() {
    const [openMenu, setOpenMenu] = useState(false)
    const [openChaptersMenu, setOpenChaptersMenu] = useState(false)

    const route = usePathname()

    let menuPosition = ''
    let chaptersMenuPosition = ''

    useEffect(()=>{
        setOpenMenu(false)
    }, [route])

    if (!openChaptersMenu) {
        if(openMenu) chaptersMenuPosition = 'right-[-100%]'
        else if(!openMenu)chaptersMenuPosition = 'right-[-200%]'
        menuPosition = 'left-0'
    }

    if (openChaptersMenu){
        chaptersMenuPosition = 'right-0'
        menuPosition = 'left-[-100%]'
    }

    return <>
        <MenuButton className='p-1' onClick={() => setOpenMenu(!openMenu)} clicked={openMenu} />
        <div className={`left-[-100%] z-10 fixed ease-in-out duration-500 w-full h-full bg-white ${openMenu ? 'translate-x-full' : 'translate-x-0'}`}>
            <div className="flex">
                <ul className={`fixed p-4 ease-in-out duration-500 ${menuPosition} `}>
                    <li>
                        <button onClick={() => setOpenChaptersMenu(!openChaptersMenu)}>Capitulos</button>
                    </li>
                </ul>
                <div className={`h-full w-full top-0 fixed p-4  ease-in-out duration-500 ${chaptersMenuPosition}`}>
                    <button onClick={() => setOpenChaptersMenu(!openChaptersMenu)}>Atras</button>
                    <ul>
                        {linksTemporadas.map(({ label, route }) => {
                            return <li key={route}>
                                <Link href={route}>{label}</Link>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
            <div className="fixed h-full w-1/12 bg-white right-0">
            </div>
        </div>

    </>
}