import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
    title: 'About Us | Anand Sindhu Enterprises',
    description: 'Learn about Anand Sindhu Enterprises, a professional partner for CBT operations providing operational reliability, secure conduct, and structured manpower deployment.',
};

export default function About() {
    return (
        <>
            <ScrollReveal />
            <section className="hero" style={{ minHeight: '50vh', alignItems: 'flex-end', paddingBottom: '4rem' }}>
                <div className="container hero-content">
                    <h1 style={{ fontSize: '3.5rem' }}>About the Company</h1>
                    <p style={{ fontSize: '1.2rem', color: '#cbd5e1' }}>A professional partner for CBT operations.</p>
                </div>
            </section>

            <section className="section">
                <div className="container reveal">
                    <div className="grid-2">
                        <div>
                            <h2 className="section-title">Company Overview</h2>
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-light)', marginBottom: '1.5rem' }}>
                                Anand Sindhu Enterprises is positioned as an examination support company focused on operational reliability, secure conduct, and structured manpower deployment for computer-based tests across India.
                            </p>
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-light)', marginBottom: '2rem' }}>
                                With experience in examination logistics and center management, the organization supports agencies through trained teams, process coordination, and field execution built for high-volume and location-diverse exam environments.
                            </p>
                            <div className="badges-container">
                                <span className="badge">Operational Support</span>
                                <span className="badge">Deployment Readiness</span>
                                <span className="badge">Exam Integrity</span>
                            </div>
                        </div>
                        <div className="feature-image-wrapper float-animation">
                            <Image src="/assets/operations.png" alt="Company Operations" width={600} height={400} style={{ width: '100%', height: 'auto' }} />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" style={{ backgroundColor: 'var(--bg-white)' }}>
                <div className="container reveal">
                    <div className="section-header">
                        <h2 className="section-title">Vision and Mission</h2>
                        <p className="section-subtitle">Driving trust and dependability in examination support nationwide.</p>
                    </div>
                    
                    <div className="grid-2">
                        <div className="card" style={{ borderTop: '4px solid var(--accent)' }}>
                            <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Our Vision</h3>
                            <p style={{ color: 'var(--text-light)', fontSize: '1.1rem' }}>The vision is to become one of India's most trusted examination support service providers.</p>
                        </div>
                        <div className="card" style={{ borderTop: '4px solid var(--primary)' }}>
                            <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Our Mission</h3>
                            <p style={{ color: 'var(--text-light)', fontSize: '1.1rem' }}>The mission is to provide dependable manpower, technical expertise, and operational support for secure and smooth examination conduct nationwide.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
