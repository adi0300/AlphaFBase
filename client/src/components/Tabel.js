import classes from "./Tabel.module.css";

function Tabel(props) {
  return (
    <div>
      <div className={classes.textsus}>
        <p>List of clubs that are already working with us</p>
      </div>

      <div className={classes.div}>
        <table border="2" className={classes.tabel} >
          <colgroup span="4"></colgroup>
          <tr>
            <th>Logo</th>
            <th>Name</th>
            <th>Since</th>
          </tr>
          <tr >
            <td><img className={classes.imagine} alt="poza" src="https://upload.wikimedia.org/wikipedia/ro/thumb/5/53/Arsenal_FC.svg/1200px-Arsenal_FC.svg.png"/></td>
            <td>{props.nume}</td>
            <td>{props.data}</td>
          </tr>
          <tr>
            <td>a</td>
            <td></td>
            <td> </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Tabel;
