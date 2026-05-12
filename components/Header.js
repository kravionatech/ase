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
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => setMobileMenuActive(!mobileMenuActive);
    const isActive = (path) => pathname === path ? 'active' : '';

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <Link href="/" className="logo logo-svg-wrap">
                    <Image
                        src="/assets/logo_new.png"
                        alt="Anand Sindhu Enterprises Logo"
                        width={48}
                        height={48}
                        style={{ width: 'auto', height: '48px', objectFit: 'contain' }}
                        priority
                    />
                    <span className="logo-text-group">
                        <span className="logo-text-main">ASE</span>
                        <span className="logo-text-sub">Anand Sindhu Enterprises</span>
                    </span>
                </Link>

                <button className="mobile-menu-btn" onClick={toggleMobileMenu} aria-label="Toggle menu">
                    {mobileMenuActive ? '✕' : '☰'}
                </button>

                <nav className={`nav-links ${mobileMenuActive ? 'active' : ''}`}>
                    <Link href="/" className={isActive('/')}>Home</Link>
                    <Link href="/about" className={isActive('/about')}>About</Link>
                    <Link href="/services" className={isActive('/services')}>Services</Link>
                    <Link href="/states" className={isActive('/states')}>States</Link>
                    <Link href="/coverage" className={isActive('/coverage')}>Coverage</Link>
                    <Link href="/process" className={isActive('/process')}>Process</Link>
                    <Link href="/contact" className={isActive('/contact')}>Contact</Link>
                </nav>

                <Link href="/contact" className="btn-primary header-cta-btn">
                    Enquire Now
                </Link>
            </div>
        </header>
    );
}
