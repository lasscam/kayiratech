import { Solution } from "@/sanity/queries";

const TAG_COLORS: Record<string, string> = {
  SaaS: "bg-blue-100 text-blue-700",
  IA: "bg-purple-100 text-purple-700",
  DevOps: "bg-orange-100 text-orange-700",
  Cloud: "bg-sky-100 text-sky-700",
  Mobile: "bg-green-100 text-green-700",
  API: "bg-slate-100 text-slate-700",
};

type Props = {
  solutions: Solution[];
};

export default function SolutionsSection({ solutions }: Props) {
  return (
    <section className="pt-14 pb-4 bg-slate-50 scroll-mt-20" id="solutions">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-4">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--color-on-surface)] mb-6">
            Nos Solutions
          </h2>
          <div className="w-20 h-1.5 bg-[var(--color-primary)] rounded-full mb-6" />
          <p className="text-lg text-[var(--color-on-surface-variant)] max-w-2xl">
            Des produits logiciels imaginés pour simplifier, automatiser et transformer ce qui compte, conçus pour tous ceux qui veulent aller plus loin grâce à la technologie.
          </p>
        </div>

        {solutions.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="w-16 h-16 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-3xl text-[var(--color-primary)]">rocket_launch</span>
            </div>
            <h3 className="text-2xl font-bold text-[var(--color-on-surface)] mb-4">
              Nos solutions arrivent bientôt
            </h3>
            <p className="text-[var(--color-on-surface-variant)] max-w-md leading-relaxed">
              Nos équipes travaillent à la conception de solutions innovantes. Restez à l'affût.
            </p>
          </div>
        ) : (
          <div className={`grid gap-8 ${solutions.length === 1 ? "grid-cols-1 max-w-md" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}`}>
            {solutions.map((solution) => (
              <div
                key={solution._id}
                className="group flex flex-col p-10 rounded-xl bg-white border border-slate-100 hover:border-[var(--color-primary)]/20 hover:shadow-lg transition-all duration-500 hover:-translate-y-2"
              >
                <div className="mb-6">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                    Disponible
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-[var(--color-on-surface)]">
                  {solution.titre}
                </h3>

                <p className="text-[var(--color-on-surface-variant)] leading-relaxed mb-6 flex-1">
                  {solution.description}
                </p>

                {solution.tags && solution.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-8">
                    {solution.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-xs font-semibold px-2.5 py-1 rounded-full ${TAG_COLORS[tag] ?? "bg-slate-100 text-slate-700"}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {solution.lien && (
                  <a
                    href={solution.lien}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-[var(--color-primary)] font-bold gap-2 group-hover:gap-3 transition-all"
                  >
                    En savoir plus
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
