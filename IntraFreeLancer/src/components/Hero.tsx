import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://static.lumi.new/d8/d8f8c0e6105985ac8cfa5980d53631dd.png"
                    alt="Background"
                    className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-graphite/80 via-graphite/90 to-graphite"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 text-center">
                <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-neonTeal/30 bg-neonTeal/10 backdrop-blur-sm">
                    <span className="text-neonTeal text-xs font-bold tracking-[0.2em] uppercase">Soluções Digitais Premium</span>
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight tracking-tight">
                    Transformamos Ideias <br />
                    em <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonPurple to-neonTeal animate-pulse">Realidade Digital</span>
                </h1>

                <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
                    A <span className="text-white font-semibold">IntraSeek</span> é especializada em desenvolvimento web, design e estratégias digitais de alto impacto para elevar o nível do seu negócio.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <a
                        href="#contact"
                        className="group relative px-8 py-4 bg-neonPurple text-white font-bold rounded-full overflow-hidden shadow-[0_0_20px_rgba(155,92,255,0.3)] hover:shadow-[0_0_40px_rgba(155,92,255,0.6)] transition-all duration-300"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Iniciar Projeto <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    </a>

                    <a
                        href="#portfolio"
                        className="px-8 py-4 text-white border border-white/20 hover:bg-white/5 hover:border-neonTeal hover:text-neonTeal rounded-full transition-all duration-300 font-medium"
                    >
                        Ver Portfólio
                    </a>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-500">
                <ChevronDown size={32} />
            </div>
        </section>
    );
}
