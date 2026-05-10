'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuActive, setMobileMenuActive] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenuActive(!mobileMenuActive);
    };

    const isActive = (path) => pathname === path ? 'active' : '';

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <Link href="/" className="logo">
                    <Image src="/assets/logo.png" alt="Anand Sindhu Enterprises Logo" width={50} height={50} style={{ width: 'auto', height: '50px' }} />
                    <span>ASE</span>
                </Link>
                <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
                    {mobileMenuActive ? '✕' : '☰'}
                </button>
                <nav className={`nav-links ${mobileMenuActive ? 'active' : ''}`}>
                    <Link href="/" className={isActive('/')}>Home</Link>
                    <Link href="/about" className={isActive('/about')}>About</Link>
                    <Link href="/services" className={isActive('/services')}>Services</Link>
                    <Link href="/coverage" className={isActive('/coverage')}>Coverage</Link>
                    <Link href="/process" className={isActive('/process')}>Process</Link>
                    <Link href="/contact" className={isActive('/contact')}>Contact</Link>
                </nav>
                <Link href="/contact" className="btn-primary" style={{ display: 'none', '@media(min-width: 768px)': { display: 'block' } }}>
                    Enquire
                </Link>
            </div>
        </header>
    );
}
