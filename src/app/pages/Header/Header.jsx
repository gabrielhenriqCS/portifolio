import "./header.css";
import { Button } from "@heroui/button";
import NavBar from '../../components/NavBar/NavBar';


function Curriculo() {
	return <div>
			<a href="/CurrículoDev.pdf" target="_blank">
				<Button className="file-curriculo" radius="full" variant="shadow">Currículo</Button>
			</a>
		</div>
}

export default function Header() {
	return (
		<>
			<NavBar/>
			<header>
				<h3>
					Olá, me chamo <span className="nome">Gabriel Henrique</span>
				</h3>
				<h1 className="titulo">Desenvolvedor Full-Stack</h1>
				<article>
					<p>
						Desenvolvedor com conhecimentos em HTML, CSS, JavaScript, ReactJS, NodeJS, MySQL e PostgreSQL. Com formação técnica em Redes de Computadores, atualmente cursando Análise e Desenvolvimento de Sistemas, busco minha primeira oportunidade na área, para afins de aperfeiçoamento como um bom profissional de tecnologia.
					</p>
				</article>
				<Curriculo />
			</header>

		</>
	);
}


