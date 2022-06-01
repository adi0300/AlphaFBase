import classes from './ContactText.module.css';
function ContactText(props) {
    return(
        <div className={classes.divv}>
            <p className={classes.p}>{props.text}</p>
            <p className={classes.email}>OUR COMPANY EMAIL alphafbase@gmail.com</p>
            <p className={classes.email}>OUR PHONE NUMBER   07551215</p>
        </div>
    );
}

export default ContactText;