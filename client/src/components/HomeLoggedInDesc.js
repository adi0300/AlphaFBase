import classes from "./HomeLoggedInDesc.module.css";

function HomeLoggedInDesc(props) {
  return (
    <div>
      <div className={classes.titluclub}>
        <h1>{props.title}</h1>
      </div>
      <div className={classes.chestii}>
        <div className={classes.paragraph}>
          <p>{props.paragraph}</p>
        </div>

        <div >
          <button className={classes.buton}>Edit</button>
        </div>
      </div>
    </div>
  );
}

export default HomeLoggedInDesc;
