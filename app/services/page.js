import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
    title: 'Core Services | Anand Sindhu Enterprises',
    description: 'Explore the 6 core services of Anand Sindhu Enterprises: CBT Examination Support, Technical & Non-Technical Manpower, Center Audits, Field Coordination, and Nationwide Execution.',
};

export default function Services() {
    return (
        <>
            <ScrollReveal />
            <section className="hero" style={{ minHeight: '60vh', background: 'var(--surface)', borderBottom: '1px solid var(--border)' }}>
                <div className="container hero-content" style={{ paddingBottom: '4rem' }}>
                    <h1 style={{ fontSize: '4rem' }}>Core <span className="gradient-text">Services</span></h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-light)' }}>Comprehensive support structures for computer-based examinations, covering everything from technical setup to venue logistics.</p>
                </div>
            </section>

            <section className="section">
                <div className="container reveal">
                    <div className="grid-3">
                        <div className="card">
                            <Image src="/assets/hero.png" alt="CBT Support" width={400} height={250} className="card-image" />
                            <h3>CBT Examination Support</h3>
                            <p>End-to-end support for computer-based test operations, including manpower planning, center-level execution, coordination, and on-ground examination assistance.</p>
                        </div>

                        <div className="card">
                            <Image src="/assets/tech.png" alt="Technical Manpower" width={400} height={250} className="card-image" />
                            <h3>Technical Manpower</h3>
                            <p>Deployment of technical staff for system setup, server and lab support, networking assistance, troubleshooting, and exam-time technical continuity.</p>
                        </div>

                        <div className="card">
                            <Image src="/assets/staff.png" alt="Non-Technical Manpower" width={400} height={250} className="card-image" />
                            <h3>Non-Technical Manpower</h3>
                            <p>Operational personnel for candidate movement, verification support, administrative coordination, invigilation assistance, and venue logistics.</p>
                        </div>

                        <div className="card">
                            <Image src="/assets/audit.png" alt="Center Audits" width={400} height={250} className="card-image" />
                            <h3>Center Audits</h3>
                            <p>Technical and non-technical audits covering infrastructure, hardware, networking, security compliance, and examination readiness.</p>
                        </div>

                        <div className="card">
                            <Image src="/assets/operations.png" alt="Field Coordination" width={400} height={250} className="card-image" />
                            <h3>Field Coordination</h3>
                            <p>Coordination with center teams, local staff, and operational personnel to maintain schedule discipline and issue resolution during exam cycles.</p>
                        </div>

                        <div className="card">
                            <Image src="/assets/coverage.png" alt="Nationwide Execution" width={400} height={250} className="card-image" />
                            <h3>Nationwide Execution</h3>
                            <p>Capability to support examination operations across varied geographies, from major cities to semi-urban and remote locations.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
