import style from "./NavBar.module.scss";

export default function NavBar() {
  return (
    <nav className={style.navbar}>
      <a href="/">Página Inicial</a>
      <a href="/projetos">Projetos</a>
    </nav>
  );
}
