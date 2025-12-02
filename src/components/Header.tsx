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

    useEffect(() => {
        const current = headerItems.find(item => item.href === pathname);
        if (current) setActive(current.label);
    }, [pathname]);

    return (
        <div className="flex items-center">
            <div className="w-[50%]">
                <Image 
                    src="/images/padarga_logo.png"
                    width={170}
                    height={48}
                    alt="Logo"
                    className="" 
                />
            </div>
            <div className="w-[50%]">
                <ul className="flex gap-4 justify-end lg:gap-8 items-center pr-4 lg:pr-8 text-sm lg:text-base">
                    {headerItems.map((item) => {
                        const isActive = active === item.label;
                        return (
                            <li key={item.label} >
                                <Link 
                                    onClick={() => setActive(item.label)}
                                    href={item.href}>
                                    <span className={isActive ? `${styles.textActive} text-xs lg:text-[16px] font-[600]` : 'text-xs lg:text-[16px] font-normal'}>{item.label}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    )
}