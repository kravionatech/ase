import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
    title: 'National Coverage | Anand Sindhu Enterprises',
    description: 'Anand Sindhu Enterprises provides Pan-India CBT exam support from Ladakh to Sri Vijaya Puram. We support metropolitan, semi-urban, and remote center operations.',
};

export default function Coverage() {
    return (
        <>
            <ScrollReveal />
            <section className="hero" style={{ minHeight: '50vh', alignItems: 'flex-end', paddingBottom: '4rem' }}>
                <div className="container hero-content">
                    <h1 style={{ fontSize: '3.5rem' }}>National Coverage</h1>
                    <p style={{ fontSize: '1.2rem', color: '#cbd5e1' }}>From Ladakh to Sri Vijaya Puram.</p>
                </div>
            </section>

            <section className="section">
                <div className="container reveal">
                    <div className="grid-2">
                        <div>
                            <h2 className="section-title">Pan-India Reach</h2>
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-light)', marginBottom: '2rem' }}>
                                The company profile highlights reach across India, extending from Ladakh to Sri Vijaya Puram and from Rajasthan to the North Eastern states. This broad footprint supports operational consistency in diverse geographies and exam-center conditions.
                            </p>
                            <ul className="process-list" style={{ marginBottom: '2rem' }}>
                                <li style={{ marginBottom: '1rem', fontWeight: 500 }}>✓ Metropolitan, semi-urban, and remote center support models.</li>
                                <li style={{ marginBottom: '1rem', fontWeight: 500 }}>✓ Adaptable staffing for different infrastructure environments.</li>
                                <li style={{ fontWeight: 500 }}>✓ Audit and readiness services aligned with center-specific conditions.</li>
                            </ul>
                            <div className="badges-container">
                                <span className="badge">Ladakh</span>
                                <span className="badge">North East</span>
                                <span className="badge">Rajasthan</span>
                                <span className="badge">Sri Vijaya Puram</span>
                            </div>
                        </div>
                        <div className="feature-image-wrapper float-animation">
                            <Image src="/assets/coverage.png" alt="Map of India Coverage" width={600} height={600} style={{ width: '100%', height: 'auto' }} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
