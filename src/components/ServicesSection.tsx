import { Service } from "@/sanity/queries";

// Fallback si Sanity n'est pas encore configuré
const FALLBACK_SERVICES: Service[] = [
  { _id: "1", titre: "Développement Logiciel", description: "Solutions applicatives scalables conçues avec les dernières piles technologiques pour répondre à vos défis métiers les plus complexes.", icone: "developer_mode", ordre: 1 },
  { _id: "2", titre: "Consulting IT", description: "Alignement de votre infrastructure technologique avec vos objectifs stratégiques pour maximiser votre retour sur investissement.", icone: "strategy", ordre: 2 },
  { _id: "3", titre: "Coaching et Formation", description: "Accompagnement de vos équipes techniques vers l'autonomie et l'adoption des meilleures pratiques agiles et DevOps.", icone: "groups", ordre: 3 },
  { _id: "4", titre: "Intelligence Artificielle", description: "Intégration de solutions d'IA générative et d'apprentissage automatique pour optimiser vos processus métiers.", icone: "neurology", ordre: 4 },
];

type Props = {
  services: Service[];
};

export default function ServicesSection({ services }: Props) {
  const items = services.length > 0 ? services : FALLBACK_SERVICES;

  return (
    <section className="py-32 bg-white scroll-mt-20" id="expertise">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--color-on-surface)] mb-6">
            Expertise de Pointe
          </h2>
          <div className="w-20 h-1.5 bg-[var(--color-primary)] rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((service) => (
            <div
              key={service._id}
              className="group p-10 rounded-xl bg-slate-50 border border-transparent hover:border-[var(--color-primary)]/20 hover:bg-white transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-xl bg-[var(--color-primary)] flex items-center justify-center mb-8 text-white">
                <span className="material-symbols-outlined text-3xl">
                  {service.icone}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[var(--color-on-surface)]">
                {service.titre}
              </h3>
              <p className="text-[var(--color-on-surface-variant)] leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="flex items-center text-[var(--color-primary)] font-bold gap-2 cursor-pointer group-hover:gap-3 transition-all">
                Explorer{" "}
                <span className="material-symbols-outlined">arrow_forward</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
