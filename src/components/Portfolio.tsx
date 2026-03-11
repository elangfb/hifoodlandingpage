import React from 'react';

const Portfolio: React.FC = () => {
    return (
        <section className="portfolio" id="portfolio">
            <div className="portfolio-header reveal">
                <div>
                    <div className="section-eyebrow">Portfolio</div>
                    <h2 className="stitle">Bisnis yang kami bangun</h2>
                </div>
                <a href="#" className="process-link reveal">Lihat semua →</a>
            </div>

            <div className="portfolio-grid">
                <div className="pcard reveal">
                    <div className="pcard-thumb">
                        <img src="/asset/img/btp.jpg" alt="Bakso Tujuh Pemuda" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div className="pcard-body">
                        <div className="pcard-cat">Resto & Cafe</div>
                        <h3>Bakso Tujuh Pemuda</h3>
                        <p>A scalable Indonesian street food brand redefining the traditional bakso experience with standardized operations and strong neighborhood demand.</p>
                    </div>
                </div>

                <div className="pcard reveal">
                    <div className="pcard-thumb">
                        <div className="pcard-thumb-bg" style={{ background: 'linear-gradient(135deg, #FFF0EB, #FFD5C5)' }}></div>
                    </div>
                    <div className="pcard-body">
                        <div className="pcard-cat">Resto & Cafe</div>
                        <h3>Ayam Goreng Pandawa</h3>
                        <p>A fast-growing fried chicken brand delivering bold Indonesian flavors through a highly replicable quick-service format.</p>
                    </div>
                </div>

                <div className="pcard reveal">
                    <div className="pcard-thumb">
                        <img src="/asset/img/kolato.jpg" alt="Kolato Coffee" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div className="pcard-body">
                        <div className="pcard-cat">Resto & Cafe</div>
                        <h3>Kolato Coffee</h3>
                        <p>A Korean-inspired coffee shop concept combining minimalist café aesthetics with high-quality Indonesian coffee for the modern urban market.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
