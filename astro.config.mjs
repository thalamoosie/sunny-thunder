// @ts-check
import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
const SITE_URL = "https://brilliant-cuchufli-a8e8e7.netlify.app/";

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  integrations: [preact()],
});