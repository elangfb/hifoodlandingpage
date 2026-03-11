import React from 'react';

const Process: React.FC = () => {
    return (
        <section className="process" id="process">
            <div className="process-top">
                <div className="process-top-left reveal">
                    <div className="section-eyebrow">Studio Process</div>
                    <h2 className="stitle">Dari ide ke exit,<br />bareng-bareng</h2>
                    <p>Kami all-in bersama founders — menggabungkan expertise, embedded resources, dan kapital untuk membangun bisnis F&B yang breakthrough.</p>
                </div>
                <a href="#contact" className="process-link reveal">Mulai bersama kami →</a>
            </div>

            <div className="process-steps">
                <div className="step-card reveal">
                    <div className="step-num">Step 01</div>
                    <div className="step-icon-wrap">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="8" stroke="#F95C2E" strokeWidth="1.5" />
                            <circle cx="12" cy="12" r="2" fill="#F95C2E" />
                            <path d="M12 4V6M12 18V20M4 12H6M18 12H20" stroke="#F95C2E" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M9 9L11 11M13 13L15 15" stroke="#F95C2E" strokeWidth="1.3" strokeLinecap="round" />
                        </svg>
                    </div>
                    <h3>Explore</h3>
                    <p>Validasi ide bersama tim kami — menguji asumsi, merancang model bisnis, dan menemukan peluang nyata di sektor F&B Indonesia.</p>
                    <div className="step-tags">
                        <span className="stag">Ideation</span>
                        <span className="stag">Validation</span>
                        <span className="stag">Sprint Week</span>
                        <span className="stag">Prototyping</span>
                    </div>
                </div>
                <div className="step-card reveal">
                    <div className="step-num">Step 02</div>
                    <div className="step-icon-wrap">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <rect x="4" y="14" width="16" height="4" rx="1.5" stroke="#F95C2E" strokeWidth="1.5" />
                            <rect x="6" y="10" width="12" height="4" rx="1.5" stroke="#F03F7E" strokeWidth="1.5" />
                            <rect x="8" y="6" width="8" height="4" rx="1.5" stroke="#FC7755" strokeWidth="1.5" />
                        </svg>
                    </div>
                    <h3>Build</h3>
                    <p>Gerak lebih cepat bersama kami. Kami dedikasikan tim resources untuk akselerasi dari konsep ke brand yang siap ke pasar.</p>
                    <div className="step-tags">
                        <span className="stag">Brand Creation</span>
                        <span className="stag">MVP Launch</span>
                        <span className="stag">Team Building</span>
                        <span className="stag">Go-to-Market</span>
                    </div>
                </div>
                <div className="step-card reveal">
                    <div className="step-num">Step 03</div>
                    <div className="step-icon-wrap">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M4 18L9 12L13 15L20 7" stroke="#F95C2E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M16 7H20V11" stroke="#F95C2E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <circle cx="4" cy="18" r="1.5" fill="#F03F7E" />
                            <circle cx="9" cy="12" r="1.5" fill="#F03F7E" />
                            <circle cx="13" cy="15" r="1.5" fill="#F03F7E" />
                        </svg>
                    </div>
                    <h3>Scale</h3>
                    <p>Fuel untuk tumbuh lebih jauh — dari fundraising hingga ekspansi regional, kami kombinasikan financing dengan advising strategis.</p>
                    <div className="step-tags">
                        <span className="stag">Fundraising</span>
                        <span className="stag">Network</span>
                        <span className="stag">Advising</span>
                        <span className="stag">M&A</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
