'use client'

import Link from "next/link"
import { useEffect, useMemo, useState } from "react"
import { usePathname } from "next/navigation"

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

export default function DesktopNavBar() {
      const [chaptersMenuStatus, setChaptersMenuStatus] = useState('opacity-0')
      const [divToCloseMenuStatus, setDivToCloseMenuStatus] = useState('hidden')
      const [divToUnhoverMenu, setDivToUnhoverMenu] = useState('')

      const route = usePathname()

      useEffect(() => {
            closeMenuHandler()
      }, [route])

      const openMenuHandler = () => {
            setChaptersMenuStatus('opacity-100')
            setDivToCloseMenuStatus('')
            setDivToUnhoverMenu('hidden')
      }

      const closeMenuHandler = () => {
            setChaptersMenuStatus('opacity-0')
            setDivToCloseMenuStatus('hidden')
            setDivToUnhoverMenu('')
      }

      return <div className="h-16 flex justify-center">
            <div className="mt-4 items-center flex flex-col">
                  <span onMouseOver={openMenuHandler} onClick={openMenuHandler} onMouseLeave={closeMenuHandler} className="z-10 cursor-pointer">Capitulos</span>
                  <div className="relative z-10">
                        <div onMouseOver={openMenuHandler} onMouseLeave={closeMenuHandler}
                              className={`${chaptersMenuStatus} transition-opacity duration-400 ease-out shadow-md p-2 rounded-md w-fit bg-white`}>
                              <ul className="cursor-auto">
                                    {linksTemporadas.map(({ label, route }) => {
                                          return <li key={route}>
                                                <Link href={route}>{label}</Link>
                                          </li>
                                    })}
                              </ul>
                        </div>
                        <div className={`${divToUnhoverMenu} absolute inset-0 h-full w-full`}></div>
                  </div>
            </div>
            <div onClick={closeMenuHandler} className={`${divToCloseMenuStatus} absolute h-screen w-screen`}></div>
      </div>
}