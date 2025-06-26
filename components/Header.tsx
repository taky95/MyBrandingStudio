import Link from 'next/link'
import styles from '@/styles/header.module.scss'
import Image from "next/image"
import client from '@/lib/apollo-client';
import { WP_QUERY } from '../graphql/queries/query';
import HamburgerMenu from './Hamburger';

const Header = async (): Promise<React.JSX.Element> => {
    const { data } = await client.query({ 
        query: WP_QUERY,
    });
    const logoUrl= data.logos.nodes[0].logoField.image.node.sourceUrl
    return (
        <header>
            <nav className={styles.menuBar}>
                <Link href="/" className={styles.titleLogo}>
                    <Image
                        src={logoUrl}
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
                        <Link href="/work" >Work</Link>
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
                <Link href="/" className={styles.titleLogo}>
                    <Image
                        src={logoUrl}
                        width={100}
                        height={50}
                        alt="logo"
                        style={{
                            width: "auto",
                            maxWidth: "100%",
                            height: "auto",
                        }} />
                </Link>
                <HamburgerMenu />
            </div>
        </header>
    );
}

export default Header
