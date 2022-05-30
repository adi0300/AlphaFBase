import RegisterForm from "../components/RegisterForm";
import classes from "./Register.module.css";
import {NavLink} from 'react-router-dom';
import MainNavBar from '../components/MainNavBar';
function Register(){
    return(
        <div>
            <MainNavBar/>
            <RegisterForm />
            <div className={classes.link}>
            <NavLink
                to="/services"
                >
                Find out more
            </NavLink>
            </div>
        </div>
    );
}

export default Register;