import styles from '@/styles/footer.module.scss'
import Link from 'next/link'
import Image from "next/image"
import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa';
import client from '@/lib/apollo-client';
import { WP_QUERY } from '../graphql/queries/query';
import Instagram from './Instagram';
import { instagram } from "@/data";

const Footer = async (): Promise<React.JSX.Element> => {
    let logoUrl = '/sample1.jpg';

    try {
        const res = await client.query({ 
            query: WP_QUERY,
            fetchPolicy: "no-cache"
        });
        const logoNode = res.data?.logos?.nodes[1]?.logoField?.image?.node;
        if (logoNode?.sourceUrl) {
            logoUrl = logoNode.sourceUrl;
        }
    } catch (error) {
        console.error('Failed to load logo:', error);
    }
    
    return (
        <footer className={styles.footer}>
            <div className={styles.socialmedia}>
                <Instagram instagram={instagram} />
            </div>
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
                                {/*<li>
                                    <Link href="/program" >1:1 Program</Link>
                                </li>*/}
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
                            <li><a href="https://www.facebook.com/profile.php?id=61564442412328 "><FaFacebookF /></a></li>
                            <li><a href="https://www.linkedin.com/in/marina-yayla/"><FaLinkedin /></a></li>
                            <li><a href="https://www.instagram.com/mypersonalbrandingstudio/"><FaInstagram /></a></li>
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
                                {/*<li>
                                    <Link href="/program" >1:1 Program</Link>
                                </li>*/}
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
                            <li><a href="https://www.facebook.com/profile.php?id=61564442412328 "><FaFacebookF /></a></li>
                            <li><a href="https://www.linkedin.com/in/marina-yayla/"><FaLinkedin /></a></li>
                            <li><a href="https://www.instagram.com/mypersonalbrandingstudio/"><FaInstagram /></a></li>
                            </ul>
                        </div>                
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer

