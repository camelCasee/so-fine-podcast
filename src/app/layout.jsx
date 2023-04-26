import MenuNavigation from '@/components/menuNavigation'
import './globals.css'
import FooterNavigation from '@/components/footerNavigation'
import Link from 'next/link'

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <title>soFinePodcast</title>
      </head>

      <body>
        <header className='p-4 z-10 fixed w-full bg-white'>
          <Link href={'/'}>
            <h1 className="font-bold text-xl text-center fixed w-1/2 inset-x-[25%]">So Fine Podcast</h1>
          </Link>
          <MenuNavigation />
        </header>
        <main className='pt-16 pb-4'>
          {children}
        </main>
        <footer className='p-1 bg-slate-200'>
          <FooterNavigation />
        </footer>
      </body>
    </html>
  )
}
