import React from 'react';

const Services: React.FC = () => {
    return (
        <section id="services">
            <div className="services-top">
                <div className="reveal">
                    <div className="section-eyebrow">What We Bring</div>
                    <h2 className="stitle">Semua yang kamu<br />butuhkan untuk scale</h2>
                </div>
                <p className="reveal">Kami bukan sekadar investor — kami embedded partner yang terjun langsung bersama founders dari hari pertama.</p>
            </div>

            <div className="services-grid">
                <div className="svc-card reveal">
                    <div className="svc-icon">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                            <circle cx="11" cy="11" r="3" stroke="#F95C2E" strokeWidth="1.4" />
                            <path d="M11 2V5M11 17V20M2 11H5M17 11H20" stroke="#F95C2E" strokeWidth="1.4" strokeLinecap="round" />
                            <path d="M4.9 4.9L7 7M15 15L17.1 17.1M17.1 4.9L15 7M7 15L4.9 17.1" stroke="#F03F7E" strokeWidth="1.2" strokeLinecap="round" />
                        </svg>
                    </div>
                    <h3>Brand & Identity</h3>
                    <p>Naming, visual identity, hingga packaging — membangun brand F&B yang kuat dan memorable di pasar Indonesia.</p>
                </div>
                <div className="svc-card reveal">
                    <div className="svc-icon">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                            <path d="M4 11H18C18 15.4 14.9 19 11 19C7.1 19 4 15.4 4 11Z" stroke="#F95C2E" strokeWidth="1.4" fill="rgba(249,92,46,0.06)" />
                            <path d="M8 8C8 8 8.5 6 8 5" stroke="#F03F7E" strokeWidth="1.3" strokeLinecap="round" />
                            <path d="M11 8C11 8 11.5 6 11 5" stroke="#F03F7E" strokeWidth="1.3" strokeLinecap="round" />
                            <path d="M14 8C14 8 14.5 6 14 5" stroke="#F03F7E" strokeWidth="1.3" strokeLinecap="round" />
                            <path d="M8 15C9 16.2 10 16.8 11 16.8C12 16.8 13 16.2 14 15" stroke="rgba(249,92,46,0.5)" strokeWidth="1.2" strokeLinecap="round" />
                        </svg>
                    </div>
                    <h3>Product Development</h3>
                    <p>R&D menu, quality control, standarisasi resep, dan product innovation dengan pendekatan scalable.</p>
                </div>
                <div className="svc-card reveal">
                    <div className="svc-icon">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                            <rect x="3" y="14" width="3" height="5" rx="1" fill="rgba(249,92,46,0.12)" stroke="#F95C2E" strokeWidth="1.3" />
                            <rect x="9.5" y="10" width="3" height="9" rx="1" fill="rgba(249,92,46,0.12)" stroke="#F95C2E" strokeWidth="1.3" />
                            <rect x="16" y="5" width="3" height="14" rx="1" fill="rgba(249,92,46,0.12)" stroke="#F95C2E" strokeWidth="1.3" />
                            <path d="M4.5 13L11 9L17.5 4" stroke="#F03F7E" strokeWidth="1.3" strokeLinecap="round" />
                        </svg>
                    </div>
                    <h3>Digital & Marketing</h3>
                    <p>Strategi pemasaran digital, konten, dan growth hacking khusus untuk bisnis F&B di pasar Indonesia.</p>
                </div>
                <div className="svc-card reveal">
                    <div className="svc-icon">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                            <rect x="2" y="7" width="12" height="8" rx="1.5" stroke="#F95C2E" strokeWidth="1.4" />
                            <path d="M14 9H17.5L20 12V15H14V9Z" stroke="#F95C2E" strokeWidth="1.4" strokeLinejoin="round" />
                            <circle cx="5.5" cy="16.5" r="1.5" stroke="#F03F7E" strokeWidth="1.3" />
                            <circle cx="17" cy="16.5" r="1.5" stroke="#F03F7E" strokeWidth="1.3" />
                            <path d="M6 10H10" stroke="rgba(249,92,46,0.4)" strokeWidth="1.2" strokeLinecap="round" />
                        </svg>
                    </div>
                    <h3>Supply Chain</h3>
                    <p>Akses ke jaringan supplier terpercaya, optimasi rantai pasok, dan solusi logistik untuk menjaga margin tetap sehat.</p>
                </div>
                <div className="svc-card reveal">
                    <div className="svc-icon">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                            <circle cx="11" cy="11" r="8" stroke="#F95C2E" strokeWidth="1.4" />
                            <path d="M11 7V8M11 14V15" stroke="#F95C2E" strokeWidth="1.4" strokeLinecap="round" />
                            <path d="M8.5 9.5C8.5 8.7 9.2 8 11 8C12.8 8 13.5 8.8 13.5 9.5C13.5 10.8 11 11.2 11 12.5C11 13.2 11.5 14 13 14" stroke="#F03F7E" strokeWidth="1.3" strokeLinecap="round" />
                        </svg>
                    </div>
                    <h3>Finance & Legal</h3>
                    <p>Pembukuan, proyeksi keuangan, dan advisory hukum — dari company formation hingga fundraising Series A.</p>
                </div>
                <div className="svc-card reveal">
                    <div className="svc-icon">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                            <circle cx="11" cy="8" r="3" stroke="#F95C2E" strokeWidth="1.4" />
                            <path d="M5 18C5 15.2 7.7 13 11 13C14.3 13 17 15.2 17 18" stroke="#F95C2E" strokeWidth="1.4" strokeLinecap="round" />
                            <circle cx="17.5" cy="7.5" r="2" stroke="#F03F7E" strokeWidth="1.2" />
                            <path d="M19.5 15.5C19.5 13.8 18.5 12.5 17.5 12.5" stroke="#F03F7E" strokeWidth="1.2" strokeLinecap="round" />
                        </svg>
                    </div>
                    <h3>Talent & Operations</h3>
                    <p>Rekrutmen, training, dan SOP operasional agar bisnis F&B kamu bisa scale tanpa kehilangan kualitas.</p>
                </div>
            </div>
        </section>
    );
};

export default Services;
