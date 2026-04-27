import Image from "next/image";
import { SiteConfig } from "@/sanity/queries";

const FALLBACK_IMAGES = [
  { url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvd34a3_sDUIPdW2qBzH_UOJqr4oUin-5lVWr-WWfZU_5yAKqNBRlsIYO9gxnpJmf_7zDyxiYXgQ6sx8j4pEIlTSYoKNWJptPGmXzv3ruTkvz3d_kUb1EZt8RB4bY1JiYXdEukbdIvhtf5EX2M8DWzKvLnOwNiGnd-_kQCfTVjxUh_J0FwZvyqRPe7VS17tuwgJPea3lHyPXGAZU3-85h6WnHY0R0bqMi9gIlXTN0AFn_zuIhmYK0FwMeNIULKkhvfJ589D4Bueve9", alt: "Expert IT" },
  { url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBAd16c29dUkHKcXvR4ZKBiH6KdD_2n8GY9raiEMp2oqdzB1m6d--jHGzgdMzAE4kPw4iPQF7wCiDS2-lDlSBbh_F1-rOqsACOnkalppbp9KLaRnTkWYy94KJOHQBGgUpyAw5LpSUzfQWnba0_I4Ea_4OADOMdR9KDNqlqvGVV952NuxDuqmrDv_Tc9gYJpQUq48dhIc4PgTJjplllh3kPv0yPHzmgShmIyseX_2OOt6y6piQMOVRzKv9VxfoGKvs3wZrb50oQ5hSVi", alt: "Team collaboration" },
];

type Props = { config: SiteConfig | null };

export default function AboutSection({ config }: Props) {
  const images = config?.aboutImages?.length ? config.aboutImages : FALLBACK_IMAGES;
  return (
    <section className="py-40" id="about">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          {/* Images */}
          <div className="order-2 lg:order-1 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={images[0].url}
                    alt={images[0].alt ?? "Expert IT"}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="bg-[var(--color-primary)] p-6 rounded-xl text-white">
                  <div className="text-4xl font-bold mb-2">10+</div>
                  <div className="text-sm opacity-80 uppercase tracking-widest font-bold">
                    Ans d&apos;expérience
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={images[1]?.url ?? images[0].url}
                    alt={images[1]?.alt ?? "Team collaboration"}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[var(--color-on-surface)] leading-tight">
              Bâtir le futur par le{" "}
              <span className="text-[var(--color-primary)]">design structurel</span>.
            </h2>
            <p className="text-xl text-[var(--color-on-surface-variant)] leading-relaxed">
              Nous ne sommes pas de simples prestataires IT. Nous sommes vos
              partenaires architectes, dédiés à la création de systèmes qui ne
              se contentent pas de fonctionner, mais qui propulsent votre
              croissance.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)]">
                  <span className="material-symbols-outlined">lightbulb</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[var(--color-on-surface)]">
                    Innovation Continue
                  </h4>
                  <p className="text-[var(--color-on-surface-variant)]">
                    Une veille technologique permanente pour vous offrir le
                    meilleur de demain, aujourd&apos;hui.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)]">
                  <span className="material-symbols-outlined">verified</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[var(--color-on-surface)]">
                    Fiabilité &amp; Rigueur
                  </h4>
                  <p className="text-[var(--color-on-surface-variant)]">
                    La précision architecturale appliquée à chaque ligne de code
                    et chaque serveur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
