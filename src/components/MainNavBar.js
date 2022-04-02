import logosite from '../logo_site_transparent.png';
import classes from './MainNavBar.module.css';

function MainNavBar(){
    return(
        <header className={classes.header}>
        <nav>
            <ul className={classes.navright}>
            <li>Home</li>
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