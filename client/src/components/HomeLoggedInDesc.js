import classes from "./HomeLoggedInDesc.module.css";
import {useState, useEffect} from 'react';
import Axios from 'axios';

function HomeLoggedInDesc(props) {
  const [clubList, setClubList] = useState([]);
  const [clubDetails, setClubDetails] = useState([]);
  const username = localStorage.getItem("username");

  useEffect( () => {
    Axios.get("http://localhost:3001/api/get/clublisthome")
    .then( (res) => {
      setClubList(res.data);
    })

    Axios.get("http://localhost:3001/api/clubs/getclubdetails")
    .then( (res) => {
      setClubDetails(res.data);
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
        { clubDetails.filter(club => club.username === username)
                         .map((club) => {
            return(
              <div>
              <h6>Founded in: {club.year}</h6>
              <h6>Location: {club.location}</h6>
              <h6>Current season: {club.season}</h6>
              <h6>League table position: {club.position}</h6>
              <h6>Manager: {club.year}</h6>
              </div>
            )
         })}
        </div>

        <div >
          <button className={classes.buton}>Edit</button>
        </div>
      </div>
    </div>
  );
}

export default HomeLoggedInDesc;
