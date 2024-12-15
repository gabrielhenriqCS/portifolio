import Header from '../components/Header/Header.jsx'
import Footer from '../components/Footer/Footer.jsx'
import Projetos from '../components/Projetos/Projetos.jsx' 
import "./globals.css";

export default function Home() {
  return (
    <body>
      <main>
        <section>
          <Header />
        </section>
        <section className='projects'>
          <Projetos />
        </section>
        <section>
          <Footer />
        </section>
    </main>
    </body>
  );
}
