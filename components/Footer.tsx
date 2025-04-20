import styles from '@/styles/footer.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () :React.JSX.Element => {
    return (
        <footer className={styles.footer}>
            <Image src="https://picsum.photos/400/200" width={400} height={200} alt="footer" />
            <div className={styles.footer_content}>
                <h2>Let&#39;s make your brand shine!</h2>
                <div className={styles.footer_menu}>
                    <div className={styles.footer_link}>
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
                    <div className={styles.footer_social}>
                        <ul>
                        <li><a href="#"><FaFacebookF /></a></li>
                        <li><a href="#"><FaTwitter /></a></li>
                        <li><a href="#"><FaInstagram /></a></li>
                        </ul>
                    </div>                
                </div>
            </div>
        </footer>
    )
}

export default Footer

