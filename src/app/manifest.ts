import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Teratak Andika Raja: Sewa Perlengkapan Acara',
    short_name: 'Teratak Andika Raja',
    description: 'Katalog interaktif sewa teratak, pentas panggung, kursi, dan dekorasi pesta.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f8fafc',
    theme_color: '#d97706',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
