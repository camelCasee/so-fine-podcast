'use client'

import { usePathname } from 'next/navigation'

export default function SeasonChapters() {
    const season = usePathname().slice(21)

    return <div>
        <p>Temporada {season}</p>
    </div>
}