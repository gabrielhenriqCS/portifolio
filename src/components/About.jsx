import './about.css'
import Perfil from '../assets/profile-photo.jpg' 

function About() {
    return(
        <>
        <article>
            <p>Desenvolvedor Full-Stack com estudos em React, Javascript, Node e RestAPI,
                Sempre buscando conhecimento para melhor entendimento de problemas e poder realizar as possíveis soluções.
            </p>
            <img src={Perfil} width={100} height={100}/>
        </article>
        </>
    )
}

export default About