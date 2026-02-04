export default function AboutPage() {
    return (
        <div className="min-h-screen border-t-2 border-white">
            {/* Hero Section */}
            <section className="border-b-2 border-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 border border-primary px-3 py-1 mb-8 bg-primary/10">
                            <span className="w-2 h-2 bg-primary rounded-none animate-pulse"></span>
                            <span className="text-primary font-mono text-xs font-bold uppercase tracking-widest">
                                Sobre Nós
                            </span>
                        </div>

                        <h1 className="text-6xl sm:text-8xl lg:text-9xl font-display font-bold uppercase leading-[0.8] tracking-tighter text-white mb-12">
                            Concept<br />
                            <span className="text-transparent stroke-white" style={{ WebkitTextStroke: '2px white' }}>Digital</span><br />
                            Store
                        </h1>

                        <p className="text-xl text-gray-300 leading-relaxed max-w-2xl font-sans border-l-2 border-primary pl-6">
                            Somos uma loja digital de vanguarda, redefinindo os limites do comércio eletrônico com design ousado e experiências imersivas. Nossa missão é trazer produtos exclusivos com uma estética que rompe com o convencional.
                        </p>
                    </div>
                </div>
            </section>

            {/* Values Grid */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {[
                    {
                        title: 'Autenticidade',
                        desc: 'Produtos 100% autênticos e verificados. Trabalhamos apenas com fornecedores certificados.',
                        icon: '01'
                    },
                    {
                        title: 'Design Radical',
                        desc: 'Rejeitamos o comum. Nossa identidade visual é uma declaração contra a mesmice digital.',
                        icon: '02'
                    },
                    {
                        title: 'Qualidade Premium',
                        desc: 'Cada peça é selecionada com critérios rigorosos de qualidade e design.',
                        icon: '03'
                    },
                    {
                        title: 'Exclusividade',
                        desc: 'Drops limitados e coleções especiais para quem valoriza raridade.',
                        icon: '04'
                    },
                    {
                        title: 'Sustentabilidade',
                        desc: 'Compromisso com práticas sustentáveis e fornecedores responsáveis.',
                        icon: '05'
                    },
                    {
                        title: 'Experiência Digital',
                        desc: 'Uma jornada de compra que desafia as convenções do e-commerce tradicional.',
                        icon: '06'
                    }
                ].map((value, i) => (
                    <div key={i} className="group border-b-2 border-r-2 border-white p-8 lg:p-12 hover:bg-surface transition-colors min-h-[300px] flex flex-col">
                        <div className="font-mono text-5xl font-bold text-primary mb-6">{value.icon}</div>
                        <h3 className="text-2xl font-display font-bold uppercase mb-4 text-white">{value.title}</h3>
                        <p className="text-gray-400 font-sans leading-relaxed flex-1">{value.desc}</p>
                    </div>
                ))}
            </section>

            {/* Team / Manifesto */}
            <section className="border-t-2 border-white">
                <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2">
                    {/* Text */}
                    <div className="p-8 lg:p-16 border-r-2 border-white flex flex-col justify-center">
                        <h2 className="text-4xl font-display font-bold uppercase mb-6">Nosso Manifesto</h2>
                        <div className="space-y-4 text-gray-300 font-sans leading-relaxed">
                            <p>
                                O digital não precisa ser suave. Ele pode ser cru, direto, industrial.
                                Nós rejeitamos gradientes suaves e cantos arredondados em favor de linhas nítidas e contrastes fortes.
                            </p>
                            <p>
                                Cada produto que oferecemos é uma afirmação. Cada página que desenhamos é uma ruptura.
                                Acreditamos que o comércio digital merece mais personalidade, mais caráter, mais audácia.
                            </p>
                            <p className="font-bold text-white">
                                Bem-vindo ao futuro do varejo. Bem-vindo à Concept Digital Store.
                            </p>
                        </div>
                    </div>

                    {/* Visual Block */}
                    <div className="relative min-h-[500px] bg-[#111] border-b-2 lg:border-b-0 border-white overflow-hidden group">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center grayscale contrast-125"></div>
                        <div className="absolute inset-0 bg-black/30 bg-[linear-gradient(transparent_2px,_#000_2px)] bg-[size:100%_4px] pointer-events-none"></div>
                        <div className="absolute bottom-4 right-4 bg-primary text-black font-mono font-bold text-xs p-2">
                            FIG. 02 // MANIFESTO
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="border-t-2 border-white bg-black">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                    <h2 className="text-5xl font-display font-bold uppercase mb-8">Entre em Contato</h2>
                    <p className="text-gray-400 font-mono text-sm uppercase tracking-widest mb-12">
                        Dúvidas, Parcerias ou Sugestões
                    </p>
                    <a
                        href="mailto:contato@conceptdigital.com"
                        className="inline-flex items-center gap-4 bg-white text-black px-12 py-6 font-display font-bold uppercase text-xl hover:bg-primary transition-colors"
                    >
                        contato@conceptdigital.com
                    </a>
                </div>
            </section>
        </div>
    );
}
