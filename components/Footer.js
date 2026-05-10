import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div>
                        <div className="logo" style={{ marginBottom: '1.5rem', filter: 'brightness(0) invert(1)' }}>
                            <Image src="/assets/logo.png" alt="ASE Logo" width={50} height={50} style={{ width: 'auto', height: '50px' }} />
                            <span style={{ color: 'white' }}>ASE</span>
                        </div>
                        <p>Examination support solutions for CBT operations, manpower deployment, and center audits across India.</p>
                    </div>
                    <div>
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/services">Core Services</Link></li>
                            <li><Link href="/coverage">National Coverage</Link></li>
                            <li><Link href="/process">How It Works</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Contact Us</h4>
                        <ul>
                            <li><a href="mailto:anandsindhuenterprises@gmail.com">anandsindhuenterprises@gmail.com</a></li>
                            <li><a href="tel:+919811229664">+91 98112 29664</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Anand Sindhu Enterprises. Nationwide Excellence in CBT Operations.</p>
                </div>
            </div>
        </footer>
    );
}
