import Link from 'next/link';
import { Facebook, Instagram, Twitter, Send } from 'lucide-react';

export function Footer() {
    return (
        <footer className="border-t-2 border-white bg-black text-white">
            {/* Top Grid Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b-2 border-white">
                {/* Brand Column */}
                <div className="p-8 border-b-2 md:border-b-0 md:border-r-2 border-white flex flex-col justify-between h-full min-h-[300px] hover:bg-surface transition-colors">
                    <div>
                        <h2 className="text-5xl font-display font-bold uppercase italic tracking-tighter mb-4 text-transparent stroke-white" style={{ WebkitTextStroke: '2px white' }}>
                            Concept<span className="text-primary" style={{ WebkitTextStroke: '0px' }}>.</span>
                        </h2>
                        <p className="font-mono text-sm text-gray-400 max-w-[200px]">
                            REDEFINING DIGITAL COMMERCE /// EST 2024
                        </p>
                    </div>
                    <div className="font-mono text-xs text-gray-500 uppercase mt-12">
                        San Francisco, CA<br />
                        District 9
                    </div>
                </div>

                {/* Newsletter Column */}
                <div className="p-8 border-b-2 md:border-b-0 lg:border-r-2 border-white flex flex-col justify-center hover:bg-surface transition-colors">
                    <h3 className="font-display text-2xl uppercase mb-6">Stay in the loop</h3>
                    <div className="flex flex-col gap-4">
                        <input
                            type="email"
                            placeholder="EMAIL ADDRESS"
                            className="bg-transparent border-2 border-white p-4 font-mono text-sm placeholder:text-gray-600 focus:outline-none focus:border-primary focus:text-primary transition-all"
                        />
                        <button className="bg-white text-black font-display font-bold uppercase p-4 hover:bg-primary hover:text-black transition-colors flex justify-between items-center group">
                            Subscribe
                            <Send size={18} className="transform group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* Links Column */}
                <div className="p-8 border-b-2 md:border-b-0 md:border-r-2 border-white flex flex-col justify-between hover:bg-surface transition-colors">
                    <div className="flex flex-col gap-2">
                        {['Shop', 'About', 'Journal', 'Contact'].map((item) => (
                            <Link key={item} href="#" className="font-mono text-lg uppercase hover:text-primary hover:translate-x-2 transition-all w-fit">
                                {`> ${item}`}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Socials Column */}
                <div className="p-8 flex flex-col justify-center items-center gap-8 hover:bg-surface transition-colors">
                    <div className="flex gap-6">
                        {[Instagram, Twitter, Facebook].map((Icon, i) => (
                            <a key={i} href="#" className="group border-2 border-white p-3 hover:bg-primary hover:border-primary transition-all active:scale-95">
                                <Icon size={24} className="text-white group-hover:text-black transition-colors" strokeWidth={1.5} />
                            </a>
                        ))}
                    </div>
                    <p className="font-mono text-xs text-center text-gray-500">
                        FOLLOW US FOR EXCLUSIVE DROPS
                    </p>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="flex flex-col md:flex-row justify-between items-center p-4 font-mono text-xs text-gray-500 uppercase">
                <p>&copy; 2024 CONCEPT DIGITAL /// ALL RIGHTS RESERVED</p>
                <div className="flex gap-4 mt-2 md:mt-0">
                    <Link href="#" className="hover:text-white">Privacy Policy</Link>
                    <span>///</span>
                    <Link href="#" className="hover:text-white">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}
