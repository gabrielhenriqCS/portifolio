import "./projetos.css";
import Image from "next/image";

export default function Projetos() {
	return (
		<div className="projects">
			<div className="project">
				<legend className="titulo">Dripstore</legend>
				<Image
					src="/dripstoreimg.png"
					width={500}
					height={300}
					className="video"
				/>
				<button className="btn-project"><a href="https://github.com/henriquedev24/dripstore">Ver projeto</a></button>
			</div>
			<div className="project">
				<legend className="titulo">Site logístico</legend>
				<Image
					src="/faster.png"
					alt="Site logístico"
					width={500}
					height={300}					
					className="video"
				/>
				<button className="btn-project"><a href="https://github.com/henriquedev24/faster">Ver projeto</a></button>
			</div>
			<div className="project">
				<legend className="titulo">Página de cadastro</legend>
				<Image
					src="/paginacadastro.png"
					alt="Página de cadastro"
					width={500}
					height={300}
					className="video"
				/>
				<button className="btn-project"><a href="https://github.com/henriquedev24/pagina-cadastro">Ver projeto</a></button>
			</div>
		</div>
	);
}