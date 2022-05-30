import ServicesText from "../components/ServicesText";
import classes from "./Services.module.css";
import {NavLink} from 'react-router-dom';
import MainNavBar from '../components/MainNavBar';

function Services() {
    return(
        <div>
            <MainNavBar/>
            <div className={classes.link}>
            <NavLink
                to="/payment"
                >
                Get our services and create your account
            </NavLink>
            </div>
            <p className={classes.righttitle} >Easier managing of the club</p>
            <ServicesText text="Apart from basic details about your club like name, year it was founded, league etc, 
            we also provide a system in which the club administrator can enter details about the players and the staff,
             which we will be covering below."/>
            <p className={classes.lefttitle} >Statistics about the squad's players</p>
            <ServicesText text="The administrator can group the players based on their position and manage statistics 
            like goals, assists, so it can give an overview about how each player is performing. He can also add if a 
            player is injured or not, and the status of the injury."/>
            <p className={classes.righttitle} >Details about the staff members</p>
            <ServicesText text="The administrator can also group the staff members based on the role that they are
             fulfilling, to keep tabs about everyone involved with the club."/>
            <p className={classes.lefttitle} >Wage management</p>
            <ServicesText text="The players and the staff will also have a section which will display their current
             wage and the number of years remaining on their contract, and the administrator can also add the budget of
             the club, to see if any new recruits will fit this budget."/>
        </div>
    );
}

export default Services;