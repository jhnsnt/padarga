'use client';

import { useState, useEffect  } from 'react';
import Image from "next/image";
import Link from 'next/link';
import { usePathname } from 'next/navigation'; 
import styles from "./home-style.module.css";

export default function Header() {
    const pathname = usePathname();
    const [active, setActive] = useState('');

    const headerItems = [
        { label: 'Explore', href: "/explore" },
        { label: 'Following', href: "/home" },
    ];

    const headerItems2 = [
        { label: 'Notification', icon: '/images/notification_black.svg', activeIcon: '/images/notification_active.svg', href: "/home" },
        { label: 'Message', icon: '/images/message_black.svg', activeIcon: '/images/message_active.svg', href: "/home" },
    ];

    useEffect(() => {
        const current = headerItems.find(item => item.href === pathname);
        if (current) setActive(current.label);
    }, [pathname]);

    return (
        <div className="flex items-center px-4 lg:px-5">
            <div className="w-[50%]">
                <Link href="/home">
                    <Image 
                        src="/images/padarga_logo.png"
                        width={170}
                        height={48}
                        alt="Logo"
                        className="" 
                    />
                </Link>
            </div>
            <div className="w-[50%]">
                <ul className="flex justify-end items-center text-sm lg:text-base">
                    {headerItems.map((item) => {
                        const isActive = active === item.label;
                        return (
                            <li key={item.label} >
                                <Link 
                                    onClick={() => setActive(item.label)}
                                    href={item.href}
                                    className="text-right hidden lg:block pl-5">
                                        <span className={isActive ? 
                                            `${styles.textActive} text-xs lg:text-[16px] font-[600]` : 'text-xs lg:text-[16px] font-normal'}>
                                            {item.label}
                                        </span>
                                </Link>
                            </li>
                        );
                    })}
                    
                    {headerItems2.map((item) => {
                        const isActive = active === item.label;
                        return (
                            <li key={item.label} className="lg:hidden block pl-3">
                                <Link 
                                    onClick={() => setActive(item.label)}
                                    href={item.href}
                                    className="lg:hidden block">
                                        <Image 
                                            src={isActive ? item.activeIcon : item.icon}
                                            alt={item.label} 
                                            className="lg:mr-3 m-auto lg:m-0"
                                            width={24} height={24} 
                                        />
                                        <span className="hidden">
                                            {item.label}
                                        </span>
                                </Link>
                            </li>
                        );
                    })}
                    
                </ul>
            </div>
        </div>
    )
}