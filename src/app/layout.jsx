import "./globals.css";


export const metadata = {
  title: "Gabriel Henique",
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
