import classes from './PaymentForm.module.css';
import {NavLink} from 'react-router-dom';

function PaymentForm() {
    return(
    <div>
        <form className={classes.form}>
            <p>
                Customer information
            </p>
            <div className={classes.clear}></div>
            <div className={classes.div}>
                <label htmlFor="firstname">FIRST NAME</label>
                <input type="text" required id="firstname" />
            </div>
            <div className={classes.div}>
                <label htmlFor="lastname">LAST NAME</label>
                <input type="text" required id="lastname" />
            </div>

            <div className={classes.clear}> </div>

            <div className={classes.div}>
                <label htmlFor="email">EMAIL</label>
                <input type="text" required id="email" />
            </div>
        
            <div className={classes.div}>
                <label htmlFor="address">ADDRESS</label>
                <input type="text" required id="address" />
            </div>
            <div className={classes.div}>
                <label htmlFor="country">COUNTRY</label>
                <input type="text" required id="country" />
            </div>
            <div className={classes.clear}></div>
            <p>
                Payment details
            </p>
            <div className={classes.clear}></div>
            <div className={classes.div}>
                <label htmlFor="cardnumber">CARD NUMBER</label>
                <input type="text" required id="cardnumber" />
            </div>
            <div className={classes.div}>
                <label htmlFor="nameoncard">NAME ON CARD</label>
                <input type="text" required id="nameoncard" />
            </div>
            <div className={classes.clear}> </div>
            <div className={classes.div}>
            <label htmlFor="cardtype">CARD TYPE</label>
                <select required id="cardtype">
                    <option value="Visa">Visa</option>
                    <option value="Mastercard">Mastercard</option>
                </select>
            </div>
            <div className={classes.div}>
                <label htmlFor="validthrough">VALID THROUGH</label>
                <input type="month" required id="validthrough" />
            </div>

            <div className={classes.clear}></div>
            <div className={classes.div}>
                <label htmlFor="cvccode">CVC CODE</label>
                <input type="text" required id="cvccode" />
            </div>
            <div className={classes.clear}></div>
            <div className={classes.action}>
                <NavLink 
                to="/register"
                >
                <button>Pay</button>
                </NavLink>
            </div>
        </form>
    </div>
    );
}

export default PaymentForm;