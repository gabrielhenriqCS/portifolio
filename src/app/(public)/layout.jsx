import NavBar from "../components/NavBar/NavBar"; 
import styles from "./layout.module.scss"; // Crie este arquivo SCSS

export default function PublicLayout({ children }) {
  return (
    <div className={styles.publicLayout}>
      <NavBar />
      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  );
}