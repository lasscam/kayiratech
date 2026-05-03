import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getServiceBySlug, getAllServiceSlugs, getSiteConfig } from "@/sanity/queries";

const FALLBACK_SERVICES: Record<string, {
  accroche: string;
  description_longue: string;
  points: string[];
  cibles: string[];
}> = {
  "developpement-logiciel": {
    accroche: "Des solutions applicatives sur-mesure, conçues pour durer.",
    description_longue:
      "Nous concevons et développons des applications web, mobiles et backend adaptées à vos besoins métiers. De l'architecture initiale au déploiement en production, nous accompagnons chaque étape avec rigueur et expertise.",
    points: [
      "Applications web et mobiles sur-mesure",
      "APIs REST et GraphQL",
      "Microservices et architectures distribuées",
      "Revue de code et refactoring",
      "Tests automatisés et CI/CD",
      "Maintenance et évolution des systèmes existants",
    ],
    cibles: [
      "Startups en phase de croissance",
      "PME souhaitant moderniser leur stack",
      "Équipes techniques cherchant un renfort expert",
    ],
  },
  "consulting-it": {
    accroche: "Alignez votre infrastructure IT avec vos ambitions stratégiques.",
    description_longue:
      "Nos consultants analysent votre environnement technologique et vous proposent une feuille de route claire pour maximiser votre ROI. Nous intervenons sur l'architecture, la gouvernance IT, la gestion des fournisseurs et la transformation digitale.",
    points: [
      "Audit complet de l'infrastructure existante",
      "Définition de la roadmap technologique",
      "Sélection et gestion des fournisseurs IT",
      "Gouvernance et bonnes pratiques",
      "Accompagnement à la transformation digitale",
      "vCTO externalisé (directeur technique à temps partagé)",
    ],
    cibles: [
      "Dirigeants sans direction technique interne",
      "PME en croissance rapide",
      "Organisations en transformation digitale",
    ],
  },
  "coaching-et-formation": {
    accroche: "Montez en compétence. Devenez autonomes.",
    description_longue:
      "Nous accompagnons vos équipes techniques et managériales vers l'excellence opérationnelle. Nos formations et coachings sont adaptés à votre contexte, vos outils et vos objectifs concrets.",
    points: [
      "Coaching agile (Scrum, Kanban, SAFe)",
      "Formation DevOps et culture d'ingénierie",
      "Ateliers sur-mesure en équipe",
      "Accompagnement des leads techniques",
      "Onboarding de nouvelles recrues",
      "Audit de maturité agile",
    ],
    cibles: [
      "Équipes de développement en transition agile",
      "Managers IT souhaitant structurer leurs équipes",
      "Entreprises adoptant le DevOps",
    ],
  },
  "intelligence-artificielle": {
    accroche: "Intégrez l'IA là où elle crée de la valeur réelle.",
    description_longue:
      "Nous vous aidons à identifier les opportunités concrètes d'intégration de l'intelligence artificielle dans vos processus métiers. De l'automatisation des tâches répétitives à l'analyse prédictive, nous construisons des solutions pragmatiques et mesurables.",
    points: [
      "Audit des processus automatisables",
      "Intégration d'IA générative (LLM, RAG)",
      "Tableaux de bord analytiques et prédictifs",
      "Automatisation de workflows métiers",
      "Formation de vos équipes à l'IA",
      "Conformité et éthique de l'IA",
    ],
    cibles: [
      "PME cherchant à gagner en productivité",
      "Équipes métiers avec des tâches répétitives",
      "Organisations voulant exploiter leurs données",
    ],
  },
};

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const slugs = await getAllServiceSlugs().catch(() => []);
  const fallbackSlugs = Object.keys(FALLBACK_SERVICES).map((s) => ({ slug: s }));
  const all = [...slugs, ...fallbackSlugs];
  const unique = Array.from(new Map(all.map((s) => [s.slug, s])).values());
  return unique;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug).catch(() => null);
  const titre = service?.titre ?? FALLBACK_SERVICES[slug] ? slug.replace(/-/g, " ") : slug;
  return {
    title: `${service?.titre ?? titre} — Kayiratech`,
    description: service?.accroche ?? FALLBACK_SERVICES[slug]?.accroche,
  };
}

export const revalidate = 60;

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const [service, config] = await Promise.all([
    getServiceBySlug(slug).catch(() => null),
    getSiteConfig().catch(() => null),
  ]);

  const fallback = FALLBACK_SERVICES[slug];
  if (!service && !fallback) notFound();

  const titre = service?.titre ?? slug.replace(/-/g, " ");
  const icone = service?.icone ?? "settings";
  const accroche = service?.accroche ?? fallback?.accroche;
  const description = service?.description ?? "";
  const description_longue = service?.description_longue ?? fallback?.description_longue;
  const points = service?.points?.length ? service.points : fallback?.points ?? [];
  const cibles = service?.cibles?.length ? service.cibles : fallback?.cibles ?? [];

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        rel="stylesheet"
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-24 bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <div className="w-16 h-16 rounded-xl bg-[var(--color-primary)] flex items-center justify-center mb-8 text-white">
            <span className="material-symbols-outlined text-3xl">{icone}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-800 mb-6 tracking-tight">
            {titre}
          </h1>
          {accroche && (
            <p className="text-xl text-slate-500 leading-relaxed max-w-2xl">{accroche}</p>
          )}
        </div>
      </section>

      {/* Description */}
      {(description || description_longue) && (
        <section className="py-20 bg-slate-50">
          <div className="max-w-4xl mx-auto px-8">
            <p className="text-lg text-slate-600 leading-relaxed">
              {description_longue ?? description}
            </p>
          </div>
        </section>
      )}

      {/* Ce qu'on offre */}
      {points.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-10">Ce qu'on offre</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {points.map((point, i) => (
                <li key={i} className="flex items-start gap-3 p-5 rounded-xl bg-slate-50">
                  <span className="material-symbols-outlined text-[var(--color-primary)] mt-0.5">
                    check_circle
                  </span>
                  <span className="text-slate-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Pour qui */}
      {cibles.length > 0 && (
        <section className="py-20 bg-slate-50">
          <div className="max-w-4xl mx-auto px-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-10">Pour qui</h2>
            <ul className="space-y-4">
              {cibles.map((cible, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-600">
                  <span className="material-symbols-outlined text-[var(--color-primary)]">
                    arrow_forward
                  </span>
                  {cible}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24 bg-[var(--color-primary)]">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Prêt à démarrer ?
          </h2>
          <p className="text-white/80 text-lg mb-10">
            Discutons de votre projet lors d'une consultation gratuite.
          </p>
          <a
            href="/#contact"
            className="inline-block bg-white text-[var(--color-primary)] font-bold px-10 py-4 rounded-xl hover:bg-slate-100 transition-all"
          >
            Contactez-nous
          </a>
        </div>
      </section>

      <Footer config={config} />
    </>
  );
}
