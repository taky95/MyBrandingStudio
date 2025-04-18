import styles from '../styles/footer.module.scss'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () :React.JSX.Element => {
    return (
        <footer className={styles.footer}>
            <Image src="https://via.placeholder.com/1920x1080" alt="footer" />
            <div className={styles.footer_content}>
                <Image src="https://via.placeholder.com/1920x1080" alt="logo" />
                <div className="footer-menu">
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
                    </ul>
                    <ul>
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
                </div>
                <div className="socialmedia">
                    <ul>
                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer

