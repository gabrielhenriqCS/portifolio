import "./projetos.css";

function VideoDrip() {
	return (
		<video muted width="35" height="24" autoPlay loop>
			<source src="../assets/dripstorevideo.mp4" type="video/mp4" />
		</video>
	);
}

export default function Projetos() {
	return (
		<>
			<div className="project">
				<legend className="titulo">Dripstore</legend>
				<VideoDrip />
			</div>
			<div className="project">
				<legend className="titulo">Fórmulario de Pedidos</legend>
				<VideoDrip />
			</div>
			<div className="project">
				<legend className="titulo">Página de cadastro</legend>
				<VideoDrip />
			</div>
		</>
	);
}
