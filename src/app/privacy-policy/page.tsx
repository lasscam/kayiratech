import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getSiteConfig } from "@/sanity/queries";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Kayiratech",
  description: "Politique de confidentialité de Kayiratech, conformément à la Loi 25 du Québec.",
  robots: { index: true, follow: true },
};

export const revalidate = 3600;

export default async function PrivacyPolicy() {
  const config = await getSiteConfig().catch(() => null);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        rel="stylesheet"
      />
      <Navbar />
      <main className="max-w-3xl mx-auto px-8 py-32">
        <h1 className="text-3xl font-black text-slate-800 mb-2">Politique de confidentialité</h1>
        <p className="text-sm text-slate-400 mb-12">Dernière mise à jour : mai 2025</p>

        <section className="space-y-10 text-slate-600 leading-relaxed">
          <div>
            <h2 className="text-lg font-bold text-slate-800 mb-3">1. Qui nous sommes</h2>
            <p>
              Kayiratech est une entreprise spécialisée en architecture IT et transformation digitale,
              basée à Montréal, Québec, Canada. Nous sommes responsables du traitement des
              renseignements personnels collectés via ce site.
            </p>
            <p className="mt-2">
              Responsable de la protection des renseignements personnels (RPRP) :{" "}
              <a href="mailto:contact@kayiratech.com" className="text-[var(--color-primary)] hover:underline">
                contact@kayiratech.com
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-800 mb-3">2. Renseignements collectés</h2>
            <p>Nous collectons uniquement les renseignements que vous nous fournissez volontairement via notre formulaire de contact :</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Nom et prénom</li>
              <li>Adresse courriel</li>
              <li>Numéro de téléphone (optionnel)</li>
              <li>Contenu de votre message</li>
            </ul>
            <p className="mt-3">
              Nous collectons également des données de navigation anonymisées via Vercel Analytics
              (pages visitées, durée de session) à des fins statistiques. Aucune donnée personnelle
              identifiable n'est transmise à cet outil.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-800 mb-3">3. Finalité de la collecte</h2>
            <p>Vos renseignements sont utilisés exclusivement pour :</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Répondre à vos demandes de contact ou de soumission</li>
              <li>Vous transmettre des informations relatives à nos services, si vous en faites la demande</li>
            </ul>
            <p className="mt-3">Nous ne vendons, ne louons et ne partageons vos données avec aucun tiers à des fins commerciales.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-800 mb-3">4. Conservation des données</h2>
            <p>
              Vos renseignements personnels sont conservés pendant une période maximale de 2 ans
              suivant votre dernière interaction avec nous. Passé ce délai, ils sont détruits de
              manière sécurisée.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-800 mb-3">5. Vos droits (Loi 25)</h2>
            <p>Conformément à la <em>Loi modernisant des dispositions législatives en matière de protection des renseignements personnels</em> (Loi 25), vous disposez des droits suivants :</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Droit d'accès à vos renseignements personnels</li>
              <li>Droit de rectification</li>
              <li>Droit à la portabilité (format technologique structuré)</li>
              <li>Droit à la désindexation et à la suppression</li>
            </ul>
            <p className="mt-3">
              Pour exercer ces droits, contactez-nous à{" "}
              <a href="mailto:contact@kayiratech.com" className="text-[var(--color-primary)] hover:underline">
                contact@kayiratech.com
              </a>. Nous répondrons dans un délai de 30 jours.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-800 mb-3">6. Sécurité</h2>
            <p>
              Nous appliquons des mesures techniques et organisationnelles raisonnables pour protéger
              vos renseignements contre tout accès non autorisé, divulgation ou destruction.
              Les transmissions via notre formulaire de contact sont chiffrées (HTTPS).
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-800 mb-3">7. Contact</h2>
            <p>
              Pour toute question relative à cette politique ou pour exercer vos droits :{" "}
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
