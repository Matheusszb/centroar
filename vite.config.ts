import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { site } from './src/config/site'

const escapeHtml = (value: string) =>
  value.replace(/[&"'<>]/g, (character) => {
    const entities: Record<string, string> = {
      '&': '&amp;',
      '"': '&quot;',
      "'": '&#39;',
      '<': '&lt;',
      '>': '&gt;',
    }
    return entities[character]
  })

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'site-metadata',
      transformIndexHtml(html) {
        const values: Record<string, string> = {
          SITE_TITLE: site.seo.title,
          SITE_DESCRIPTION: site.seo.description,
          SITE_SOCIAL_DESCRIPTION: site.seo.socialDescription,
          SITE_NAME: site.brand.name,
          SITE_LOGO: site.brand.logo,
        }

        return html.replace(/__([A-Z_]+)__/g, (match, key: string) =>
          key in values ? escapeHtml(values[key]) : match,
        )
      },
    },
  ],
})
