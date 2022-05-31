import classes from "./HomeLoggedInTable.module.css";
import {useState, useEffect} from 'react';
import Axios from 'axios';

function HomeLoggedInTable(props) {
  const [playersList, setPlayersList] = useState([]);
  const username = localStorage.getItem("username");

  useEffect( () => {
    Axios.get("http://localhost:3001/api/players/getplayers")
    .then( (res) => {
      setPlayersList(res.data);
    })
  }, []);

  return (
    <div>
      <div className={classes.titluclub}>
        <h1>Squad</h1>
      </div>
      <div className={classes.bigdiv}>
        <div>
          <table className={classes.table}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Position</th>
                <th>Goals</th>
                <th>Assists</th>
                <th>Contract Length</th>
                <th>Wage</th>
              </tr>
            </thead>
            <tbody>
            { playersList.filter(player => player.username === username)
                         .map((player) => {
            return(
              <tr>
                <td>{player.name}</td>
                <td>{player.age}</td>
                <td>{player.position}</td>
                <td>{player.goals}</td>
                <td>{player.assists}</td>
                <td>{player.contractlength}</td>
                <td>{player.wage} lei</td>
              </tr>
            )
         })}
            </tbody>
          </table>
        </div>
        <div >
          <button className={classes.butoane}>Edit</button>
          <button className={classes.butoane}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default HomeLoggedInTable;
