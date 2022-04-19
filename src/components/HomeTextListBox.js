import classes from "./HomeTextListBox.module.css";

function HomeTextListBox(props) {
  return (
    <div>
      <div>
        <h1 className={classes.titlu}>{props.title}</h1>
      </div>
      <div>
        <div>
          <ul className={classes.ul}>
            <li className={classes.li}>{props.text1}</li>
            <li className={classes.li}>{props.text2}</li>
            <li className={classes.li}>{props.text3}</li>
            <li className={classes.li}>{props.text4}</li>
          </ul>
        </div>
      </div>
      <div className={classes.link}>
        <p>{props.linktext}</p>
      </div>
    </div>
  );
}

export default HomeTextListBox;
