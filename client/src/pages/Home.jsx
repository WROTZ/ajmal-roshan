export default function Home() {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-800">

        {/* HERO SECTION */}
        <section className="hero-bg text-white py-24">
            <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                Potent Marine Services L.L.C-FZ
            </h1>

            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-white/90">
                Marine Spare Parts Trading, Import & Export, and Professional
                Commercial Documentation for Global Shipping.
            </p>

            <div className="flex justify-center gap-4">
                <a
                href="/contact"
                className="btn-accent"
                >
                Contact Us
                </a>

                <a
                href="/services"
                className="btn-primary"
                >
                Our Services
                </a>
            </div>
            </div>
        </section>

        {/* SERVICES SECTION */}
        <section className="py-20">
            <div className="container">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-3">
                Our Services
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                High-quality marine spare parts, shipping documentation,
                and global logistics support.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="feature-card feat-accent-1">
                <div className="feature-icon" aria-hidden>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <circle cx="12" cy="12" r="3.2" fill="white" opacity="0.95" />
                        <g stroke="white" strokeWidth="1.2" strokeLinecap="round">
                            <path d="M12 3v2" />
                            <path d="M12 19v2" />
                            <path d="M3 12h2" />
                            <path d="M19 12h2" />
                            <path d="M5 5l1.4 1.4" />
                            <path d="M17.6 17.6L19 19" />
                            <path d="M17.6 6.4L19 5" />
                            <path d="M5 19l1.4-1.4" />
                        </g>
                    </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                    Marine Spare Parts
                </h3>
                <p className="text-gray-600">
                    Genuine and OEM spare parts for ships, engines, generators,
                    and gearboxes.
                </p>
                </div>

                <div className="feature-card feat-accent-2">
                <div className="feature-icon" aria-hidden>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path d="M3 14c4 0 6-3 10-3s6 3 10 3v3H3v-3z" fill="white" opacity="0.95" />
                        <rect x="6" y="6" width="6" height="4" rx="0.5" fill="white" opacity="0.95" />
                        <path d="M12 6v-2" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                    Import & Export
                </h3>
                <p className="text-gray-600">
                    CIF / FOB shipping support and compliant documentation
                    for international trade.
                </p>
                </div>

                <div className="feature-card feat-accent-3">
                <div className="feature-icon" aria-hidden>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <rect x="6" y="3" width="10" height="18" rx="1" fill="white" opacity="0.95" />
                        <path d="M9 7h6M9 11h6M9 15h4" stroke="#08304a" strokeWidth="1" strokeLinecap="round" />
                        <path d="M15 3v4h4" stroke="#08304a" strokeWidth="1" strokeLinecap="round" />
                    </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                    Invoice & Packing Lists
                </h3>
                <p className="text-gray-600">
                    Admin-only invoice and packing list generator with
                    print-ready PDFs.
                </p>
                </div>
            </div>
            </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="testimonials py-20">
            <div className="container">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-3">
                Trusted by Global Partners
                </h2>
                <p className="text-gray-600">
                We work with international shipping companies and traders.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="testimonial">
                <strong>Global Shipping Ltd.</strong>
                <p className="text-gray-600 mt-3">
                    “Fast, reliable supply of marine parts with excellent
                    documentation support.”
                </p>
                </div>

                <div className="testimonial">
                <strong>Oceanic Traders</strong>
                <p className="text-gray-600 mt-3">
                    “Their invoice and packing PDFs saved us hours during
                    customs clearance.”
                </p>
                </div>

                <div className="testimonial">
                <strong>Harbor Logistics</strong>
                <p className="text-gray-600 mt-3">
                    “Responsive team and accurate parts sourcing — highly
                    recommended.”
                </p>
                </div>
            </div>
            </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="py-16 text-center">
            <div className="container">
            <h2 className="text-3xl font-bold mb-4">
            Reliable Marine Trading & Documentation
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Trusted by international clients for accurate commercial invoices,
            packing lists, and shipping compliance.
            </p>

            <a
            href="/contact"
            className="btn-accent"
            >
            Contact Us
            </a>
            </div>
        </section>

        </div>
    );
}
