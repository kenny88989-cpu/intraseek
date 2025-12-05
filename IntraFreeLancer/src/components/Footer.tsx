import React from 'react';
import { Instagram, Linkedin, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[#0A0A0A] pt-20 pb-10 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                    {/* Brand */}
                    <div className="md:col-span-2">
                        <a href="#" className="text-2xl font-bold tracking-tighter mb-6 inline-block">
                            <span className="text-white">Intra</span>
                            <span className="text-neonPurple">Seek</span>
                            <span className="text-neonTeal">.</span>
                        </a>
                        <p className="text-gray-400 max-w-sm leading-relaxed mb-8">
                            Impulsionando negócios através de soluções digitais inovadoras. Design de alta qualidade e desenvolvimento robusto para o seu sucesso.
                        </p>
                        <div className="flex gap-4">
                            {[Instagram, Linkedin, Twitter, Facebook].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-neonPurple hover:text-white transition-all duration-300">
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links 1 */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Navegação</h4>
                        <ul className="space-y-4">
                            {['Início', 'Serviços', 'Portfólio', 'Sobre Nós', 'Contato'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-400 hover:text-neonTeal transition-colors text-sm">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Links 2 */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Serviços</h4>
                        <ul className="space-y-4">
                            {['Web Design', 'Desenvolvimento Mobile', 'Marketing Digital', 'Consultoria Tech', 'SEO'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-400 hover:text-neonTeal transition-colors text-sm">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} IntraSeek. Todos os direitos reservados.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Termos de Uso</a>
                        <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacidade</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
