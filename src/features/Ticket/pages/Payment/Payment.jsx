import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51JN6JuAe7sFLRsUwIR6sdHibNOgJvtknpitwEu83YsqsEOVfWNAL4lk9zqjzXi4yAzAJaQMulbaWrKkF0Q5aOqWC00Q7cQbEan');

const Payment = () => {

  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  )
}

export default Payment;
