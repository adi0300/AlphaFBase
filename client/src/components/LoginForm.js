import classes from "./LoginForm.module.css";
function LoginForm(){
    return(
        <div>
            <form className={classes.form}>
                <p className={classes.p}>Sign In</p>

                <div className={classes.div}>
                    <input type="text" required id="userName" placeholder="Username"/>
                </div>

                <div className={classes.div}>
                    <input type="password" required id="password" placeholder="Password"/>
                </div>

                <div className={classes.action}>
                    <button>SIGN IN</button>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;