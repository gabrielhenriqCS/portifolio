import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import About from '../components/About.jsx'
import "./globals.css";

export default function Home() {
  return (
    <main>
      <div>
        <section>
          <Header />
        </section>
        <section>
          <About />
        </section>
        <section>
          <Footer />
        </section>
      </div>
    </main>
  );
}
