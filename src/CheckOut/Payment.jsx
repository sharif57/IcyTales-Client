// import loadStripe and Elements
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

// Initialize stripePromise with your publishable key
const stripePromise = loadStripe("your-publishable-key");

const Payment = () => {
    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm />
        </Elements>
    );
};

export default Payment;
