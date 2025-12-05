import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-graphite relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neonPurple/10 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Contact Info */}
                    <div>
                        <h2 className="text-neonTeal font-bold tracking-widest uppercase text-sm mb-4">Entre em Contato</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Vamos criar algo <br />incrível <span className="text-neonPurple">juntos?</span></h3>
                        <p className="text-gray-400 text-lg mb-12 leading-relaxed">
                            Tem um projeto em mente? Estamos prontos para transformar sua visão em realidade digital.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 rounded-full bg-steelGray flex items-center justify-center shrink-0 text-neonPurple">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Email</h4>
                                    <p className="text-gray-400">contato@intraseek.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 rounded-full bg-steelGray flex items-center justify-center shrink-0 text-neonTeal">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Telefone / WhatsApp</h4>
                                    <p className="text-gray-400">+55 (11) 99999-9999</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 rounded-full bg-steelGray flex items-center justify-center shrink-0 text-white">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Localização</h4>
                                    <p className="text-gray-400">São Paulo, SP - Brasil</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form className="bg-steelGray/50 backdrop-blur-sm p-8 md:p-10 rounded-3xl border border-white/5 shadow-2xl">
                        <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-gray-400 text-sm font-bold mb-2 uppercase tracking-wider">Nome</label>
                                    <input
                                        type="text"
                                        className="w-full bg-graphite border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neonPurple transition-colors"
                                        placeholder="Seu nome"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-400 text-sm font-bold mb-2 uppercase tracking-wider">Email</label>
                                    <input
                                        type="email"
                                        className="w-full bg-graphite border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neonPurple transition-colors"
                                        placeholder="seu@email.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-400 text-sm font-bold mb-2 uppercase tracking-wider">Assunto</label>
                                <select className="w-full bg-graphite border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neonPurple transition-colors">
                                    <option>Selecione um assunto</option>
                                    <option>Orçamento de Site</option>
                                    <option>Desenvolvimento de App</option>
                                    <option>Design / UI UX</option>
                                    <option>Outros</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-gray-400 text-sm font-bold mb-2 uppercase tracking-wider">Mensagem</label>
                                <textarea
                                    rows={4}
                                    className="w-full bg-graphite border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neonPurple transition-colors resize-none"
                                    placeholder="Conte-nos sobre seu projeto..."
                                ></textarea>
                            </div>

                            <button
                                type="button"
                                className="w-full bg-gradient-to-r from-neonPurple to-darkPurple hover:from-neonTeal hover:to-emerald-500 text-white font-bold py-4 rounded-lg shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group"
                            >
                                Enviar Mensagem <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </section>
    );
}
