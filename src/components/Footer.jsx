import './footer.css'
import instagram from '../assets/instagram.svg'
import linkedin from '../assets/linkedin.svg'
import github from '../assets/github.svg'
import Image from 'next/image'
import Link from 'next/link'


export default function Footer() {
    return (
        <>
            <footer>
                <div className='social-media'>
                    <Link href="https://www.instagram.com/gabrielhenriqcs/">
                    <Image src={instagram} alt='Instagram' width="80px"
                        height="80px" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/gabrielhenriquecs/">
                    <Image src={linkedin} alt='Linkedin' width="100px"
                        height="30px"/>
                    </Link>
                    <Link href="https://github.com/henriquedev24">
                    <Image src={github} alt='Github' width="50px"
                        height="50px" />
                    </Link>
                    <p className='autor'>&copy; Criado por Gabriel Henrique. Todos os direitos reservados.</p>
                </div>
                 
            </footer>
        </>
    )
}

