import { ResetMenuOnRouteChange } from './ResetMenu';
import Link from 'next/link';
import style from '../styles/hamburger.module.scss'

const HamburgerMenu = () :React.JSX.Element => {

    return (
        <div className={style.hamburgerMenu} >
            <ResetMenuOnRouteChange />
            <input id="hiddenBtn" className={style.hiddenBtn} type="checkbox"/>
            <label htmlFor="hiddenBtn" className={style.hamburgerBtn}><span/></label>
            <nav className={style.navContent}>
                <ul className={style.navList}>
                    <li>
                        <Link href="/about" >About</Link>
                    </li>
                    <hr/>
                    <li>
                        <Link href="/services" >Services</Link>
                    </li>
                    <hr/>
                    <li>
                        <Link href="/work" >Work</Link>
                    </li>
                    <hr/>
                    {/*<li>
                        <Link href="/program" >1:1 Program</Link>
                    </li>*/}
                    <hr/>
                    <li>
                        <Link href="/blog" >Blog</Link>
                    </li>
                    <hr/>
                    <li>
                        <Link href="/contact" >Contact</Link>
                    </li>
                    <hr/>
                </ul>
            </nav>
        </div>
    );    
}

export default HamburgerMenu