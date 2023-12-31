import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className='h-16 bg-yellow-300 flex'>
          <form action="/items" className='m-auto max-w-xl flex-1 flex items-center px-4'>
            <input type="text" name="search" placeholder="Search" className='h-8 flex-1 px-2' />
            <button type="submit" className='bg-gray-300 px-2 py-2 text-slate-700'>Search</button>
          </form>
        </header>
        <main className='max-w-screen-lg p-4 m-auto'>{children}</main>
      </body>
    </html>
  )
}
