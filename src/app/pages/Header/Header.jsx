import style from './Header.module.scss';

export default function Header() {
  return (
    <header className={style.header}>
      <h3>
        Olá, me chamo <span className={style.nome}>Gabriel Henrique</span>
      </h3>
      <h1 className={style.titulo}>Desenvolvedor Full-Stack</h1>
      <article className={style.descricao}>
        <p>
          Desenvolvedor com conhecimentos em HTML, CSS, JavaScript, ReactJS, NodeJS, MySQL e PostgreSQL. 
          Com formação técnica em Redes de Computadores, atualmente cursando Análise e Desenvolvimento 
          de Sistemas, busco minha primeira oportunidade na área para fins de aperfeiçoamento como um 
          bom profissional de tecnologia.
        </p>
      </article>
    </header>
  );
}