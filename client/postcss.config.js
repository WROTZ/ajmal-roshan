import tailwindPostcss from "@tailwindcss/postcss";
import autoprefixer from "autoprefixer";

console.log('[postcss.config.js] loaded (ESM imports)');

export default {
    plugins: [
        // Invoke the Tailwind PostCSS wrapper and explicitly point to the
        // CJS config so the plugin resolves it via require.
        tailwindPostcss({ config: './tailwind.config.cjs' }),
        autoprefixer()
    ]
};
