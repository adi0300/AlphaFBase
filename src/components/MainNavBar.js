import logosite from '../img/logo_site_transparent.png';
import classes from './MainNavBar.module.css';
import {Link} from 'react-router-dom';

function MainNavBar(){
    return(
        <header className={classes.header}>
        <nav>
            <ul className={classes.navright}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>Services</li>
            <img src={logosite} className={classes.logo} alt="logosite" />
            <li>Login</li>
            <li>Contact</li>
            </ul>
        </nav>
        </header>
    );
}

export default MainNavBar;