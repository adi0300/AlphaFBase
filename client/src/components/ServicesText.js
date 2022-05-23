import classes from "./ServicesText.module.css";
function ServicesText(props) {
    return(
        <div className={classes.div}>
<p className={classes.p}>
    {props.text}
</p>
        </div>
    )
}

export default ServicesText;