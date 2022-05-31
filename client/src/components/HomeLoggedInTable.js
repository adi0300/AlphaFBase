import classes from "./HomeLoggedInTable.module.css";

function HomeLoggedInTable(props) {
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
              <tr>
                <td>{props.name}</td>
                <td>{props.age}</td>
                <td>{props.position}</td>
                <td>{props.goals}</td>
                <td>{props.assists}</td>
                <td>{props.contract}</td>
                <td>{props.wage}</td>
              </tr>
              <tr>
                <td>x</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
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
