import ImageUrlBuilder from "@sanity/image-url";
import { createClient } from "@sanity/client";

export const client = createClient({
	projectId: "bexsaf0l",
	dataset: "production",
	apiVersion: "2022-01-01",
	useCdn: true,
	token: "sk2lu4DUDU35jIo30e3jqxOClffaqnNbLln9ohXtBUXvNJyKqxVRU9xyJrlRcK6WjvNjwHzEkoXEiUUV3pm6LiBz1dhYI1SESCMo6vMecoCHe0yMd9XPXpQI8pdDJIYaLATbK5QwrZ12umNxJOKF6OZOLRhCgyKHWPRcCsmjNROlmf009ieu",
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
