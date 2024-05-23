import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
export const sanityClient = createClient({
  projectId: "5wzoxlfe",
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-05-20",
});
const builder = imageUrlBuilder(sanityClient);

export function urlFor(source) {
  return builder.image(source);
}
