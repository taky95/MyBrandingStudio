import Link from 'next/link'
import styles from '@/styles/header.module.scss'
import Image from "next/legacy/image"

const Header = () :React.JSX.Element => {
    return (
        <header>
            <nav className={styles.menuBar}>
                <Link href="/" className={styles.titleLogo}>
                    <Image src="https://picsum.photos/200/100" width={200} height={100} alt="logo" />
                    <span>personal branding studio</span>
                </Link>
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
            <div className={styles.hamburgerMenu}>
                <Link href="/" className={styles.title}>My Branding Studio</Link>
            </div>
        </header>
    );
}

export default Header
