import classes from "./HomeLoggedInDesc.module.css";
import {useState, useEffect} from 'react';
import Axios from 'axios';

function HomeLoggedInDesc(props) {
  const [clubList, setClubList] = useState([]);
  const username = localStorage.getItem("username");

  useEffect( () => {
    Axios.get("http://localhost:3001/api/get/clublisthome")
    .then( (res) => {
      setClubList(res.data);
    })
  }, []);

  return (
    <div>
      <div className={classes.titluclub}>
        { clubList.filter(club => club.username === username)
                         .map((club) => {
            return(
              <h1>{club.clubname}</h1>
            )
         })}
      </div>
      <div className={classes.chestii}>
        <div className={classes.paragraph}>
          <h6>Founded in: 2018</h6>
          <h6>Location: Barsana</h6>
          <h6>Current season: 2021-2022</h6>
          <h6>League table position: 10</h6>
          <h6>Manager: Dorinel Munteanu</h6>
        </div>

        <div >
          <button className={classes.buton}>Edit</button>
        </div>
      </div>
    </div>
  );
}

export default HomeLoggedInDesc;
