import Image from "next/image";
import { SiteConfig } from "@/sanity/queries";

type Props = {
  config: SiteConfig | null;
};

export default function Footer({ config }: Props) {
  const email = config?.email ?? "contact@kayiratech.com";
  const adresse = config?.adresse ?? "Montréal, Québec, Canada";

  return (
    <footer className="bg-slate-50 w-full pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-6">
          <div className="space-y-3">
            <a href="/" className="inline-block select-none">
              <Image
                src="/logo-kayiratech.png"
                alt="Kayiratech"
                width={100}
                height={40}
                className="object-contain mix-blend-multiply"
              />
            </a>
            <p className="text-sm text-slate-500 leading-relaxed">
              Architecture IT & transformation digitale de haute précision.
            </p>
          </div>
          <div className="flex gap-4">
            {config?.linkedin && (
              <a
                href={config.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[var(--color-primary)] shadow-sm hover:bg-[var(--color-primary)] hover:text-white transition-all"
              >
                <span className="material-symbols-outlined text-xl">share</span>
              </a>
            )}
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[var(--color-primary)] shadow-sm hover:bg-[var(--color-primary)] hover:text-white transition-all"
            >
              <span className="material-symbols-outlined text-xl">public</span>
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-[var(--color-on-surface)] font-bold mb-6">Navigation</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="/" className="text-slate-500 hover:text-[var(--color-primary)] transition-colors">Accueil</a></li>
            <li><a href="/#expertise" className="text-slate-500 hover:text-[var(--color-primary)] transition-colors">Services</a></li>
            <li><a href="/#about" className="text-slate-500 hover:text-[var(--color-primary)] transition-colors">À propos</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-[var(--color-on-surface)] font-bold mb-6">Légal</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="/privacy-policy" className="text-slate-500 hover:text-[var(--color-primary)] transition-colors">Politique de confidentialité</a></li>
            <li><a href="/terms-of-service" className="text-slate-500 hover:text-[var(--color-primary)] transition-colors">Conditions d'utilisation</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-[var(--color-on-surface)] font-bold mb-6">Contact</h4>
          <div className="text-sm text-slate-500 leading-relaxed space-y-1">
            <p>{adresse}</p>
            <a
              href={`mailto:${email}`}
              className="hover:text-[var(--color-primary)] transition-colors"
            >
              {email}
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 mt-20 pt-10 border-t border-slate-200">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-slate-500 opacity-80">
            © {new Date().getFullYear()} Kayiratech. All rights reserved.
          </p>
          <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">
            Made with precision
          </p>
        </div>
      </div>
    </footer>
  );
}
