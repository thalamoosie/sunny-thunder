import rss, { pagesGlobToRssItems } from "@astrojs/rss";

const SITE_URL = "https://brilliant-cuchufli-a8e8e7.netlify.app/";

export async function GET(context) {
  return rss({
    title: "Astro Learner | Blog",
    description: "My journey learning Astro",
    site: SITE_URL,
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
    customData: `<language>en-us</language>`,
  });
}
