import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Tetpic PWA',
    short_name: 'Tetpic',
    description: 'A Progressive Web App built with Next.js',
    start_url: '/cards',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/tet.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/tet.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}