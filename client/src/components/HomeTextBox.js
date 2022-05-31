import classes from "./HomeTextBox.module.css";
import {NavLink} from 'react-router-dom';
function HomeTextBox(props) {
  return (
    <div>
      <h1 className={classes.titlu}>{props.title}</h1>
      <div className={classes.divtext}>
        <p className={classes.ptext}>{props.text}</p>
      </div>
      <div className={classes.link}>
        <p >
        <NavLink to="/payment">
                    {props.linktext}
                </NavLink>
        </p>
      </div>
    </div>
  );
}

export default HomeTextBox;
