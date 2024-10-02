import "./projetos.css";
import Image from "next/image";

function VideoDrip() {
	return (
		<video
			src="/dripvideo.mp4"
			autoPlay
			loop
			muted
			playsInline
			controls={false}
			className="video"
		/>
	);
}
function VideoFaster() {
	return (
		<video
			src="/fastervideo.mp4"
			autoPlay
			loop
			muted
			playsInline
			controls={false}
			className="video"
		/>
	);
}
function VideoCad() {
	return (
	  <Image
		src="/paginacadastro.png"
		alt="Página de cadastro"
		width={3000} 
		height={1000} 
		className="video"
	  />
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
		  <legend className="titulo">Site logístico</legend>
		  <VideoFaster />
		</div>
		<div className="project">
		  <legend className="titulo">Página de cadastro</legend>
		  <VideoCad />
		</div>
	  </>
	);
  }