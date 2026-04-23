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
