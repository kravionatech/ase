import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
    title: 'Contact Us | Anand Sindhu Enterprises',
    description: 'Get in touch with Anand Sindhu Enterprises for reliable CBT examination support and manpower operations across India. Email: anandsindhuenterprises@gmail.com',
};

export default function Contact() {
    return (
        <>
            <ScrollReveal />
            <section className="hero" style={{ minHeight: '50vh', alignItems: 'flex-end', paddingBottom: '4rem' }}>
                <div className="container hero-content">
                    <h1 style={{ fontSize: '3.5rem' }}>Contact Us</h1>
                    <p style={{ fontSize: '1.2rem', color: '#cbd5e1' }}>Ready for a formal company website launch.</p>
                </div>
            </section>

            <section className="section">
                <div className="container reveal">
                    <div className="grid-2">
                        <div>
                            <h2 className="section-title">Get in Touch</h2>
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-light)', marginBottom: '2rem' }}>
                                Reach out to Anand Sindhu Enterprises for comprehensive CBT operations, manpower deployment, and center audits across India.
                            </p>
                            
                            <div className="contact-box">
                                <h4 style={{ color: 'var(--primary)' }}>Registered Office</h4>
                                <p style={{ color: 'var(--text-light)' }}>Basement Floor, E-238-239, Amar Colony, Lajpat Nagar IV, New Delhi, South East Delhi, Delhi - 110024</p>
                            </div>

                            <div className="contact-box">
                                <h4 style={{ color: 'var(--primary)' }}>Email</h4>
                                <p style={{ color: 'var(--text-light)' }}><a href="mailto:anandsindhuenterprises@gmail.com">anandsindhuenterprises@gmail.com</a></p>
                            </div>

                            <div className="contact-box">
                                <h4 style={{ color: 'var(--primary)' }}>Phone</h4>
                                <p style={{ color: 'var(--text-light)' }}><a href="tel:+919811229664">+91 98112 29664</a></p>
                            </div>

                            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
                                <a href="mailto:anandsindhuenterprises@gmail.com" className="btn-primary">Email Company</a>
                                <a href="tel:+919811229664" className="btn-outline">Call Now</a>
                            </div>
                        </div>

                        <div className="card" style={{ backgroundColor: 'var(--primary)', color: 'white' }}>
                            <h3 style={{ color: 'white', marginBottom: '1.5rem' }}>Send an Enquiry</h3>
                            <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <input type="text" placeholder="Your Name" style={{ padding: '1rem', borderRadius: '8px', border: 'none', fontFamily: 'Outfit' }} />
                                <input type="email" placeholder="Email Address" style={{ padding: '1rem', borderRadius: '8px', border: 'none', fontFamily: 'Outfit' }} />
                                <input type="tel" placeholder="Phone Number" style={{ padding: '1rem', borderRadius: '8px', border: 'none', fontFamily: 'Outfit' }} />
                                <textarea placeholder="Your Message" rows="5" style={{ padding: '1rem', borderRadius: '8px', border: 'none', fontFamily: 'Outfit', resize: 'vertical' }}></textarea>
                                <button type="button" className="btn-primary" style={{ marginTop: '1rem', border: 'none', width: '100%' }}>Submit Request</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
