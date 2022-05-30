import classes from "./LoginForm.module.css";
import {useState} from 'react';
import Axios from 'axios';

const LoginForm = () =>{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const loginUser = async (e) =>{
        e.preventDefault();
        try{
            const res = await Axios.post("http://localhost:3001/api/verify/login", {
                username,
                password
            });
            const tokenObj = res.data;
            localStorage.setItem("token", Object.values(tokenObj));
            localStorage.setItem("username", username);
            window.location= "/homeloggedin";
        }
        catch(err){
            console.log(err.message);
            console.log("not good");
    }
};
    return(
        <div>
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
            </form>
        </div>
    );
}

export default LoginForm;