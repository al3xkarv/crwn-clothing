import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableΚey =
    "pk_test_51GzoHWLLmV8box3xm63lBmLRlDutOvCLp4OISNPhTiaG5dPiCaMpMjfeM2UWd89s6OQgqDar6SQVss7BSiEQYmCb00neiAPrBP";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Succesful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableΚey}
    />
  );
};

export default StripeCheckoutButton;
