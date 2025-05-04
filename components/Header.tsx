import Link from 'next/link'
import styles from '@/styles/header.module.scss'
import Image from "next/image"


const Header = ({ data }: { data: string }): React.JSX.Element => {
    return (
        <header>
            <nav className={styles.menuBar}>
                <Link href="/" className={styles.titleLogo}>
                    <Image
                        src={data}
                        width={200}
                        height={100}
                        alt="logo"
                        style={{
                            maxWidth: "100%",
                            height: "auto",
                        }} />
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
