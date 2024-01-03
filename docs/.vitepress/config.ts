import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Pet Food Advice',
  // description: 'A VitePress Site',
  themeConfig: {
    nav: [
      { text: 'Project Scope', link: '/project-scope' },
      { text: 'Creative Process', link: '/creative-process' },
      { text: 'Improvement', link: '/improvement' },
      { text: 'About me', link: '/about' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/clarabatt/pet-food-advice' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/clara-battesini/' }
    ]
  }
})
