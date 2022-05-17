import classes from './RegisterForm.module.css';
import {useState} from 'react';
import Axios from 'axios';

function RegisterForm(){
    const setUserList = useState([]);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [clubname, setClubname] = useState("");
    const [password, setPassword] = useState("");

    const registerUser = () =>{
        Axios.post("http://localhost:3001/api/register", {
            username,
            email,
            clubname,
            password
        }).then((response) =>{
            setUserList([ {
                username,
                email,
                clubname,
                password
            }])
        });
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
            </form>
        </div>
    );
}

export default RegisterForm;