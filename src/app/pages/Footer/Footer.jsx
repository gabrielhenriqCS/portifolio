import style from './Footer.module.scss'
import instagram from '../../assets/instagram.svg'
import linkedin from '../../assets/linkedin.svg'
import github from '../../assets/github.svg'
import Image from 'next/image'
import Link from 'next/link'


export default function Footer() {
    return (
        <>
            <footer className={style.footer}>
                <div className={style.social_media}>
                    <Link href="https://www.instagram.com/biel.henriqz/" aria-label='Perfil do Instagram de Gabriel Henrique'>
                        <Image className={style.logo} src={instagram} alt='Instagram' />
                    </Link>
                    <Link href="https://www.linkedin.com/in/gabrielhenriquecs/" aria-label='Perfil do Linkedin do Gabriel Henrique'>
                        <Image className={style.logo} src={linkedin} alt='Linkedin' />
                    </Link>
                    <Link href="https://github.com/gabrielhenriqCS" aria-label='Perfil do Github do Gabriel Henrique'>
                        <Image className={style.logo} src={github} alt='Github' />
                    </Link>
                    <p className={style.author}>&copy; Criado por Gabriel Henrique. Todos os direitos reservados.</p>
                </div>

            </footer>
        </>
    )
}

