import classes from "./LoginForm.module.css";
import {useState} from 'react';
import Axios from 'axios';

const LoginForm = () =>{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const loginUser = async (e) =>{
        e.preventDefault();
        try{
            const res = await Axios.post("http://localhost:3001/api/verify/login", {
                username,
                password
            });
            setMessage("");
            const tokenObj = res.data;
            localStorage.setItem("token", Object.values(tokenObj));
            localStorage.setItem("username", username);
            window.location= "/homeloggedin";
        }
        catch(err){
            console.log(err.message);
            setMessage("Username or password not correct");
    }
};
    return(
        <div className={classes.divmare}>
            <form className={classes.form} onSubmit={loginUser}>
                <p className={classes.p}>Sign In</p>

                <div className={classes.div}>
                    <input type="text" required id="userName" placeholder="Username" onChange={(event) => {
                  setUsername(event.target.value);
                 }}/>
                </div>

                <div className={classes.div}>
                    <input type="password" required id="password" placeholder="Password" onChange={(event) => {
                  setPassword(event.target.value);
                 }}/>
                </div>

                <div className={classes.action}>
                    <button type="submit">SIGN IN</button>
                </div>
                {message && <div className={classes.message}>{message}</div>}
            </form>
        </div>
    );
}

export default LoginForm;