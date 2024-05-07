import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css';
import Link from 'next/link';
import './style.css';
import Footer from './footer/page';
import Sidebar from './Nav/page';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>

       <Link rel="preconnect" href="https://fonts.googleapis.com"/>
      <Link rel="preconnect" href="https://fonts.gstatic.com"  />
      <Link href="https://fonts.googleapis.com/css2?family=Madimi+One&display=swap" rel="stylesheet" />
      
    

      <div className="Nav flex dark:bg-black dark:text-white bg-gray-100 text-black fixed inset-x-0 top-0 z-50 h-[70px] sm:h-[100px] sm:w-[100%] items-center  cursor-pointer light:shadow-[0px_0px_10px_grey] justify-around sm:justify-around" >
        <div className="sm:w-[30%] flex sm:justify-between items-center ">
          
          <p className='text-[20px] sm:text-[23px] font-extrabold text-center'><i className="bi bi-person-circle text-[22px]"></i> Portfolio</p>
        </div>
        

        <div className="list md:flex justify-center sm:w-[45%] w-[90%] sm:h-[50px] items-center font-normal text-[20px] sm:inline-flex hidden">

          <ul className="items-center flex sm:w-[100%] justify-around gap-5 sm:h-[50px] text-[18px] font-medium ">
            <Link href="/" className="group text-black transition duration-300 dark:text-white">
            About
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-500"></span>
            </Link>
            <Link href="../skills" className="group dark:text-white text-black transition duration-300">
            Skills
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-500"></span>
            </Link>
            <Link href="../experience" className="group dark:text-white text-black transition duration-300">
            Experience
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-500"></span>
            </Link>
            <Link href="../projects" className="group dark:text-white text-black transition duration-300">
            Project
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-500"></span>
            </Link>
            <Link href="../course" className="group dark:text-white text-black transition duration-300">
            Courses
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-500"></span>
            </Link>
            <Link href="../contact" className="group dark:text-white text-black transition duration-300">
            Contact
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-500"></span>
            </Link>
            
        </ul>
        </div>

        
        <div className="menu flex items-center hidden ">
          
          
            <i className="bi bi-list text-[30px]"></i>
          

        </div>

  
      </div>

      
      
      <div className="footer">
        <Footer />
        
      </div>

    </html>
  )
}