import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './Payment.scss';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    stripe.createToken(cardElement)
      .then(res => console.log(res))
      .catch(err => console.log(err))

  };

  return (
    <div className="center">
      <form className="form-checkout" onSubmit={handleSubmit}>
        <h4 className="checkout-title">Thanh toán bằng thẻ</h4>
        <label className="checkout-label">Email</label>
        <input className="checkou-input" value={user.Email} disabled />
        <label className="checkout-label">Tên trên thẻ</label>
        <input name="name" className="checkou-input" />
        <label className="checkout-label">Thông tin thẻ</label>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '14px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className="btn-pay" type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
    </div>
  )
}

export default CheckoutForm;
