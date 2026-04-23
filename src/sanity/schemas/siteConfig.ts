import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteConfig",
  title: "Configuration du site",
  type: "document",
  // Singleton — un seul document
  __experimental_actions: ["update", "publish"],
  fields: [
    defineField({
      name: "email",
      title: "Email de contact",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: "telephone",
      title: "Téléphone",
      type: "string",
    }),
    defineField({
      name: "adresse",
      title: "Adresse",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "logo",
      title: "Logo principal",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "linkedin",
      title: "URL LinkedIn",
      type: "url",
    }),
    defineField({
      name: "twitter",
      title: "URL Twitter / X",
      type: "url",
    }),
  ],
  preview: {
    select: { title: "email" },
    prepare: () => ({ title: "Configuration du site" }),
  },
});
