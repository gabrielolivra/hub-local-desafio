import '@/app/ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <html lang="pt" suppressHydrationWarning>
      <title>Desafio HUB local</title>
      <body className={` antialiased`}>{children}</body>
    </html>
  );
}
