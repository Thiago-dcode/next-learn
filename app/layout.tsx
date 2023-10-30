
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">

      <body className={`${inter.className} antialiased`}>

        <header>
          <nav>
            <ul>
              <li>Dashboard</li>
              <li>Login</li>
              <li></li>
              <li></li>
            </ul>
          </nav>
        </header>
       
        {children}</body>
    </html>
  );
}
