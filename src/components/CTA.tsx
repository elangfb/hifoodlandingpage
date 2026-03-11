import React from 'react';

const CTA: React.FC = () => {
    return (
        <div className="cta-wrap" id="contact">
            <div className="cta-box reveal">
                <div className="cta-accent"></div>
                <div className="cta-left">
                    <h2>Mari ciptakan sesuatu yang luar biasa bersama</h2>
                    <p>Punya ide bisnis F&B? Kami siap all-in bersama kamu — dari validasi ide hingga membesarkan brand ke skala nasional.</p>
                </div>
                <a href="mailto:hello@hifoodcapital.id" className="btn-white">Hubungi Kami →</a>
            </div>
        </div>
    );
};

export default CTA;
