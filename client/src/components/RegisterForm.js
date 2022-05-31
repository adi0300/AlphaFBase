import classes from './RegisterForm.module.css';
import {useState} from 'react';
import Axios from 'axios';

const RegisterForm = () =>{
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [clubname, setClubname] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const registerUser = async(e) =>{
        e.preventDefault();
        try{
            await Axios.post("http://localhost:3001/api/register", {
                username,
                email,
                clubname,
                password
            });
            setMessage("");
            window.location = "/login";
        }catch(err){
            setMessage("Could not register");
        }
    };

    return(
        <div>
            <form className={classes.form}>
                <p className={classes.p}>
                    Register
                </p>

                <div className={classes.clear}></div>

                <div className={classes.div}>
                    <input type="text" required id="userName" placeholder="Username "  onChange={(event) => {
                  setUsername(event.target.value);
                 }}/>
                </div>
                <div className={classes.div}>
                    <input type="email" required id="email" placeholder="Email " onChange={(event) => {
                  setEmail(event.target.value);
                 }}/>
                </div>

                <div className={classes.clear}></div>

                <div className={classes.div}>
                    <input type="text" required id="clubName" placeholder="Club Name" onChange={(event) => {
                  setClubname(event.target.value);
                 }}/>
                </div>
                <div className={classes.div}>
                    <input type="password" required id="password" placeholder="Password" onChange={(event) => {
                  setPassword(event.target.value);
                 }}/>
                </div>

                <div className={classes.clear}></div>

                <div className={classes.checkbox}>
                    <input type="checkbox" required id="terms"/>
                    <label htmlFor="terms">I agree with terms of use and privacy</label>
                </div>

                <div className={classes.action}>
                    <button onClick={registerUser}>SIGN UP</button>
                </div>
                {message && <div className={classes.message}>{message}</div>}
            </form>
        </div>
    );
}

export default RegisterForm;