import Header from "../app/pages/Header/Header";
import Footer from "../app/pages/Footer/Footer";
import style from"./page.module.scss";

export default function Home() {
  return (
    <main className={style.main}>
      <Header />
      <Footer />
    </main>
  );
}
