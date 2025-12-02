import { asset, Head } from "$fresh/runtime.ts";
import { defineApp } from "$fresh/server.ts";
import Theme from "../sections/Theme/Theme.tsx";
import { Context } from "@deco/deco";
export default defineApp(async (_req, ctx) => {
  const revision = await Context.active().release?.revision();
  return (
    <>
      {/* Include default fonts and css vars */}
      <Theme colorScheme="any" />

      {/* Include Icons and manifest */}
      <Head>
        {/* Enable View Transitions API */}
        <meta name="view-transition" content="same-origin" />

        {/* Tailwind v3 CSS file */}
        <link
          href={asset(`/styles.css?revision=${revision}`)}
          rel="stylesheet"
        />

        {/* Web Manifest */}
        <link rel="manifest" href={asset("/site.webmanifest")} />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
        />
      </Head>

      {/* Rest of Preact tree */}
      <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js">
      </script>
      <ctx.Component />
    </>
  );
});
