import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata = {
  title: 'Anand Sindhu Enterprises | Nationwide Excellence in CBT Operations',
  description: 'Trusted examination support across India. Anand Sindhu Enterprises delivers technical manpower, non-technical staffing, center audits, and on-ground operational support for computer-based examinations.',
  keywords: ['CBT Operations', 'Examination Support', 'Center Audits', 'Technical Manpower', 'India Exam Support', 'Anand Sindhu Enterprises'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
