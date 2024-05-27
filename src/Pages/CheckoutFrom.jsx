import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";



const CheckoutFrom = () => {
const stripe = useStripe()
const elements = useElements()
    const handleSubmit = async(event) => {
event.preventDefault();
if (!stripe || !elements) {
    return 
}
const card = elements.getElement(CardElement)
if (card == null) {
    return;
  }
    }
    return (
        <form onSubmit={handleSubmit}>
            <CardElement options={{
    iconStyle: 'solid',
    style: {
      base: {
        iconColor: '#c4f0ff',
        color: '#fff',
        fontSize: '16px',
      },
      invalid: {
        iconColor: '#FFC7EE',
        color: '#FFC7EE',
      },
    },
  }}>

            </CardElement>
            
        </form>
    );
};

export default CheckoutFrom;