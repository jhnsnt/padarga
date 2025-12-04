'use client';

import { useState, useEffect  } from 'react';
import styles from "./home-style.module.css";
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; 

export default function Nav() {
    const pathname = usePathname();
    const [active, setActive] = useState('');

    const navItems = [
        { label: 'Home', icon: '/images/home_black.svg', activeIcon: '/images/home_active.svg', href: "/home" },
        { label: 'Reels', icon: '/images/play_black.svg', activeIcon: '/images/play_active.svg', href: "" },
        { label: 'Create', icon: '/images/create.svg', activeIcon: '/images/create.svg', href: "" },
        { label: 'Search', icon: '/images/search_black.svg', activeIcon: '/images/search_active.svg', href: "" },
        { label: 'Profile', icon: '/images/dp.png', activeIcon: '/images/dp.png', href: "" },
    ];
    
    useEffect(() => {
        const current = navItems.find(item => item.href === pathname);
        if (current) setActive(current.label);
    }, [pathname]);

    return (
        <div className="fixed border-0 lg:border-r-1 border-[#D9D9D9] lg:top-0 lg:left-0 bottom-0 w-full bg-white-500 lg:h-full lg:w-[20%] flex">
            <ul className="bg-white m-2 w-full rounded-full border-1 lg:border-0 border-[#D9D9D9] lg:rounded-md h-[70px] p-2 lg:p-5 grid grid-cols-5 lg:block justify-start lg:items-center">
                
                {navItems.map((item) => {
                    const isActive = active === item.label;
                        return (
                            
                            <li key={item.label}
                                className="justify-center lg:justify-start items-center flex mb-0 lg:mb-3 p-2 lg:p-3 cursor-pointer lg:w-[160px]"
                            >
                                <Link 
                                    onClick={() => setActive(item.label)}
                                    href={item.href}
                                    className="navItem flex-row lg:flex"
                                    >
                                    <Image src={isActive ? item.activeIcon : item.icon}
                                        alt={item.label} 
                                        className="lg:mr-3 m-auto lg:m-0"
                                        width={24} height={24} />
                                    
                                    <div className="hidden lg:block">
                                        <span className={isActive ? `${styles.textActive} text-xs lg:text-[16px] font-[600]` : 'text-black text-xs lg:text-[16px] font-normal'}>{item.label}</span>
                                    </div>
                                </Link>
                            </li>
                        );
                })}
            </ul>
        </div>
    )
}