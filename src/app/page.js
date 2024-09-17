import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Projetos from '../components/Projetos.jsx' 
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
