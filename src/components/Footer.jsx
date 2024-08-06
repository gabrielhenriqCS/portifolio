import './footer.css'
import instagram from '../assets/instagram.svg'
import linkedin from '../assets/linkedin.svg'
import github from '../assets/github.svg'


function Footer() {
    return (
        <>
            <footer>
                <div className='social-media'>
                    <img src={instagram} width="30px"
                        height="30px" />
                    <img src={linkedin} width="30px"
                        height="30px" />
                    <img src={github} width="30px"
                        height="30px" />
                </div>
                <p>&copy; Criado por Gabriel Henrique. Todos os direitos reservados.</p>
            </footer>
        </>
    )
}

export default Footer