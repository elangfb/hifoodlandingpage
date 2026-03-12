import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer>
            <div className="footer-top">
                <div className="footer-brand">
                    <a className="logo" href="#">
                        <img src="/asset/img/hifood-logo.jpg" alt="Hifood Capital" className="logo-img" />
                    </a>
                    <p>Venture studio yang membangun dan mendanai bisnis terbaik di ekosistem F&B dan food supply Indonesia.</p>
                </div>
                <div className="footer-links">
                    <div className="footer-col">
                        <h4>Studio</h4>
                        <ul>
                            <li><a href="#">Proses</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#contact">Build with Us</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Contact</h4>
                        <ul>
                            <li><a href="mailto:hello@hifoodcapital.id">hello@hifoodcapital.id</a></li>
                            <li><a href="#">Jakarta, Indonesia</a></li>
                            <li><a href="#">LinkedIn</a></li>
                            <li><a href="#">Instagram</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2025 Hifood Capital. All rights reserved.</p>
                <div className="social-row">
                    <a href="#" className="social-btn">in</a>
                    <a href="#" className="social-btn">ig</a>
                    <a href="#" className="social-btn">tw</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
