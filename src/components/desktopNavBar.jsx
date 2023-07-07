'use client'

import Link from "next/link"
import { useEffect, useMemo, useState } from "react"
import { usePathname } from "next/navigation"

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
      {
            label: 'Contacto',
            route: '/contacto'
      }
]

export default function DesktopNavBar() {
      const [menuOpen, setMenuOpen] = useState()
      const [divToCloseMenuOpen, setDivToCloseMenuOpen] = useState()

      const route = usePathname()

      useEffect(() => {
            closeMenuHandler()
      }, [route])

      const openMenuHandler = () => {
            setMenuOpen(true)
            setDivToCloseMenuOpen(true)
      }

      const closeMenuHandler = () => {
            setMenuOpen()
            setDivToCloseMenuOpen()
      }

      return <div className="h-16 flex justify-center">
            <div className="mt-4 items-center flex flex-col">
                  <span onMouseOver={openMenuHandler} onClick={openMenuHandler} onMouseLeave={closeMenuHandler} className="z-10 cursor-pointer">Capitulos</span>
                  {menuOpen && <div className="relative z-10">
                        <div onMouseOver={openMenuHandler} onMouseLeave={closeMenuHandler}
                              className={`transition-opacity duration-300 ease-out shadow-md p-6 rounded-md w-fit bg-white`}>
                              <ul className="cursor-auto">
                                    {linksTemporadas.map(({ label, route }) => {
                                          return <li key={route}>
                                                <Link href={route}>{label}</Link>
                                          </li>
                                    })}
                              </ul>
                        </div>
                  </div>
                  }
            </div>
            {divToCloseMenuOpen &&
                  <div onClick={closeMenuHandler} className={`absolute h-screen w-screen`}>
                  </div>
            }
      </div>
}