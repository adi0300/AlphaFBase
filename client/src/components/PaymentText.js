import classes from './PaymentText.module.css';
function PaymentText(props) {
    return(
        <div>
            <p className={classes.p}>{props.text}</p>
        </div>
    );
}

export default PaymentText;