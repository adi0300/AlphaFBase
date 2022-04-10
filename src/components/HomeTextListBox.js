import classes from "./HomeTextListBox.module.css";

function HomeTextListBox(props) {
  return (
    <div>
      <div>
        <h1>{props.title}</h1>
      </div>
      <div >
        <div>
          <ul className={classes.ul}>
            <li>{props.text1}</li>
            <li>{props.text2}</li>
            <li>{props.text3}</li>
            <li>{props.text4}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HomeTextListBox;
