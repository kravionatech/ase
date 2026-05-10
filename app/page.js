import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export default function Home() {
    return (
        <>
            <ScrollReveal />
            <section className="hero">
                <Image src="/assets/hero.png" alt="CBT Center Operations" fill className="hero-bg" priority style={{ objectFit: 'cover' }} />
                <div className="container hero-content">
                    <h1>Nationwide Excellence in CBT Operations</h1>
                    <p>Trusted examination support across India. Anand Sindhu Enterprises delivers technical manpower, non-technical staffing, center audits, and on-ground operational support for computer-based examinations, including defense exam support operations executed with national reach.</p>
                    <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                        <Link href="/services" className="btn-primary">Explore Services</Link>
                        <Link href="/about" className="btn-outline" style={{ color: 'white', borderColor: 'white' }}>Company Profile</Link>
                    </div>
                    
                    <div className="hero-stats">
                        <div className="stat-item">
                            <h3>400+</h3>
                            <p>Trained Professionals</p>
                        </div>
                        <div className="stat-item">
                            <h3>Pan-India</h3>
                            <p>Coverage Network</p>
                        </div>
                        <div className="stat-item">
                            <h3>CBT Focus</h3>
                            <p>Secure & Audit-Ready</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section section-alt">
                <div className="container reveal">
                    <div className="grid-2">
                        <div className="feature-image-wrapper float-animation">
                            <Image src="/assets/success.png" alt="Exam Success" width={800} height={600} style={{ width: '100%', height: 'auto' }} priority />
                        </div>
                        <div>
                            <h2 className="section-title">A professional partner for <span className="gradient-text">CBT operations</span>.</h2>
                            <p style={{ fontSize: '1.15rem', color: 'var(--text-light)', marginBottom: '2rem' }}>
                                We support examination agencies with elite staffing, audit coordination, center readiness verification, and flawless execution support in metro, semi-urban, and remote locations across India.
                            </p>
                            <ul className="process-list" style={{ marginBottom: '2.5rem' }}>
                                <li className="process-item" style={{ paddingBottom: '1.5rem' }}>
                                    <h3 style={{ fontSize: '1.1rem' }}>Deployment Readiness</h3>
                                    <p style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>For both urban and remote examination locations.</p>
                                </li>
                                <li className="process-item" style={{ paddingBottom: '1.5rem' }}>
                                    <h3 style={{ fontSize: '1.1rem' }}>Exam Integrity</h3>
                                    <p style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>Focus on secure workflows and timely execution.</p>
                                </li>
                                <li className="process-item" style={{ paddingBottom: '0' }}>
                                    <h3 style={{ fontSize: '1.1rem' }}>Reliable Manpower</h3>
                                    <p style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>Backed by structured, nationwide field coordination.</p>
                                </li>
                            </ul>
                            <Link href="/about" className="btn-outline">Learn More About Us</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container reveal">
                    <div className="section-header">
                        <h2 className="section-title">Core Service Ecosystem</h2>
                        <p className="section-subtitle">Comprehensive support structures for computer-based examinations, delivered with precision and scale.</p>
                    </div>
                    
                    <div className="grid-3">
                        <div className="card">
                            <Image src="/assets/tech.png" alt="Technical Manpower" width={400} height={250} className="card-image" />
                            <h3>Technical Operations</h3>
                            <p>Deployment of technical staff for system setup, server and lab support, networking assistance, and exam-time continuity.</p>
                        </div>
                        <div className="card">
                            <Image src="/assets/staff.png" alt="Staff Coordination" width={400} height={250} className="card-image" />
                            <h3>Non-Technical Manpower</h3>
                            <p>Operational personnel for candidate movement, verification support, administrative coordination, and venue logistics.</p>
                        </div>
                        <div className="card">
                            <Image src="/assets/audit.png" alt="Center Audits" width={400} height={250} className="card-image" />
                            <h3>Security & Audits</h3>
                            <p>Technical and non-technical audits covering infrastructure, hardware, networking, security compliance, and readiness.</p>
                        </div>
                    </div>
                    
                    <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                        <Link href="/services" className="btn-primary">View All 6 Service Lines</Link>
                    </div>
                </div>
            </section>

            <section className="section section-alt">
                <div className="container reveal">
                    <div className="grid-2" style={{ direction: 'rtl' }}>
                        <div className="feature-image-wrapper float-animation" style={{ direction: 'ltr' }}>
                            <Image src="/assets/coverage.png" alt="National Coverage Map" width={800} height={800} style={{ width: '100%', height: 'auto' }} />
                        </div>
                        <div style={{ direction: 'ltr' }}>
                            <h2 className="section-title">Scale that spans <br/>the <span className="gradient-text">Nation</span>.</h2>
                            <p style={{ fontSize: '1.15rem', color: 'var(--text-light)', marginBottom: '2rem' }}>
                                From the heights of Ladakh to the islands of Sri Vijaya Puram. Our broad footprint supports operational consistency in diverse geographies and complex exam-center conditions.
                            </p>
                            <div className="badges-container" style={{ marginBottom: '2.5rem' }}>
                                <span className="badge">Ladakh</span>
                                <span className="badge">North East India</span>
                                <span className="badge">Rajasthan</span>
                                <span className="badge">Sri Vijaya Puram</span>
                                <span className="badge">Metro Cities</span>
                                <span className="badge">Remote Centers</span>
                            </div>
                            <Link href="/coverage" className="btn-outline">Explore Our Reach</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
