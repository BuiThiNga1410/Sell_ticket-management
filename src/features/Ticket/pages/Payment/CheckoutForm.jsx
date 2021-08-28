import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './Payment.scss';
import { useHistory, useLocation } from 'react-router-dom';
import myaxios from '../../../../app/api';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const user = JSON.parse(localStorage.getItem('user'));
  const location = useLocation();
  const history = useHistory();

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();
    const money = document.getElementById('money').value;
    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    stripe.createToken(cardElement)
      .then(() => {
        myaxios.post('/tickets/', {
          "MaKh": location.state.MaKh,
          "MaChoNgoi": location.state.MaChoNgoi,
          "MaChuyenXe": location.state.MaChuyenXe,
          "NgayDi": location.state.NgayDi,
          "GhiChu": location.state.GhiChu,
          "DaThanhToan": +money / location.state.MaChoNgoi.length,
        })
          .then(() => {
            history.push('/account/purchase');
          })
          .catch((error) => {
            console.log(error);
          })
      })
      .catch(err => console.log(err))

  };

  return (
    <div className="center">
      <form className="form-checkout" onSubmit={handleSubmit}>
        <h4 className="checkout-title">Thanh toán bằng thẻ</h4>
        <label className="checkout-label">Email</label>
        <input className="checkou-input" value={user.Email} disabled />
        <label className="checkout-label" htmlFor="money">Số tiền</label>
        <input 
          type="number" 
          id="money" 
          className="checkou-input" 
          required 
          min={location.state.Price * location.state.MaChoNgoi.length/2} 
          max={location.state.Price * location.state.MaChoNgoi.length}
          />
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
