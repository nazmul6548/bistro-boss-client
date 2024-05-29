import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../component/useAxiosSecure";
import useCart from "../component/useCart";
import { AuthContext } from "../component/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CheckoutForm = () => {
  const axiosSecure = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const { user } = useContext(AuthContext);
  const [error, setError] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  const [cart,refetch] = useCart();
  const navigate = useNavigate();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure.post('/create-payment-intent', { price: totalPrice })
        .then(res => {
          console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret);
          
        })
      
    }
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      // setError("Stripe.js has not loaded yet. Please try again later.");
      return;
    }
    
    const card = elements.getElement(CardElement);
    if (card === null) {
      // setError("Card element not found.");
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card
    });




    if (error) {
      console.log('payment error', error);
      setError(error.message);
  }
  else {
      console.log('payment method', paymentMethod)
      setError('');
  }






    





   
      const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          }
        }
      });

      if (confirmError) {
        console.log("Confirm error", confirmError);
        setError(confirmError.message);
      } else {
        console.log("Payment", paymentIntent);
        if (paymentIntent.status === "succeeded") {
          console.log("Transaction ID", paymentIntent.id);
          setTransactionId(paymentIntent.id);

          const payment = {
            email: user.email,
            price: totalPrice,
            transactionId: paymentIntent.id,
            date: new Date(),
            cartIds: cart.map(item => item._id),
            menuItemIds: cart.map(item => item.menuId),
            status: "pending"
          }
          const res = await axiosSecure.post("/payments", payment)
          console.log('payment saved', res.data);
                refetch();

                if (res.data?.paymentResult?.insertedId) {
                  Swal.fire({
                      position: "top-end",
                      icon: "success",
                      title: "Thank you for the taka paisa",
                      showConfirmButton: false,
                      timer: 1500
                  });
                  navigate('/dashboard/paymenthis')
              }

          }
      }

  }
   

  return (
    <form onSubmit={handleSubmit}>
      <CardElement   options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }} />
      <p>{error}</p>
      {transactionId && <p className="text-green">Your transaction ID: {transactionId}</p>}
      <button type="submit" className="px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-orange-700 outline-none bg-transparent hover:bg-orange-700 text-orange-700 hover:text-white transition-all duration-300" >
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;