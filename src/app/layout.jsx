import "./globals.scss";
import NavBar from './components/NavBar/NavBar';

export const metadata = {
  title: "Gabriel Henrique",
  description: "Desenvolvedor Full-Stack em formação",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <NavBar/>
        <main>{children}</main>
      </body>
    </html>
  );
}