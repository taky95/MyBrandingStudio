import styles from '@/styles/footer.module.scss'
import Link from 'next/link'
import Image from "next/image"
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import client from '@/lib/apollo-client';
import { WP_QUERY } from '../graphql/queries/query';

const Footer = async (): Promise<React.JSX.Element> => {
    const { data } = await client.query({ 
        query: WP_QUERY,
    });
    const logoUrl= data.logos.nodes[1].logoField.image.node.sourceUrl
    return (
        <footer className={styles.footer}>
            <span className={styles.footer_line}></span>
            <div className={styles.footer_background}>
                <Image
                    src={logoUrl}
                    width={300}
                    height={200}
                    alt="footer"
                    style={{
                        maxWidth: "100%",
                        height: "auto",
                        width: "auto",
                    }} 
                />
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
            </div>
            <div className={styles.footer_mobile}>
                <Image
                    src={logoUrl}
                    width={150}
                    height={100}
                    alt="footer"
                    style={{
                        maxWidth: "100%",
                        height: "auto",
                        width: "auto",
                    }} 
                />
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
            </div>
        </footer>
    );
}

export default Footer

