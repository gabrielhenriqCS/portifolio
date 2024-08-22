import './header.css'
import Image from 'next/image'
import Profile from '../assets/profile-photo.jpg'

function Header() {
    return(
        <>
        <header>
        <h3>Olá, me chamo <span className='nome'>Gabriel Henrique</span></h3>
        <h1>Sou Desenvolvedor Full-Stack Júnior</h1>
        </header> 
        <Image src={Profile} width={50} height={50}/>
        </>
    )
}
 
export default Header