import classes from './PaymentForm.module.css';
function PaymentForm() {
    return(
    <div>
        <form className={classes.form}>
            <h4>
                Customer information
            </h4>
            <div>
                <label htmlFor="firstname">FIRST NAME</label>
                <input type="text" required id="firstname" />
            </div>
            <div>
                <label htmlFor="lastname">LAST NAME</label>
                <input type="text" required id="lastname" />
            </div>
            <div>
                <label htmlFor="email">EMAIL</label>
                <input type="text" required id="email" />
            </div>
            <div>
                <label htmlFor="address">ADDRESS</label>
                <input type="text" required id="address" />
            </div>
            <div>
                <label htmlFor="country">COUNTRY</label>
                <input type="text" required id="country" />
            </div>
            <h4>
                Payment details
            </h4>
            <div>
                <label htmlFor="cardnumber">CARD NUMBER</label>
                <input type="text" required id="cardnumber" />
            </div>
            <div>
                <label htmlFor="nameoncard">NAME ON CARD</label>
                <input type="text" required id="nameoncard" />
            </div>
            <div>
                <label htmlFor="cardtype">CARD TYPE</label>
                <input type="text" required id="cardtype" />
            </div>
            <div>
                <label htmlFor="validthrough">VALID THROUGH</label>
                <input type="text" required id="validthrough" />
            </div>
            <div>
                <label htmlFor="cvccode">CVC CODE</label>
                <input type="text" required id="cvccode" />
            </div>
            <div className={classes.action}>
                <button>Pay</button>
            </div>
        </form>
    </div>
    );
}

export default PaymentForm;