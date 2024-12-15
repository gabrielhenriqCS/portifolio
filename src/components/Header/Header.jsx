import "./header.css";


function Curriculo() {
	return (
		<div>
			<a href="/Currículo Tech.pdf" target="_blank">
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
						Sou Desenvolvedor Full-Stack, com conhecimentos em HTML, CSS, JavaScript, ReactJS, NodeJS, MySQL e PostgreSQL. Após minha formação técnica em Redes de Computadores, decidi fazer o serviço militar obrigatório em serviço do Exército Brasileiro, onde fiquei por 1 ano. Quando eu sai, decidi iniciar meus estudos em programação, neste período fiz um curso de Desenvolvimento Full-Stack no programa Geração Tech. Atualmente, busco minha primeira oportunidade na área, para afins de aperfeiçoamento como um bom profissional de tecnologia.
					</p>
				</article>
				<Curriculo />
			</header>

		</>
	);
}


