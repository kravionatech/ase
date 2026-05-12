import ScrollReveal from '@/components/ScrollReveal';
import Link from 'next/link';

export const metadata = {
    title: 'State-Wise Coverage | Anand Sindhu Enterprises',
    description: 'Anand Sindhu Enterprises provides CBT examination support across all Indian states and union territories. Explore our state-wise operational presence, center counts, and deployment capabilities.',
    keywords: ['CBT Support India', 'State-wise Exam Support', 'Examination Manpower India', 'CBT Center Operations', 'Anand Sindhu Enterprises States'],
};

const statesData = [
    {
        zone: 'North',
        color: '#3b82f6',
        states: [
            { name: 'Delhi (NCR)', centers: '200+', staff: '1,200+', status: 'Active', highlight: true, detail: 'HQ operations base. Metro city centers with full technical & non-technical deployment.' },
            { name: 'Uttar Pradesh', centers: '180+', staff: '900+', status: 'Active', detail: 'Largest state deployment. Covers metro cities, Tier 2 & Tier 3 centers.' },
            { name: 'Haryana', centers: '80+', staff: '400+', status: 'Active', detail: 'Strong urban-rural mix. Supports defense exam circuits.' },
            { name: 'Rajasthan', centers: '90+', staff: '450+', status: 'Active', highlight: true, detail: 'Extended remote center coverage including desert-region logistics.' },
            { name: 'Himachal Pradesh', centers: '30+', staff: '150+', status: 'Active', detail: 'Mountain terrain specialist deployment protocols.' },
            { name: 'Uttarakhand', centers: '35+', staff: '170+', status: 'Active', detail: 'Hill region centers with adapted operational frameworks.' },
            { name: 'Punjab', centers: '60+', staff: '300+', status: 'Active', detail: 'High-volume defense examination support across Punjab.' },
            { name: 'Ladakh (UT)', centers: '10+', staff: '50+', status: 'Active', highlight: true, detail: 'High-altitude extreme terrain deployment. Northernmost CBT operations in India.' },
            { name: 'J&K (UT)', centers: '25+', staff: '120+', status: 'Active', detail: 'Special administrative zone deployment with security-compliant protocols.' },
        ]
    },
    {
        zone: 'South',
        color: '#10b981',
        states: [
            { name: 'Andhra Pradesh', centers: '100+', staff: '500+', status: 'Active', detail: 'Coastal and inland center network. Strong technical manpower presence.' },
            { name: 'Telangana', centers: '90+', staff: '450+', status: 'Active', detail: 'Hyderabad tech hub and regional CBT center support.' },
            { name: 'Karnataka', centers: '110+', staff: '550+', status: 'Active', detail: 'Bengaluru metro and pan-state rural center operations.' },
            { name: 'Tamil Nadu', centers: '120+', staff: '600+', status: 'Active', detail: 'Pan-state deployment. High examination volume with multiple conducting bodies.' },
            { name: 'Kerala', centers: '70+', staff: '350+', status: 'Active', detail: 'Coastal state operations with district-level center presence.' },
            { name: 'Sri Vijaya Puram (UT)', centers: '5+', staff: '25+', status: 'Active', highlight: true, detail: 'Southernmost island deployment. Unique logistics and manpower coordination.' },
        ]
    },
    {
        zone: 'East',
        color: '#f59e0b',
        states: [
            { name: 'West Bengal', centers: '100+', staff: '500+', status: 'Active', detail: 'Kolkata metro and district-level coverage across the state.' },
            { name: 'Odisha', centers: '60+', staff: '300+', status: 'Active', detail: 'Coastal and interior center networks with adaptive staffing.' },
            { name: 'Bihar', centers: '80+', staff: '400+', status: 'Active', detail: 'High-volume state with competitive exam density.' },
            { name: 'Jharkhand', centers: '40+', staff: '200+', status: 'Active', detail: 'Tribal region center management and specialized logistics.' },
        ]
    },
    {
        zone: 'North East',
        color: '#8b5cf6',
        states: [
            { name: 'Assam', centers: '45+', staff: '225+', status: 'Active', highlight: true, detail: 'Gateway to NE India. Guwahati hub with regional reach.' },
            { name: 'Meghalaya', centers: '15+', staff: '75+', status: 'Active', detail: 'Hill state operations with specialized access protocols.' },
            { name: 'Manipur', centers: '12+', staff: '60+', status: 'Active', detail: 'CBT support with sensitive region operational expertise.' },
            { name: 'Nagaland', centers: '10+', staff: '50+', status: 'Active', detail: 'Remote hill district deployments with adapted logistics.' },
            { name: 'Tripura', centers: '12+', staff: '60+', status: 'Active', detail: 'Border state operations with bilingual coordination.' },
            { name: 'Mizoram', centers: '8+', staff: '40+', status: 'Active', detail: 'Mountain terrain operations with specialized deployment.' },
            { name: 'Arunachal Pradesh', centers: '10+', staff: '50+', status: 'Active', highlight: true, detail: 'Easternmost state deployment. Extreme terrain management expertise.' },
            { name: 'Sikkim', centers: '5+', staff: '25+', status: 'Active', detail: 'High-altitude Himalayan center support.' },
        ]
    },
    {
        zone: 'West & Central',
        color: '#ef4444',
        states: [
            { name: 'Maharashtra', centers: '150+', staff: '750+', status: 'Active', detail: 'Mumbai mega-city and pan-Maharashtra state-wide deployment.' },
            { name: 'Gujarat', centers: '100+', staff: '500+', status: 'Active', detail: 'Industrial state with urban and semi-urban center networks.' },
            { name: 'Goa', centers: '15+', staff: '75+', status: 'Active', detail: 'Small state with high-quality center management.' },
            { name: 'Madhya Pradesh', centers: '100+', staff: '500+', status: 'Active', detail: 'Central India hub with vast rural center footprint.' },
            { name: 'Chhattisgarh', centers: '45+', staff: '225+', status: 'Active', detail: 'Tribal region and urban center operational support.' },
        ]
    },
];

