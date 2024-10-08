// src/app/layout.tsx

import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Mouad Academy',
  description: 'Apprenez l\'informatique, la langue arabe et les mathématiques avec Mouad.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-gray-100">
        <Navbar />
        <main className="container mx-auto p-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
