import MenuNavigation from '@/components/menuNavigation'
import './globals.css'
import FooterNavigation from '@/components/footerNavigation'

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <title>soFinePodcast</title>
      </head>

      <body>
        <header className='p-1 fixed w-full bg-white'>
          <MenuNavigation />
        </header>
        <main>
          {children}
        </main>
        <footer className='p-1 bg-slate-200'>
          <FooterNavigation/>
        </footer>
      </body>
    </html>
  )
}