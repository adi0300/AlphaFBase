import classes from './RegisterForm.module.css';
function RegisterForm(){
    return(
        <div>
            <form className={classes.form}>
                <p className={classes.p}>
                    Register
                </p>

                <div className={classes.clear}></div>

                <div className={classes.div}>
                    <input type="text" required id="userName" placeholder="Username "/>
                </div>
                <div className={classes.div}>
                    <input type="email" required id="email" placeholder="Email "/>
                </div>

                <div className={classes.clear}></div>

                <div className={classes.div}>
                    <input type="text" required id="clubName" placeholder="Club Name"/>
                </div>
                <div className={classes.div}>
                    <input type="text" required id="password" placeholder="Password"/>
                </div>

                <div className={classes.clear}></div>

                <div className={classes.checkbox}>
                    <input type="checkbox" required id="terms"/>
                    <label htmlFor="terms">I agree with terms of use and privacy</label>
                </div>

                <div className={classes.action}>
                    <button>SIGN UP</button>
                </div>
            </form>
        </div>
    );
}

export default RegisterForm;