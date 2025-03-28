import style from "./page_projects.scss";
import ProjectList from "../../components/ProjectCard/ProjectList";


export default function Projets() {
	return (
		<div className={style.page_projects}>
			<h1>Projetos</h1>
			<ProjectList />
		</div>
	);
}