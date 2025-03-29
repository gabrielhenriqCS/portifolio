import style from "./Projetos.module.scss";
import { projects } from "./data";
import { Card, CardHeader, CardBody } from "@heroui/card";
import Image from "next/image";

export default function ProjectList() {
  return (
    <div className={style.projectsContainer}>
      {projects.map((project) => (
        <Card key={project.title} className={style.project}>
          <CardHeader className={style.title}>
            <h4>{project.title}</h4>
          </CardHeader>
          <CardBody className={style.cardBody}>
            <Image
              src={project.imageSrc}
              alt={project.acessAlt}
              width={project.width}
              height={project.height}
              className={style.image_project}
            />
          </CardBody>
        </Card>
      ))}
    </div>
  );
}
