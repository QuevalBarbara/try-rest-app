import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useInitialRender } from "@/utils/useInitialRender";
import CheckoutForm from "@/components/checkoutForm";
import CheckoutCart from "@/components/checkoutCart";

export default function Checkout() {
  //change test key
  const stripePromise = loadStripe("pk_test_51NPPh7EgccRdQ2dZroHUqTJvP4QbJhi6GUw8UFCY7zI6CpAoZVMN3ZdzO3TWgqg2C0jqFDHJNfXoZeLnDTGqk61n00hL11jyIm");

  const initialRender = useInitialRender();
  if (!initialRender) return null;

  return (
    <section className="container mx-auto py-24">
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-2">
          <CheckoutCart />
        </div>
        <div className="col-span-3">
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </div>
      </div>
    </section>
  );
}