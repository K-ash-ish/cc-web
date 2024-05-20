import { createClient } from "@sanity/client";
export const sanityClient = createClient({
  projectId: "5wzoxlfe",
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-05-20",
});
