import newrelic from 'newrelic';
import '@/app/ui/global.css';
import localFont from 'next/font/local';
import Script from 'next/script';

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

  const browserTimingHeader = newrelic.getBrowserTimingHeader({
    hasToRemoveScriptWrapper: true,
    allowTransactionlessInjection: true,
  })

  return (
    <html lang="pt" suppressHydrationWarning>
      <title>Desafio HUB local</title>
      <Script
        id="nr-browser-agent"
        dangerouslySetInnerHTML={{ __html: browserTimingHeader }}
      />
      <body className={`${din.className} antialiased`}>{children}</body>
    </html>
  );
}
