export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div>
                        <h3 className="font-bold site-title text-white">Potent Marine Services</h3>
                        <p className="mt-2">Reliable marine spare parts trading and shipping documentation.</p>
                    </div>
                    <div className="mt-4 md:mt-0">
                        <a href="/contact" className="mr-4">Contact</a>
                        <a href="/about">About</a>
                    </div>
                </div>
                <div className="mt-6 text-sm">© {new Date().getFullYear()} Potent Marine Services. All rights reserved.</div>
            </div>
        </footer>
    );
}
