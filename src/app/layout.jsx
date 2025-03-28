import "./globals.scss";

export const metadata = {
  title: "Gabriel Henrique",
  description: "Desenvolvedor Full-Stack em formação",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}