import ImageUrlBuilder from "@sanity/image-url";
import { createClient } from "@sanity/client";

export const client = createClient({
	projectId: process.env.REACT_APP_SANITY_STUDIO_ID,
	dataset: "production",
	apiVersion: "2022-01-01",
	useCdn: true,
	token: process.env.REACT_APP_SANITY_STUDIO_TOKEN,
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
