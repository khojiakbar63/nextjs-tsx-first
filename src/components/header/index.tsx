'use client'
import React from 'react';
import Link from "next/link";
import './style.css'
 
import { usePathname } from 'next/navigation'


const index:React.FC = () => {

  const pathname = usePathname()

    return (
        <header className="p-5 bg-slate-500">
        <div className="container">
          <nav className="flex justify-between items-center text-white">
            <a href="#">NextJs</a>
            <ul className="flex items-center gap-5">
              <li>
                <Link className={`link ${pathname === '/' ? 'text-blue-600' : ''}`} href="/">Home</Link>
              </li>
              <li>
                <Link className={`link ${pathname === '/about' ? 'active' : ''}`} href="/about">About</Link>
              </li>
              <li>
                <Link className={`link ${pathname === '/contact' ? 'active' : ''}`} href="/contact">Contact</Link>
              </li>
              <li>
                <Link className={`link ${pathname === '/service' ? 'active' : ''}`} href="/service">Service</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
};

export default index;