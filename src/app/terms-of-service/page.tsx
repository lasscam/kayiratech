import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getSiteConfig } from "@/sanity/queries";

export const metadata: Metadata = {
  title: "Conditions d'utilisation — Kayiratech",
  description: "Conditions d'utilisation du site web de Kayiratech.",
  robots: { index: true, follow: true },
};

export const revalidate = 3600;

export default async function TermsOfService() {
  const config = await getSiteConfig().catch(() => null);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        rel="stylesheet"
      />
      <Navbar />
      <main className="max-w-3xl mx-auto px-8 py-32">
        <h1 className="text-3xl font-black text-slate-800 mb-2">Conditions d'utilisation</h1>
        <p className="text-sm text-slate-400 mb-12">Dernière mise à jour : mai 2025</p>

        <section className="space-y-10 text-slate-600 leading-relaxed">
          <div>
            <h2 className="text-lg font-bold text-slate-800 mb-3">1. Acceptation des conditions</h2>
            <p>
              En accédant au site <strong>kayiratech.com</strong>, vous acceptez les présentes
              conditions d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas
              utiliser ce site.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-800 mb-3">2. Utilisation du site</h2>
            <p>Ce site est fourni à titre informatif pour présenter les services de Kayiratech. Vous vous engagez à :</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Ne pas utiliser ce site à des fins illégales ou non autorisées</li>
              <li>Ne pas tenter d'accéder aux systèmes ou données non destinés au public</li>
              <li>Ne pas transmettre de contenu malveillant via le formulaire de contact</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-800 mb-3">3. Propriété intellectuelle</h2>
            <p>
              Tout le contenu de ce site (textes, images, logo, design, code) est la propriété
              exclusive de Kayiratech ou de ses partenaires et est protégé par les lois canadiennes
              sur le droit d'auteur. Toute reproduction, même partielle, est interdite sans
              autorisation écrite préalable.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-800 mb-3">4. Limitation de responsabilité</h2>
            <p>
              Kayiratech s'efforce de maintenir les informations de ce site à jour et exactes.
              Toutefois, nous ne garantissons pas l'exactitude, l'exhaustivité ou l'actualité
              des informations publiées. L'utilisation de ce site se fait à vos propres risques.
            </p>
            <p className="mt-3">
              Kayiratech ne pourra être tenu responsable de tout dommage direct ou indirect
              résultant de l'utilisation ou de l'impossibilité d'utiliser ce site.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-800 mb-3">5. Liens externes</h2>
            <p>
              Ce site peut contenir des liens vers des sites tiers. Ces liens sont fournis à titre
              informatif uniquement. Kayiratech n'assume aucune responsabilité quant au contenu
              des sites externes.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-800 mb-3">6. Droit applicable</h2>
            <p>
              Les présentes conditions sont régies par les lois de la province de Québec et
              les lois fédérales du Canada applicables. Tout litige sera soumis à la compétence
              exclusive des tribunaux du district judiciaire de Montréal.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-800 mb-3">7. Modifications</h2>
            <p>
              Kayiratech se réserve le droit de modifier ces conditions à tout moment. Les
              modifications entrent en vigueur dès leur publication sur cette page. Nous vous
              encourageons à consulter cette page régulièrement.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-800 mb-3">8. Contact</h2>
            <p>
              Pour toute question relative aux présentes conditions :{" "}
              <a href="mailto:contact@kayiratech.com" className="text-[var(--color-primary)] hover:underline">
                contact@kayiratech.com
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer config={config} />
    </>
  );
}
