import PaymentText from "../components/PaymentText";
import PaymentForm from "../components/PaymentForm";
import MainNavBar from '../components/MainNavBar';
function Payment() {
    return(
        <div>
            <MainNavBar/>
            <PaymentText text="For 60€ a month you can get access to our services and create your account. 
            Please fill out the fields below so you can subscribe." />
            <PaymentForm />
        </div>
    );
}

export default Payment;