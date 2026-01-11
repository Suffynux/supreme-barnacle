import Link from 'next/link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import './header-footer.css';

export default function MainFooter() {
    return (
        <Box component="footer" className="custom-footer font-noto">
            <Container className="footer-container">
                <div className="footer-brand">
                    <h3>TrustTrack</h3>
                    <p>
                        Empowering your journey with secure and reliable tracking solutions.
                        Building trust through transparency and technology.
                    </p>
                </div>

                <div className="footer-column">
                    <h4>Product</h4>
                    <ul className="footer-links">
                        <li><Link href="/features">Features</Link></li>
                        <li><Link href="/pricing">Pricing</Link></li>
                        <li><Link href="/integrations">Integrations</Link></li>
                        <li><Link href="/changelog">Changelog</Link></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4>Company</h4>
                    <ul className="footer-links">
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/careers">Careers</Link></li>
                        <li><Link href="/blog">Blog</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4>Legal</h4>
                    <ul className="footer-links">
                        <li><Link href="/privacy">Privacy Policy</Link></li>
                        <li><Link href="/terms">Terms of Service</Link></li>
                        <li><Link href="/security">Security</Link></li>
                    </ul>
                </div>
            </Container>

            <div className="copyright">
                © {new Date().getFullYear()} TrustTrack Inc. All rights reserved.
            </div>
        </Box>
    );
}
