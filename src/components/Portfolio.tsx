import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ image, title, category }: { image: string, title: string, category: string }) => (
    <div className="group relative rounded-xl overflow-hidden bg-steelGray aspect-[4/3]">
        <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
            <span className="text-neonTeal text-sm font-bold uppercase tracking-wider mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">{category}</span>
            <h3 className="text-2xl font-bold text-white mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">{title}</h3>
            <div className="flex gap-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-300">
                <button className="p-2 bg-neonPurple/20 text-neonPurple rounded-full hover:bg-neonPurple hover:text-white transition-colors">
                    <ExternalLink size={20} />
                </button>
                <button className="p-2 bg-white/10 text-white rounded-full hover:bg-white hover:text-graphite transition-colors">
                    <Github size={20} />
                </button>
            </div>
        </div>
    </div>
);

export default function Portfolio() {
    // Using the same generated image for demo purposes since we hit rate limits, 
    // but structured to look distinct
    const projects = [
        {
            title: "NeoBank Dashboard",
            category: "Fintech / UI Design",
            image: "https://static.lumi.new/6b/6b12c72a16f52b13b86f9b07d389f442.png"
        },
        {
            title: "TravelGo App",
            category: "Mobile Development",
            image: "https://static.lumi.new/6b/6b12c72a16f52b13b86f9b07d389f442.png"
        },
        {
            title: "DataViz AI Platform",
            category: "Data Science / Web App",
            image: "https://static.lumi.new/6b/6b12c72a16f52b13b86f9b07d389f442.png"
        }
    ];

    return (
        <section id="portfolio" className="py-24 bg-[#161616]">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <h2 className="text-neonPurple font-bold tracking-widest uppercase text-sm mb-4">Portfólio</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-white">Projetos <span className="text-neonTeal">Recentes</span></h3>
                    </div>
                    <a href="#" className="text-gray-400 hover:text-white flex items-center gap-2 transition-colors pb-2 border-b border-transparent hover:border-neonPurple">
                        Ver todos os projetos <ExternalLink size={16} />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
