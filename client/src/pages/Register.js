import RegisterForm from "../components/RegisterForm";
import classes from "./Register.module.css";
import {NavLink} from 'react-router-dom';
function Register(){
    return(
        <div>
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