import classes from "./AddPlayerForm.module.css";

function AddPlayerForm(){
    return(
        <div className={classes.divmare}>
            <form className={classes.form}>

                <p className={classes.p}>
                    Add New Player
                </p>

                <div className={classes.clear}></div>
                <div className={classes.div}>
                    <input type="text" required id="name" placeholder="Name"></input>
                </div>

                <div className={classes.div}>
                    <input type="number" required id="age" placeholder="Age"></input>
                </div>

                <div className={classes.clear}></div>

                <div className={classes.div}>
                    <input type="text" required id="position" placeholder="Position"></input>
                </div>

                <div className={classes.div}>
                    <input type="number" required id="goals" placeholder="Goals"></input>
                </div>

                <div className={classes.clear}></div>

                <div className={classes.div}>
                    <input type="number" required id="assists" placeholder="Assists"></input>
                </div>

                <div className={classes.div}>
                    <input type="text" required id="contract" placeholder="Contract length"></input>
                </div>

                <div className={classes.clear}></div>

                <div className={classes.div}>
                    <input type="text" required id="wage" placeholder="Wage"></input>
                </div>

                <div className={classes.clear}></div>

                <div className={classes.image}>
                    <label htmlFor="image">Add image</label>
                    <input type="file" required id="image" placeholder="Browse"></input>
                </div>

                <div className={classes.clear}></div>

                <div className={classes.action}>
                    <button type="submit">Insert Player</button>
                </div>

                <div className={classes.clear}></div>
            </form>
        </div>
    );
}

export default AddPlayerForm;