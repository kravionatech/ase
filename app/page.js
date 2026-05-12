import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
    title: 'Anand Sindhu Enterprises | Nationwide Excellence in CBT Operations',
    description: 'Trusted examination support across India. Technical manpower, non-technical staffing, center audits, and on-ground operational support for CBT examinations including defense exam support.',
};

const services = [
    {
        num: '01',
        icon: '🖥️',
        title: 'CBT Exam Support',
        desc: 'End-to-end manpower and operational support for computer-based test cycles from pre-exam readiness to post-exam wrap-up.',
        link: '/services',
    },
    {
        num: '02',
        icon: '⚙️',
        title: 'Technical Manpower',
        desc: 'Certified technical staff for system setup, server management, networking, and real-time troubleshooting at exam centers.',
        link: '/services',
    },
    {
        num: '03',
        icon: '👥',
        title: 'Non-Technical Staff',
        desc: 'Trained invigilators, coordinators, and verification personnel ensuring smooth candidate flow and venue discipline.',
        link: '/services',
    },
    {
        num: '04',
        icon: '🔍',
        title: 'Center Audits',
        desc: 'Infrastructure, hardware, network, and security compliance audits ensuring every center meets examination-ready standards.',
        link: '/services',
    },
    {
        num: '05',
        icon: '📡',
        title: 'Field Coordination',
        desc: 'On-ground operational coordination with center teams and local staff to maintain schedule discipline and resolve issues fast.',
        link: '/services',
    },
    {
        num: '06',
        icon: '🗺️',
        title: 'Nationwide Execution',
        desc: 'Operational reach from Ladakh to Sri Vijaya Puram — metro cities, Tier-2 towns, and remote centers across all zones.',
        link: '/states',
    },
];

const stats = [
    { value: '9,000+', label: 'Deployed Staff', icon: '👥' },
    { value: '1,800+', label: 'Exam Centers', icon: '🏢' },
    { value: '36', label: 'States & UTs', icon: '🗺️' },
    { value: '500+', label: 'Exams Supported', icon: '📋' },
];

const whyPoints = [
    {
        icon: '🛡️',
        title: 'Compliance-First Approach',
        desc: 'Every operation runs on strict security, biometric verification, and conducting-body protocols.',
    },
    {
        icon: '⚡',
        title: 'Rapid Mobilization',
        desc: 'Full team deployment within 72 hours across any active zone — ready for urgent exam cycles.',
    },
    {
        icon: '📍',
        title: 'Pan-India Presence',
        desc: 'Active operational footprint in all 28 states and 8 UTs, including remote and high-altitude locations.',
    },
    {
        icon: '🎓',
        title: 'Defense Exam Expertise',
        desc: 'Specialized experience supporting high-stakes defense and government recruitment examinations.',
    },
];

const clients = [
    'NTA Supported', 'Defense Exams', 'State PSC Support', 'DRDO Operations',
    'Railway Exams', 'Banking Sector', 'SSC Operations', 'University Exams',
];

