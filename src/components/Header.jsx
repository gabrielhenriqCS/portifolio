import "./header.css";
import { Button } from "@nextui-org/button";
import {CurriculoBaixar} from "@/assets/curriculo-file";

function Curriculo(){
	return (
		<div>
      <Button className="file-curriculo" color="primary">
       Currículo
      </Button>    
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
				<h1>Sou Desenvolvedor Full-Stack Júnior</h1>
				<article>
					<p>
						Desenvolvedor Full-Stack com estudos em React, Javascript, Node e
						RestAPI, Sempre buscando conhecimento para melhor entendimento de
						problemas e poder realizar as possíveis soluções.
					</p>
				</article>
				<Curriculo/>
			</header>
           
		</>
	);
}


