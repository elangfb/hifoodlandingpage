import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="hero">
            <div className="hero-bg-line"></div>
            <div className="hero-bg-dots"></div>
            <div className="hero-inner">
                <div className="hero-left">
                    <div className="hero-badge"><div className="badge-dot"></div>F&B Venture Studio · Indonesia</div>
                    <h1>Where great<br /><em>food ideas</em><br />become brands</h1>
                    <p className="hero-sub">Hifood Capital membangun, mendanai, dan menskalakan bisnis terbaik di ekosistem F&B dan food supply chain Indonesia.</p>
                    <div className="hero-actions">
                        <a href="#contact" className="btn-primary">Bangun Bareng Kami</a>
                        <a href="#process" className="btn-outline">Lihat Proses Kami →</a>
                    </div>
                    <div className="hero-stats">
                        <div className="stat-item">
                            <div className="stat-num">12+</div>
                            <div className="stat-label">Portfolio Companies</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-num">Rp 80M</div>
                            <div className="stat-label">Capital Deployed</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-num">3x</div>
                            <div className="stat-label">Avg Revenue Growth</div>
                        </div>
                    </div>
                </div>

                <div className="hero-right">
                    <div className="hero-panel">
                        <div className="panel-header">
                            <div className="panel-header-icon">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <circle cx="3" cy="9" r="2" stroke="#F95C2E" strokeWidth="1.4" />
                                    <circle cx="15" cy="4" r="2" stroke="#F03F7E" strokeWidth="1.4" />
                                    <circle cx="15" cy="14" r="2" stroke="#F03F7E" strokeWidth="1.4" />
                                    <path d="M5 8.5L13 4.5M5 9.5L13 13.5" stroke="#F95C2E" strokeWidth="1.2" strokeDasharray="2 1.5" />
                                </svg>
                            </div>
                            <div><h4>Active Portfolio</h4><p>2025 cohort — 3 companies</p></div>
                        </div>
                        <div className="panel-tags">
                            <div className="ptag"><div className="ptag-dot orange"></div>Cloud Kitchen</div>
                            <div className="ptag"><div className="ptag-dot pink"></div>Food Supply</div>
                            <div className="ptag"><div className="ptag-dot peach"></div>Consumer Brand</div>
                            <div className="ptag"><div className="ptag-dot orange"></div>AgriTech</div>
                        </div>
                        <div className="panel-list">
                            <div className="panel-item">
                                <div className="panel-item-left">
                                    <div className="panel-item-ico">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M8 13C8 13 3 10.5 3 7C3 4.8 5 3 7 4.5C7 3 9 2 10 3.5C11.5 2.5 13 4 13 6.5C13 9.5 8 13 8 13Z" stroke="#F95C2E" strokeWidth="1.3" fill="rgba(249,92,46,0.08)" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="panel-item-name">DapurKita</div>
                                        <div className="panel-item-sub">Cloud kitchen platform</div>
                                    </div>
                                </div>
                                <span className="panel-tag tag-build">Build</span>
                            </div>
                            <div className="panel-item">
                                <div className="panel-item-left">
                                    <div className="panel-item-ico">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M8 13V5" stroke="#F03F7E" strokeWidth="1.3" strokeLinecap="round" />
                                            <path d="M8 9C8 9 5 7 5 4.5C6.5 4.5 8 5.5 8 9Z" fill="rgba(240,63,126,0.12)" stroke="#F03F7E" strokeWidth="1.2" />
                                            <path d="M8 7C8 7 11 5.5 11 3C9.5 3 8 4.5 8 7Z" fill="rgba(240,63,126,0.12)" stroke="#F03F7E" strokeWidth="1.2" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="panel-item-name">PanenDirect</div>
                                        <div className="panel-item-sub">Farm-to-table supply</div>
                                    </div>
                                </div>
                                <span className="panel-tag tag-scale">Scale</span>
                            </div>
                            <div className="panel-item">
                                <div className="panel-item-left">
                                    <div className="panel-item-ico">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M8 2L4 8.5C4 11 5.8 13 8 13C10.2 13 12 11 12 8.5L8 2Z" stroke="#FC7755" strokeWidth="1.3" fill="rgba(252,119,85,0.1)" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="panel-item-name">SeggarID</div>
                                        <div className="panel-item-sub">Consumer beverage brand</div>
                                    </div>
                                </div>
                                <span className="panel-tag tag-seed">Seed</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
