// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      ]
    }
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
    vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag === 'deep-chat',
    },
  },
  modules: [
    'shadcn-nuxt',
  ],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  runtimeConfig: {
    public: {
      azureOpenaiUrl: process.env.AZURE_OPENAI_URL,
      azureOpenaiModel: process.env.AZURE_OPENAI_MODEL,
    },
    azureOpenaiApiKey: process.env.AZURE_OPENAI_API_KEY,
  },
});