export default function Home() {
    return (
        <>
            <ScrollReveal />

            {/* ── HERO ─────────────────────────────────── */}
            <section className="lp-hero">
                <Image
                    src="/assets/hero.png"
                    alt="CBT Center Operations"
                    fill
                    className="lp-hero-bg"
                    priority
                    style={{ objectFit: 'cover' }}
                />
                <div className="lp-hero-overlay" />

                <div className="container lp-hero-body">
                    {/* Badge */}
                    <div className="lp-hero-badge">
                        <span className="lp-hero-badge-dot" />
                        India&apos;s Trusted CBT Operations Partner
                    </div>

                    <h1 className="lp-hero-title">
                        Nationwide Excellence<br />
                        in <span className="lp-hero-accent">CBT Operations</span>
                    </h1>

                    <p className="lp-hero-desc">
                        Anand Sindhu Enterprises delivers certified technical manpower, non-technical staffing, center audits, and on-ground operational support for computer-based examinations across all of India — including defense exam operations with national reach.
                    </p>

                    <div className="lp-hero-actions">
                        <Link href="/services" className="btn-primary btn-large lp-btn-glow">
                            Explore Services →
                        </Link>
                        <Link href="/contact" className="lp-btn-ghost">
                            Get a Quote
                        </Link>
                    </div>

                    {/* Stat strip */}
                    <div className="lp-hero-stats">
                        {stats.map((s) => (
                            <div key={s.label} className="lp-hero-stat">
                                <span className="lp-hero-stat-icon">{s.icon}</span>
                                <span className="lp-hero-stat-val">{s.value}</span>
                                <span className="lp-hero-stat-label">{s.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Scroll cue */}
                <div className="lp-scroll-cue">
                    <span />
                </div>
            </section>

            {/* ── TRUST BAR ────────────────────────────── */}
            <div className="lp-trust-bar">
                <div className="container lp-trust-inner">
                    <span className="lp-trust-label">Exam verticals supported</span>
                    <div className="lp-trust-items">
                        {clients.map((c) => (
                            <span key={c} className="lp-trust-item">{c}</span>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── ABOUT SNIPPET ────────────────────────── */}
            <section className="section lp-about-section">
                <div className="container reveal">
                    <div className="lp-about-grid">
                        <div className="lp-about-img-wrap">
                            <Image
                                src="/assets/success.png"
                                alt="CBT Exam Excellence"
                                width={700}
                                height={520}
                                style={{ width: '100%', height: 'auto', borderRadius: '20px' }}
                                priority
                            />
                            {/* Floating badge */}
                            <div className="lp-float-badge">
                                <span className="lp-float-badge-num">400+</span>
                                <span className="lp-float-badge-txt">Trained<br />Professionals</span>
                            </div>
                        </div>

                        <div className="lp-about-text">
                            <span className="lp-section-eyebrow">Who We Are</span>
                            <h2 className="section-title">
                                A professional partner for{' '}
                                <span className="gradient-text">CBT operations</span>.
                            </h2>
                            <p className="lp-about-desc">
                                We support examination agencies with elite staffing, audit coordination, center readiness verification, and flawless execution support — in metro cities, semi-urban towns, and remote locations across India.
                            </p>

                            <div className="lp-why-grid">
                                {whyPoints.map((p) => (
                                    <div key={p.title} className="lp-why-item">
                                        <span className="lp-why-icon">{p.icon}</span>
                                        <div>
                                            <h4 className="lp-why-title">{p.title}</h4>
                                            <p className="lp-why-desc">{p.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <Link href="/about" className="btn-outline lp-about-cta">
                                Read Company Profile →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SERVICES ─────────────────────────────── */}
            <section className="section lp-services-section">
                <div className="container reveal">
                    <div className="lp-section-head">
                        <span className="lp-section-eyebrow">What We Offer</span>
                        <h2 className="section-title">Core Service Ecosystem</h2>
                        <p className="section-subtitle">
                            Comprehensive support for every stage of your computer-based examination cycle — delivered with precision and scale.
                        </p>
                    </div>

                    <div className="lp-services-grid">
                        {services.map((s) => (
                            <Link key={s.num} href={s.link} className="lp-service-card">
                                <span className="lp-svc-num">{s.num}</span>
                                <span className="lp-svc-icon">{s.icon}</span>
                                <h3 className="lp-svc-title">{s.title}</h3>
                                <p className="lp-svc-desc">{s.desc}</p>
                                <span className="lp-svc-arrow">→</span>
                            </Link>
                        ))}
                    </div>

                    <div className="lp-services-cta">
                        <Link href="/services" className="btn-primary btn-large">
                            View All Services
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── STATS BAND ───────────────────────────── */}
            <section className="lp-stats-band reveal">
                <div className="container lp-stats-inner">
                    {stats.map((s) => (
                        <div key={s.label} className="lp-stat-card">
                            <span className="lp-stat-icon">{s.icon}</span>
                            <span className="lp-stat-val">{s.value}</span>
                            <span className="lp-stat-label">{s.label}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── COVERAGE ─────────────────────────────── */}
            <section className="section lp-coverage-section">
                <div className="container reveal">
                    <div className="lp-coverage-grid">
                        <div className="lp-coverage-text">
                            <span className="lp-section-eyebrow">Operational Reach</span>
                            <h2 className="section-title">
                                Scale that spans<br />
                                the <span className="gradient-text">Nation</span>.
                            </h2>
                            <p className="lp-about-desc">
                                From the icy altitudes of Ladakh to the coastal islands of Sri Vijaya Puram — our operational footprint covers every geography, including high-altitude, remote, and border-region examination centers.
                            </p>

                            <div className="lp-coverage-zones">
                                {['North Zone', 'South Zone', 'East Zone', 'North East', 'West & Central'].map((z) => (
                                    <div key={z} className="lp-zone-chip">
                                        <span className="lp-zone-dot" />
                                        {z}
                                    </div>
                                ))}
                            </div>

                            <div className="lp-coverage-badges">
                                {['Ladakh', 'North East India', 'Rajasthan', 'Sri Vijaya Puram', 'Metro Cities', 'Remote Centers'].map((b) => (
                                    <span key={b} className="badge">{b}</span>
                                ))}
                            </div>

                            <div className="lp-coverage-actions">
                                <Link href="/states" className="btn-primary">View All States →</Link>
                                <Link href="/coverage" className="btn-outline">Coverage Map</Link>
                            </div>
                        </div>

                        <div className="feature-image-wrapper float-animation lp-coverage-img">
                            <Image
                                src="/assets/coverage.png"
                                alt="National Coverage Map"
                                width={700}
                                height={700}
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA BANNER ───────────────────────────── */}
            <section className="lp-cta-banner">
                <div className="lp-cta-banner-bg" />
                <div className="container lp-cta-banner-inner reveal">
                    <div className="lp-cta-banner-text">
                        <h2>Ready to deploy exam support<br />across India?</h2>
                        <p>Talk to our operations team. We mobilize within 72 hours across any of our active zones.</p>
                    </div>
                    <div className="lp-cta-banner-actions">
                        <a href="tel:+919811229664" className="btn-primary btn-large lp-btn-glow">
                            📞 Call Now
                        </a>
                        <a href="mailto:anandsindhuenterprises@gmail.com" className="lp-btn-ghost lp-btn-ghost-light">
                            ✉️ Send Email
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
