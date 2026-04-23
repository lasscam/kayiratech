import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./src/sanity/schemas";

export default defineConfig({
  name: "kayiratech",
  title: "Kayiratech Studio",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Contenu")
          .items([
            S.listItem()
              .title("Configuration du site")
              .id("siteConfig")
              .child(
                S.document()
                  .schemaType("siteConfig")
                  .documentId("siteConfig")
              ),
            S.divider(),
            S.documentTypeListItem("service").title("Services"),
            S.documentTypeListItem("solution").title("Solutions"),
          ]),
    }),
    visionTool(),
  ],
  schema: { types: schemaTypes },
});
