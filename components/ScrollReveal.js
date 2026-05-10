'use client';

import { useEffect } from 'react';

export default function ScrollReveal() {
    useEffect(() => {
        const revealElements = document.querySelectorAll('.reveal');
        
        const revealOnScroll = () => {
            const windowHeight = window.innerHeight;
            const elementVisible = 100;
            
            revealElements.forEach((el) => {
                const elementTop = el.getBoundingClientRect().top;
                if (elementTop < windowHeight - elementVisible) {
                    el.classList.add('active');
                }
            });
        };

        window.addEventListener('scroll', revealOnScroll);
        // Trigger once on load
        setTimeout(revealOnScroll, 100);

        return () => window.removeEventListener('scroll', revealOnScroll);
    }, []);

    return null;
}
