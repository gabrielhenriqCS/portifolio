import "./projetos.css"
import { projects } from "./data"
import { Card, CardHeader, CardBody } from '@heroui/card';
import Image from "next/image";


export default function ProjectList() {
	const listProjects = projects.map(project =>
		<>
			<Card className="project">
			<CardHeader className="title">
				<h4>{project.title}</h4>
			</CardHeader>
			<CardBody className="">
				<Image
					alt={project.acessAlt}
					className="image-project"
					src={project.imageSrc}
						width={project.width}
					height={project.height}/>
			</CardBody>
			</Card>
			</>
	)
	return listProjects
}