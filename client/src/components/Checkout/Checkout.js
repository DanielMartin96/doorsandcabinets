import React from "react";
import StripeContainer from "./StripeContainer";

const Checkout = ({ cart }) => {
  return (
    <>
      <h1>Checkout</h1>
      <StripeContainer />
    </>
  );
};

export default Checkout;
