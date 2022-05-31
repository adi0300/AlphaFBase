import classes from "./AddPlayerForm.module.css";
import {useState} from 'react';
import Axios from 'axios';

const AddPlayerForm = () =>{

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [position, setPosition] = useState("");
    const [goals, setGoals] = useState("");
    const [assists, setAssists] = useState("");
    const [contractlength, setContractlength] = useState("");
    const [wage, setWage] = useState("");
    const [username, setUsername] = useState("");
    const [message, setMessage] = useState("");


    const addPlayer = async(e) =>{
        e.preventDefault();
        const localusername = localStorage.getItem("username");
        setUsername(localusername);
        try{
            await Axios.post("http://localhost:3001/api/players/addplayer", {
                name,
                age,
                position,
                goals,
                assists,
                contractlength,
                wage,
                username
            });
            setMessage("Player added succesfully !");
        }catch(err){
            setMessage("Could not add player");
        }
    };

    return(
        <div className={classes.divmare}>
            <form className={classes.form} onSubmit={addPlayer}>

                <p className={classes.p}>
                    Add New Player
                </p>

                <div className={classes.clear}></div>
                <div className={classes.div}>
                    <input type="text" required id="name" placeholder="Name" onChange={(event) => {
                  setName(event.target.value);
                 }}></input>
                </div>

                <div className={classes.div}>
                    <input type="number" required id="age" placeholder="Age" onChange={(event) => {
                  setAge(event.target.value);
                 }}></input>
                </div>

                <div className={classes.clear}></div>

                <div className={classes.div}>
                <select required id="position" placeholder="Position" onChange={(event) => {
                  setPosition(event.target.value);
                 }}>
                    <option value="Goalkeeper">Goalkeeper</option>
                    <option value="Defender">Defender</option>
                    <option value="Midfielder">Midfielder</option>
                    <option value="Forward">Forward</option>
                </select>
                </div>

                <div className={classes.div}>
                    <input type="number" required id="goals" placeholder="Goals" onChange={(event) => {
                  setGoals(event.target.value);
                 }}></input>
                </div>

                <div className={classes.clear}></div>

                <div className={classes.div}>
                    <input type="number" required id="assists" placeholder="Assists" onChange={(event) => {
                  setAssists(event.target.value);
                 }}></input>
                </div>

                <div className={classes.div}>
                    <input type="text" required id="contract" placeholder="Contract length" onChange={(event) => {
                  setContractlength(event.target.value);
                 }}></input>
                </div>

                <div className={classes.clear}></div>

                <div className={classes.div}>
                    <input type="text" required id="wage" placeholder="Wage" onChange={(event) => {
                  setWage(event.target.value);
                 }}></input>
                </div>

                <div className={classes.clear}></div>

                <div className={classes.action}>
                    <button type="submit">Insert Player</button>
                </div>

                <div className={classes.clear}></div>

                {message && <div className={classes.message}>{message}</div>}
            </form>
        </div>
    );
}

export default AddPlayerForm;