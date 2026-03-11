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
                        <div className="pcard-thumb-bg" style={{ background: 'linear-gradient(135deg, #FFF0EB, #FFD5C5)' }}></div>
                        <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
                            <rect x="18" y="36" width="54" height="32" rx="3" fill="rgba(249,92,46,0.1)" stroke="#F95C2E" strokeWidth="1.6" />
                            <path d="M26 36V30C26 24.5 30.5 20 36 20H54C59.5 20 64 24.5 64 30V36" stroke="#F95C2E" strokeWidth="1.6" />
                            <rect x="26" y="46" width="14" height="12" rx="2" fill="rgba(249,92,46,0.18)" stroke="#F95C2E" strokeWidth="1.4" />
                            <rect x="50" y="46" width="14" height="12" rx="2" fill="rgba(249,92,46,0.18)" stroke="#F95C2E" strokeWidth="1.4" />
                            <path d="M40 50H50" stroke="#F03F7E" strokeWidth="1.3" strokeLinecap="round" />
                            <path d="M42 54H48" stroke="#F03F7E" strokeWidth="1.3" strokeLinecap="round" />
                            <path d="M32 36V33M45 36V33M58 36V33" stroke="#F95C2E" strokeWidth="1.4" strokeLinecap="round" />
                            <path d="M20 68H70" stroke="#F95C2E" strokeWidth="1.6" strokeLinecap="round" />
                            <path d="M33 26C33 26 34 24 33 22" stroke="rgba(249,92,46,0.4)" strokeWidth="1.2" strokeLinecap="round" />
                            <path d="M45 24C45 24 46 22 45 20" stroke="rgba(249,92,46,0.4)" strokeWidth="1.2" strokeLinecap="round" />
                        </svg>
                    </div>
                    <div className="pcard-body">
                        <div className="pcard-cat">Cloud Kitchen</div>
                        <h3>DapurKita</h3>
                        <p>Platform cloud kitchen berbasis komunitas untuk UMKM kuliner di Jabodetabek</p>
                    </div>
                </div>

                <div className="pcard reveal">
                    <div className="pcard-thumb">
                        <div className="pcard-thumb-bg" style={{ background: 'linear-gradient(135deg, #FFF0F6, #FFD0E4)' }}></div>
                        <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
                            <path d="M45 68V38" stroke="#F03F7E" strokeWidth="1.6" strokeLinecap="round" />
                            <path d="M45 52C45 52 29 44 29 26C37 26 45 34 45 52Z" fill="rgba(240,63,126,0.1)" stroke="#F03F7E" strokeWidth="1.5" />
                            <path d="M45 44C45 44 61 35 61 17C53 17 45 26 45 44Z" fill="rgba(240,63,126,0.1)" stroke="#F03F7E" strokeWidth="1.5" />
                            <path d="M22 68H68" stroke="#F03F7E" strokeWidth="1.6" strokeLinecap="round" />
                            <path d="M45 60C45 60 38 64 34 68" stroke="#F03F7E" strokeWidth="1.3" strokeLinecap="round" />
                            <path d="M45 60C45 60 52 64 56 68" stroke="#F03F7E" strokeWidth="1.3" strokeLinecap="round" />
                            <circle cx="35" cy="40" r="2.5" fill="rgba(240,63,126,0.2)" stroke="#F03F7E" strokeWidth="1.2" />
                            <circle cx="57" cy="30" r="2.5" fill="rgba(240,63,126,0.2)" stroke="#F03F7E" strokeWidth="1.2" />
                        </svg>
                    </div>
                    <div className="pcard-body">
                        <div className="pcard-cat">Food Supply</div>
                        <h3>PanenDirect</h3>
                        <p>Menghubungkan petani dan produsen F&B langsung tanpa perantara di rantai pasok</p>
                    </div>
                </div>

                <div className="pcard reveal">
                    <div className="pcard-thumb">
                        <div className="pcard-thumb-bg" style={{ background: 'linear-gradient(135deg, #FFF3EE, #FFD5C0)' }}></div>
                        <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
                            <path d="M36 24H54L57 34V72C57 73.1 56.1 74 55 74H35C33.9 74 33 73.1 33 72V34L36 24Z" fill="rgba(252,119,85,0.09)" stroke="#FC7755" strokeWidth="1.6" />
                            <path d="M38 24V18C38 16.9 38.9 16 40 16H50C51.1 16 52 16.9 52 18V24" stroke="#FC7755" strokeWidth="1.5" />
                            <rect x="36" y="40" width="18" height="18" rx="2" fill="rgba(252,119,85,0.1)" stroke="#FC7755" strokeWidth="1.2" />
                            <path d="M40 46H50M41 50H49M42 54H48" stroke="#F03F7E" strokeWidth="1.2" strokeLinecap="round" />
                            <path d="M33 34H57" stroke="#FC7755" strokeWidth="1.4" strokeLinecap="round" />
                            <path d="M38 38L38 66" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </div>
                    <div className="pcard-body">
                        <div className="pcard-cat">Consumer Brand</div>
                        <h3>SeggarID</h3>
                        <p>Minuman kesehatan berbasis bahan lokal Indonesia untuk pasar modern urban</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
