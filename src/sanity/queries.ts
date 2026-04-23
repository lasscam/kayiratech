import { client } from "./client";

export type Service = {
  _id: string;
  titre: string;
  description: string;
  icone: string;
  ordre: number;
};

export type Solution = {
  _id: string;
  titre: string;
  slug: { current: string };
  description: string;
  lien?: string;
  logo?: { asset: { url: string } };
  tags?: string[];
  statut: "disponible" | "bientot" | "archive";
  ordre?: number;
};

export type SiteConfig = {
  email: string;
  telephone?: string;
  adresse?: string;
  linkedin?: string;
  twitter?: string;
};

export async function getServices(): Promise<Service[]> {
  return client.fetch(
    `*[_type == "service"] | order(ordre asc) {
      _id, titre, description, icone, ordre
    }`
  );
}

export async function getSolutions(): Promise<Solution[]> {
  return client.fetch(
    `*[_type == "solution" && statut != "archive"] | order(ordre asc) {
      _id, titre, slug, description, lien,
      logo { asset -> { url } },
      tags, statut, ordre
    }`
  );
}

export async function getSiteConfig(): Promise<SiteConfig | null> {
  return client.fetch(
    `*[_type == "siteConfig"][0] {
      email, telephone, adresse, linkedin, twitter
    }`
  );
}
