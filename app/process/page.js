import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
    title: 'Process & Values | Anand Sindhu Enterprises',
    description: 'Learn about our 4-step exam support process: Requirement mapping, Team deployment, Exam-day execution, and Audit reporting. Built on reliability and integrity.',
};

export default function Process() {
    return (
        <>
            <ScrollReveal />
            <section className="hero" style={{ minHeight: '50vh', alignItems: 'flex-end', paddingBottom: '4rem' }}>
                <div className="container hero-content">
                    <h1 style={{ fontSize: '3.5rem' }}>How Operations Work</h1>
                    <p style={{ fontSize: '1.2rem', color: '#cbd5e1' }}>A structured exam support process built on reliability, integrity and execution.</p>
                </div>
            </section>

            <section className="section">
                <div className="container reveal">
                    <div className="section-header">
                        <h2 className="section-title">A Structured Exam Support Process</h2>
                        <p className="section-subtitle">Converting requirements into seamless deployment and execution.</p>
                    </div>
                    
                    <div className="grid-2">
                        <div>
                            <div className="process-list">
                                <div className="process-item">
                                    <h3>01. Requirement mapping</h3>
                                    <p style={{ color: 'var(--text-light)' }}>Understand exam schedules, center count, manpower needs, technical setup, and reporting expectations before deployment.</p>
                                </div>
                                <div className="process-item">
                                    <h3>02. Team deployment</h3>
                                    <p style={{ color: 'var(--text-light)' }}>Assign technical and non-technical personnel based on geography, center size, and operational complexity.</p>
                                </div>
                                <div className="process-item">
                                    <h3>03. Exam-day execution</h3>
                                    <p style={{ color: 'var(--text-light)' }}>Support candidate flow, lab readiness, troubleshooting, documentation, and center-level coordination during test operations.</p>
                                </div>
                                <div className="process-item">
                                    <h3>04. Audit and reporting</h3>
                                    <p style={{ color: 'var(--text-light)' }}>Review infrastructure, compliance, observations, and corrective points to support center validation and future readiness.</p>
                                </div>
                            </div>
                        </div>
                        <div className="feature-image-wrapper float-animation">
                            <Image src="/assets/hero.png" alt="Operations Process" width={600} height={400} style={{ width: '100%', height: 'auto' }} />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" style={{ backgroundColor: 'var(--bg-white)' }}>
                <div className="container reveal">
                    <div className="section-header">
                        <h2 className="section-title">Values and Strengths</h2>
                        <p className="section-subtitle">The formal company profile emphasizes professional excellence, accountability, operational efficiency, confidentiality, and examination integrity as the core foundation of the business.</p>
                    </div>
                    
                    <div className="grid-3">
                        <div className="card">
                            <h3 style={{ color: 'var(--accent)' }}>Reliability</h3>
                            <p style={{ color: 'var(--text-light)' }}>Consistent coordination, disciplined deployment, and service quality maintained across center locations.</p>
                        </div>
                        <div className="card">
                            <h3 style={{ color: 'var(--accent)' }}>Professional Excellence</h3>
                            <p style={{ color: 'var(--text-light)' }}>Trained personnel, clear execution methods, and readiness for technical as well as operational demands.</p>
                        </div>
                        <div className="card">
                            <h3 style={{ color: 'var(--accent)' }}>Accountability</h3>
                            <p style={{ color: 'var(--text-light)' }}>Structured communication, field ownership, and process-backed support for examination agencies.</p>
                        </div>
                        <div className="card">
                            <h3 style={{ color: 'var(--accent)' }}>Efficiency</h3>
                            <p style={{ color: 'var(--text-light)' }}>Fast response to center-level requirements, troubleshooting needs, and staffing coordination timelines.</p>
                        </div>
                        <div className="card">
                            <h3 style={{ color: 'var(--accent)' }}>Confidentiality</h3>
                            <p style={{ color: 'var(--text-light)' }}>Attention to secure handling, exam sensitivity, and disciplined conduct in high-stakes environments.</p>
                        </div>
                        <div className="card">
                            <h3 style={{ color: 'var(--accent)' }}>Nationwide Commitment</h3>
                            <p style={{ color: 'var(--text-light)' }}>Pan-India service readiness supported by a large manpower pool and location-flexible deployment.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
