import style from "./page_projects.module.scss";
import ProjectList from "../../components/ProjectCard/ProjectList";


export default function Projets() {
	return (
		<div className={style.page_projects}>
			<h1>Projetos</h1>
			<ProjectList />
		</div>
	);
}