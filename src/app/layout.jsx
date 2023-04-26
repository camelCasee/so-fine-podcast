import MenuNavigation from '@/components/menuNavigation'
import './globals.css'
import FooterNavigation from '@/components/footerNavigation'
import Link from 'next/link'
import DesktopNavBar from '@/components/desktopNavBar'

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <title>soFinePodcast</title>
      </head>

      <body>
        <header className='p-4 h-16 z-10 fixed w-full bg-white'>
          <Link href={'/'}>
            <h1 className="font-bold text-xl text-center fixed w-[60%] inset-x-[20%] sm:w-fit sm:inset-auto">So Fine Podcast</h1>
          </Link>
          <nav>
            <div className='hidden sm:block'>
              <DesktopNavBar/>
            </div>
            <div className='sm:hidden'>
              <MenuNavigation />
            </div>
          </nav>
        </header>
        <main className='pt-20 pb-10'>
          {children}
        </main>
        <footer className='p-1 bg-slate-200'>
          <FooterNavigation />
        </footer>
      </body>
    </html>
  )
}
