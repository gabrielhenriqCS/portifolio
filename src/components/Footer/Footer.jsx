import './footer.css'
import instagram from '../../assets/instagram.svg'
import linkedin from '../../assets/linkedin.svg'
import github from '../../assets/github.svg'
import Image from 'next/image'
import Link from 'next/link'


export default function Footer() {
    return (
        <>
            <footer>
                <div className='social-media'>
                    <Link href="https://www.instagram.com/gabrielhenriqcs/">
                        <Image className='logo' src={instagram} alt='Instagram' />
                    </Link>
                    <Link href="https://www.linkedin.com/in/gabrielhenriquecs/">
                        <Image className='logo' src={linkedin} alt='Linkedin' />
                    </Link>
                    <Link href="https://github.com/henriquedev24">
                        <Image className='logo' src={github} alt='Github' />
                    </Link>
                    <p className='autor'>&copy; Criado por Gabriel Henrique. Todos os direitos reservados.</p>
                </div>

            </footer>
        </>
    )
}

