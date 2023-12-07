import '@/app/ui/global.css';
import { inter } from './ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "DashBoard",
  description:
  "This is a Next.js project created for study purposes, following the tutorial provided on the Next.js official page. Explore web development concepts through this Dashboard, learning about culture, technology, programming, and all things geek. Your gateway to the future, where you can not only discover but also share your own creative insights.",
  icons: {
    icon: {
      url: "/hero-desktop.png",
      type: "image/png",
    },
    shortcut: { url: "/hero-desktop.png", type: "image/png" },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
       <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
