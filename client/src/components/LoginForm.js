import classes from "./LoginForm.module.css";
import {useState} from 'react';
import Axios from 'axios';

function LoginForm(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const loginUser =  () =>{
          Axios.post("http://localhost:3001/api/verify/login", {
            username,
            password
        }).then((response) =>{
            const tokenObj = response.data;
            const idObj = response.data.id;
            localStorage.setItem("token", Object.values(tokenObj));
            localStorage.setItem("id", Object.values(idObj));
            localStorage.setItem("username", username);
            window.location.replace("/homeloggedin");
        }).catch( (error) =>{
            console.log(error.response.data.message);
            console.log("not good");
        });
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
                    <button >SIGN IN</button>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;