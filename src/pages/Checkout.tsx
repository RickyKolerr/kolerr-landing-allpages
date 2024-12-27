import { Navigation } from "@/components/layout/Navigation";
import { CheckoutForm } from "@/components/payment/CheckoutForm";

const Checkout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      <Navigation />
      <div className="container mx-auto px-4 pt-32">
        <CheckoutForm />
      </div>
    </div>
  );
};

export default Checkout;