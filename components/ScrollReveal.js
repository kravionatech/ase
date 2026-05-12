'use client';

import { useEffect } from 'react';

export default function ScrollReveal() {
    useEffect(() => {
        const revealElements = document.querySelectorAll('.reveal');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.08 }
        );

        revealElements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return null;
}
