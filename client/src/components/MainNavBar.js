import logosite from '../img/logo_site_transparent.png';
import classes from './MainNavBar.module.css';
import {NavLink} from 'react-router-dom';

function MainNavBar(){
    return(
        <header className={classes.header}>
        <nav>
            <ul className={classes.navright}>
            <li>
                <NavLink
                to="/"
                style={({ isActive }) => 
                (isActive ? {background: 'rgba(232,113,33,.4)'} : {background: 'white'}
                )}
                >
                    HOME
                </NavLink>
            </li>
            <li>
            <NavLink
                to="/services"
                style={({ isActive }) => 
                (isActive ? {background: 'rgba(232,113,33,.4)'} : {background: 'white'}
                )}
                >
                    SERVICES
                </NavLink>
            </li>
            <img src={logosite} className={classes.logo} alt="logosite" />
            <li>
            <NavLink
                to="/login"
                style={({ isActive }) => 
                (isActive ? {background: 'rgba(232,113,33,.4)'} : {background: 'white'}
                )}
                >
                    LOGIN
                </NavLink>
            </li>
            <li>CONTACT</li>
            </ul>
        </nav>
        </header>
    );
}

export default MainNavBar;