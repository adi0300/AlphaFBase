import classes from "./HomeTextBox.module.css";

function HomeTextBox(props) {
    return(
        <div>
        <h1>{props.title}</h1>
        <div>
          <p className={classes.p}>
            {props.text}
          </p>
        </div>
      </div>
    )
  
}

export default HomeTextBox;
