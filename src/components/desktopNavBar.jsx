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
      const [blockToCloseMenuStatus, setBlockToCloseMenuStatus] = useState('hidden')

      const route = usePathname()

      useEffect(()=>{
            closeMenuHandler()
      }, [route])

      const openMenuHandler = () => {
            setChaptersMenuStatus('opacity-100')
            setBlockToCloseMenuStatus('')
      }

      const closeMenuHandler = () => {
            setChaptersMenuStatus('opacity-0')
            setBlockToCloseMenuStatus('hidden')
      }

      return <div className="h-16 flex justify-center">
            <div className="items-center flex flex-col">
                  <span onMouseOver={openMenuHandler} onClick={openMenuHandler} onMouseLeave={closeMenuHandler} className="mt-4 z-10 cursor-pointer">Capitulos</span>
                  <div onMouseOver={openMenuHandler} onMouseLeave={closeMenuHandler} 
                  className={`${chaptersMenuStatus} z-20 transition-all duration-500 ease-out shadow-md p-2 rounded-md w-fit bg-white`}>
                        <ul className="z-20 cursor-auto">
                        {linksTemporadas.map(({ label, route }) => {
                            return <li key={route}>
                                <Link href={route}>{label}</Link>
                            </li>
                        })}
                        </ul>
                  </div>
            </div>
            <div onClick={closeMenuHandler} className={`${blockToCloseMenuStatus} absolute h-screen w-screen`}></div>
      </div>
}