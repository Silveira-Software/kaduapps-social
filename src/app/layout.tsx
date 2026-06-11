import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Carlos — Links e contato',
  description: 'Todos os meus links, projetos e contato em um só lugar.',
  openGraph: {
    title: 'Carlos — Links',
    description: 'Todos os meus links em um só lugar.',
    type: 'website',
    locale: 'pt_BR',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
