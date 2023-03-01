import './globals.css'
import {Montserrat} from '@next/font/google'

const font = Montserrat({
  subsets: ['latin'],
  display: 'swap',  
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='font.className'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='bg-black text-white max-h-screen'>{children}</body>
    </html>
  )
}
 