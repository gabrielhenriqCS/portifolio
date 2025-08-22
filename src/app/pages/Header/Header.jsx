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
          Estudante de Análise de Sistemas, apaixonado por tecnologia e
          desenvolvimento web. Tenho experiência em projetos de front-end e back-end usando Reactjs, TypeScript, Nodejs com ExpressJS, TailwindCSS, além de ter conhecimentos em bancos de dados SQL. Sempre buscando aprender novas tecnologias e aprimorar minhas habilidades, através da prática em projetos reais e desafios que desafiam meu conhecimento.
        </p>
      </article>
    </header>
  );
}