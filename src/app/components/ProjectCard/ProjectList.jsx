import style from "./Projetos.module.scss"
import { projects } from "./data"
import { Card, CardHeader, CardBody } from '@heroui/card';
import Image from "next/image";


export default function ProjectList() {
	const listProjects = projects.map(project =>
		<>
			<Card className={style.project}>
			<CardHeader className={style.title}>
				<h4>{project.title}</h4>
			</CardHeader>
			<CardBody>
				<Image
					alt={project.acessAlt}
					className={style.image_project}
					src={project.imageSrc}
						width={project.width}
					height={project.height}/>
			</CardBody>
			</Card>
			</>
	)
	return listProjects
}