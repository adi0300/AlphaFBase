import classes from "./Tabel.module.css";
import {useState, useEffect} from 'react';
import Axios from 'axios';
function Tabel(props) {
  const [clubList, setClubList] = useState([]);

  useEffect( () => {
    Axios.get("http://localhost:3001/api/get/clublisthome")
    .then( (res) => {
      setClubList(res.data);
    })
  }, []);

  return (
    <div>
      <div className={classes.textsus}>
        <p>List of clubs that are already working with us</p>
      </div>

      <div className={classes.div}>
        <table border="2" className={classes.tabel} >
          <colgroup span="4"></colgroup>
          <tr>
            <th>Name</th>
            <th>Club administrator email</th>
            <th>Since</th>
          </tr>
          {clubList.map( (clubl) => {
            return(
              <tr>
                <td>{clubl.clubname}</td>
                <td>{clubl.email}</td>
                <td>2022</td>
              </tr>
            )
          })}
        </table>
      </div>
    </div>
  );
}

export default Tabel;
