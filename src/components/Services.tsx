import React from 'react';
import { Code, Palette, Smartphone, Rocket, Globe, ShieldCheck } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
    <div className="group p-8 rounded-2xl bg-steelGray/50 border border-white/5 hover:border-neonPurple/50 hover:bg-steelGray transition-all duration-500 hover:-translate-y-2">
        <div className="w-14 h-14 rounded-xl bg-darkPurple/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 group-hover:shadow-[0_0_20px_rgba(155,92,255,0.4)]">
            <Icon size={28} className="text-neonPurple group-hover:text-neonTeal transition-colors duration-300" />
        </div>
        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-neonTeal transition-colors">{title}</h3>
        <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">{description}</p>
    </div>
);

export default function Services() {
    const services = [
        {
            icon: Globe,
            title: "Desenvolvimento Web",
            description: "Sites responsivos, rápidos e otimizados para SEO. Landing pages que convertem e plataformas robustas."
        },
        {
            icon: Palette,
            title: "UI/UX Design",
            description: "Interfaces modernas e intuitivas que encantam usuários e fortalecem a identidade da sua marca."
        },
        {
            icon: Smartphone,
            title: "Apps Mobile",
            description: "Aplicativos nativos e híbridos para iOS e Android com performance excepcional e design fluido."
        },
        {
            icon: Code,
            title: "Sistemas Personalizados",
            description: "Soluções de software sob medida para resolver os desafios específicos do seu negócio."
        },
        {
            icon: Rocket,
            title: "Marketing Digital",
            description: "Estratégias de tráfego e posicionamento para colocar sua empresa no topo das buscas."
        },
        {
            icon: ShieldCheck,
            title: "Segurança & Manutenção",
            description: "Monitoramento constante e atualizações para manter seu projeto seguro e operante."
        }
    ];

    return (
        <section id="services" className="py-24 bg-graphite relative">
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-neonPurple/5 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-neonTeal/5 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-neonPurple font-bold tracking-widest uppercase text-sm mb-4">Nossos Serviços</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">O que fazemos de <span className="text-neonTeal">melhor</span></h3>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Combinamos tecnologia de ponta com design estratégico para entregar resultados excepcionais.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
}
