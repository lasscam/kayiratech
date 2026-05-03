import { defineField, defineType } from "sanity";

export default defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({
      name: "titre",
      title: "Titre",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "icone",
      title: "Icône (Material Symbol)",
      type: "string",
      description: "Nom de l'icône Material Symbols (ex: developer_mode, strategy, groups, neurology)",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug (URL)",
      type: "slug",
      options: { source: "titre", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "accroche",
      title: "Accroche",
      type: "string",
      description: "Courte phrase d'accroche pour la page dédiée",
    }),
    defineField({
      name: "description_longue",
      title: "Description détaillée",
      type: "text",
      rows: 6,
    }),
    defineField({
      name: "points",
      title: "Ce qu'on offre",
      type: "array",
      of: [{ type: "string" }],
      description: "Liste des prestations incluses",
    }),
    defineField({
      name: "cibles",
      title: "Pour qui",
      type: "array",
      of: [{ type: "string" }],
      description: "Profils / entreprises ciblés",
    }),
    defineField({
      name: "ordre",
      title: "Ordre d'affichage",
      type: "number",
      validation: (Rule) => Rule.required().min(1),
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
    select: { title: "titre", subtitle: "description" },
  },
});
