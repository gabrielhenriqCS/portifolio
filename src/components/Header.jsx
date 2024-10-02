import "./header.css";


function Curriculo() {
	return (
		<div>
			<a href="/Currículo Tech.pdf" target="_blank" rel="noopener noreferrer">
				<button className="file-curriculo">
					Currículo
				</button>    
				</a>
		</div>
	)
}

export default function Header() {
	return (
		<>
			<header>
				<h3>
					Olá, me chamo <span className="nome">Gabriel Henrique</span>
				</h3>
				<h1 className="titulo">Sou Desenvolvedor Full-Stack Júnior</h1>
				<article>
					<p>
						Desenvolvedor Full-Stack com estudos em React, Javascript, Node e
						RestAPI, Sempre buscando conhecimento para melhor entendimento de
						problemas e poder realizar as possíveis soluções.
					</p>
				</article>
				<Curriculo />
			</header>

		</>
	);
}


