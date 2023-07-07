'use client'

import { useEffect, useState } from "react";
import MenuButton from "./menuButton";
import Link from "next/link";
import { usePathname } from "next/navigation";

const linksTemporadas = [
    {
        label: 'Primera temporada',
        route: '/capitulos/temporada/1'
    },
    {
        label: 'Segunda temporada',
        route: '/capitulos/temporada/2'
    },
    {
        label: 'Tercera temporada',
        route: '/capitulos/temporada/3'
    },
]

export default function MenuNavigation() {
    const [openMenu, setOpenMenu] = useState(false)
    const [openChaptersMenu, setOpenChaptersMenu] = useState(false)

    const route = usePathname()

    useEffect(() => {
        setOpenMenu(false)
    }, [route])

    let menuPosition = ''
    let chaptersMenuPosition = ''

    if (!openChaptersMenu) {
        if (openMenu) chaptersMenuPosition = 'right-[-100%] opacity-0'
        else if (!openMenu) chaptersMenuPosition = 'right-[-200%] opacity-0 duration-0'
        menuPosition = 'left-0'
    }

    if (openChaptersMenu) {
        chaptersMenuPosition = 'right-0'
        menuPosition = 'left-[-100%]'
    }

    return <>
        <div className="p-4">
            <MenuButton className='p-1' onClick={() => setOpenMenu(!openMenu)} clicked={openMenu} />
        </div>
        <div className={`left-[-100%] z-10 fixed ease-in-out duration-500 w-full h-full bg-white ${openMenu ? 'translate-x-full' : 'translate-x-0'}`}>
            <div className="flex">
                <ul className={`fixed p-4 ease-in-out duration-500 ${menuPosition} `}>
                    <li>
                        <button onClick={() => setOpenChaptersMenu(!openChaptersMenu)}>Capitulos</button>
                    </li>
                    <li>
                        <Link href={'/contacto'}>Contacto</Link>
                    </li>
                </ul>
                <div className={`w-full top-0 fixed p-4 ease-in-out duration-500 ${chaptersMenuPosition}`}>
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
        </div>

    </>
}