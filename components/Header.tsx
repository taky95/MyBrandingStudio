import Link from 'next/link'
import style from '../../styles/header.module.scss'
import Image from 'next/image'

const Header = () :React.JSX.Element => {
    return (
        <header>
            <nav className={style.menuBar}>
                <Image src="https://via.placeholder.com/1920x1080" alt="logo" />
                <Link href="/" className={style.title}>My Branding Studio</Link>
                    
                <ul>
                    <li>
                        <Link href="/about" >About</Link>
                    </li>
                    <li>
                        <Link href="/services" >Services</Link>
                    </li>
                    <li>
                        <Link href="/portfolio" >Portfolio</Link>
                    </li>
                    <li>
                        <Link href="/program" >1:1 Program</Link>
                    </li>
                    <li>
                        <Link href="/blog" >Blog</Link>
                    </li>
                    <li>
                        <Link href="/contact" >Contact</Link>
                    </li>
                </ul>
            </nav>
            <div className={style.hamburgerMenu}>
                <Link href="/" className={style.title}>My Branding Studio</Link>
            </div>
        </header>
    );
}

export default Header
