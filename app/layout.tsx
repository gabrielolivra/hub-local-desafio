import '@/app/ui/global.css';
import localFont from 'next/font/local';

const din = localFont({
  src: [
    {
      path: './ui/fonts/d-din/D-DIN.ttf',
      style: 'normal',
      weight: '400',
    },
    {
      path: './ui/fonts/d-din/D-DIN-Bold.ttf',
      style: 'bold',
      weight: '700',
    }, {
      path: './ui/fonts/d-din/D-DIN-Italic.ttf',
      style: 'italic',
      weight: '400',
    },
  ],
  variable: '--font-din',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <html lang="pt" suppressHydrationWarning>
      <title>Desafio HUB local</title>
      <body className={`${din.className} antialiased`}>{children}</body>
    </html>
  );
}
