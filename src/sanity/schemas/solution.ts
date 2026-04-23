import { defineField, defineType } from "sanity";

export default defineType({
  name: "solution",
  title: "Solution",
  type: "document",
  fields: [
    defineField({
      name: "titre",
      title: "Titre",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "titre", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description courte",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "descriptionLongue",
      title: "Description longue",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "lien",
      title: "Lien externe",
      type: "url",
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "image",
      title: "Image de couverture",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "SaaS", value: "SaaS" },
          { title: "IA", value: "IA" },
          { title: "DevOps", value: "DevOps" },
          { title: "Cloud", value: "Cloud" },
          { title: "Mobile", value: "Mobile" },
          { title: "API", value: "API" },
        ],
        layout: "tags",
      },
    }),
    defineField({
      name: "statut",
      title: "Statut",
      type: "string",
      options: {
        list: [
          { title: "Disponible", value: "disponible" },
          { title: "Bientôt disponible", value: "bientot" },
          { title: "Archivé", value: "archive" },
        ],
        layout: "radio",
      },
      initialValue: "bientot",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "ordre",
      title: "Ordre d'affichage",
      type: "number",
    }),
  ],
  orderings: [
    {
      title: "Ordre d'affichage",
      name: "ordreAsc",
      by: [{ field: "ordre", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "titre",
      subtitle: "statut",
      media: "logo",
    },
  },
});