const totalStats = {
    states: '36',
    centers: '1,800+',
    staff: '9,000+',
    exams: '500+',
};

export default function StatesPage() {
    return (
        <>
            <ScrollReveal />

            {/* Hero Section */}
            <section className="states-hero">
                <div className="states-hero-pattern" />
                <div className="container states-hero-content">
                    <div className="states-breadcrumb">
                        <Link href="/">Home</Link>
                        <span>›</span>
                        <span>State Coverage</span>
                    </div>
                    <div className="states-badge-pill">Pan-India Operations Network</div>
                    <h1 className="states-hero-title">
                        State-Wise <span className="gradient-text">Coverage</span><br />
                        & Operational Reach
                    </h1>
                    <p className="states-hero-sub">
                        From the icy altitudes of Ladakh to the coastal islands of Sri Vijaya Puram — Anand Sindhu Enterprises operates a certified, trained, and ready workforce across all 28 states and 8 union territories of India.
                    </p>
                    <div className="states-hero-stats">
                        <div className="hero-stat-card">
                            <span className="hero-stat-num">36</span>
                            <span className="hero-stat-label">States & UTs</span>
                        </div>
                        <div className="hero-stat-card">
                            <span className="hero-stat-num">1,800+</span>
                            <span className="hero-stat-label">Exam Centers</span>
                        </div>
                        <div className="hero-stat-card">
                            <span className="hero-stat-num">9,000+</span>
                            <span className="hero-stat-label">Deployed Staff</span>
                        </div>
                        <div className="hero-stat-card">
                            <span className="hero-stat-num">500+</span>
                            <span className="hero-stat-label">Exams Supported</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Zone Filter & Legend */}
            <section className="section states-zone-section">
                <div className="container reveal">
                    <div className="section-header">
                        <h2 className="section-title">Operational Zones</h2>
                        <p className="section-subtitle">Our nationwide footprint is organized into 5 strategic deployment zones, each with dedicated coordination teams and operational leads.</p>
                    </div>

                    <div className="zone-legend">
                        {statesData.map((zone) => (
                            <a href={`#zone-${zone.zone.toLowerCase().replace(/\s+/g, '-')}`} key={zone.zone} className="zone-pill" style={{ borderColor: zone.color, color: zone.color }}>
                                <span className="zone-dot" style={{ background: zone.color }} />
                                {zone.zone}
                                <span className="zone-count">{zone.states.length} states</span>
                            </a>
                        ))}
                    </div>

                    {/* Zone Sections */}
                    {statesData.map((zone) => (
                        <div key={zone.zone} id={`zone-${zone.zone.toLowerCase().replace(/\s+/g, '-')}`} className="zone-block reveal">
                            <div className="zone-header" style={{ borderLeftColor: zone.color }}>
                                <div className="zone-header-left">
                                    <span className="zone-tag" style={{ background: zone.color }}>{zone.zone} Zone</span>
                                    <h3 className="zone-title">{zone.zone} India Operations</h3>
                                </div>
                                <div className="zone-header-meta">
                                    <span>{zone.states.length} states/UTs</span>
                                    <span>·</span>
                                    <span>{zone.states.reduce((acc, s) => acc + parseInt(s.staff.replace(/[^0-9]/g, '')), 0).toLocaleString()}+ staff</span>
                                </div>
                            </div>
                            <div className="states-grid">
                                {zone.states.map((state) => (
                                    <div key={state.name} className={`state-card ${state.highlight ? 'state-card-highlight' : ''}`} style={{ '--zone-color': zone.color }}>
                                        {state.highlight && (
                                            <span className="state-badge-special">Key Deployment</span>
                                        )}
                                        <div className="state-card-top">
                                            <h4 className="state-name">{state.name}</h4>
                                            <span className="state-status-dot" />
                                        </div>
                                        <p className="state-detail">{state.detail}</p>
                                        <div className="state-metrics">
                                            <div className="state-metric">
                                                <span className="metric-icon">🏢</span>
                                                <div>
                                                    <span className="metric-value" style={{ color: zone.color }}>{state.centers}</span>
                                                    <span className="metric-label">Centers</span>
                                                </div>
                                            </div>
                                            <div className="state-metric">
                                                <span className="metric-icon">👥</span>
                                                <div>
                                                    <span className="metric-value" style={{ color: zone.color }}>{state.staff}</span>
                                                    <span className="metric-label">Staff Pool</span>
                                                </div>
                                            </div>
                                            <div className="state-metric">
                                                <span className="metric-icon">✅</span>
                                                <div>
                                                    <span className="metric-value" style={{ color: '#10b981' }}>{state.status}</span>
                                                    <span className="metric-label">Status</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Capabilities Strip */}
            <section className="section section-alt">
                <div className="container reveal">
                    <div className="section-header">
                        <h2 className="section-title">What We Deliver in Each State</h2>
                        <p className="section-subtitle">Every state deployment follows a standardized operational protocol, customized for local geography, infrastructure, and exam requirements.</p>
                    </div>
                    <div className="capabilities-grid">
                        <div className="capability-card">
                            <div className="capability-icon">🖥️</div>
                            <h4>Technical Manpower</h4>
                            <p>Certified technical staff for lab setup, server room management, network troubleshooting, and exam-time continuity support.</p>
                        </div>
                        <div className="capability-card">
                            <div className="capability-icon">👔</div>
                            <h4>Non-Technical Staff</h4>
                            <p>Invigilators, coordinators, registration assistants, and venue management personnel for smooth candidate flow.</p>
                        </div>
                        <div className="capability-card">
                            <div className="capability-icon">🔍</div>
                            <h4>Center Audits</h4>
                            <p>Pre-exam readiness inspection covering infrastructure, connectivity, hardware, and security protocol verification.</p>
                        </div>
                        <div className="capability-card">
                            <div className="capability-icon">📡</div>
                            <h4>Field Coordination</h4>
                            <p>Real-time on-ground coordination with center leads, local bodies, and operational teams throughout exam days.</p>
                        </div>
                        <div className="capability-card">
                            <div className="capability-icon">🛡️</div>
                            <h4>Security Compliance</h4>
                            <p>Strict biometric verification, document check, and security sweep protocols for tamper-proof examination conduct.</p>
                        </div>
                        <div className="capability-card">
                            <div className="capability-icon">📊</div>
                            <h4>Reporting & Analytics</h4>
                            <p>Post-exam operational reports, incident logs, and performance summaries submitted to the conducting body.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="states-cta-section">
                <div className="container states-cta-inner reveal">
                    <div className="states-cta-text">
                        <h2>Ready to deploy in your state?</h2>
                        <p>We mobilize exam support teams within 72 hours across any of our active zones. Reach out to discuss your examination cycle requirements.</p>
                    </div>
                    <div className="states-cta-actions">
                        <Link href="/contact" className="btn-primary btn-large">Discuss Requirements</Link>
                        <Link href="/services" className="btn-outline btn-large" style={{ borderColor: 'white', color: 'white' }}>View All Services</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
