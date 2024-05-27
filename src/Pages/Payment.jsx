import { Elements } from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutFrom from './CheckoutFrom';
const stripePromise =  loadStripe(import.meta.env.VITE_PAYMENT);
const Payment = () => {
    return (
        <div>
           <h1>hi there</h1> 
           <div>
            <Elements stripe={stripePromise}>

            <CheckoutFrom></CheckoutFrom>
            </Elements>
           </div>
        </div>
    );
};

export default Payment;