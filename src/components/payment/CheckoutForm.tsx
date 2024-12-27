import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { CreditCard, Paypal } from "lucide-react";
import { useState } from "react";

const paymentMethods = [
  {
    id: "credit-card",
    name: "Credit Card",
    icon: CreditCard,
  },
  {
    id: "paypal",
    name: "PayPal",
    icon: Paypal,
  },
  {
    id: "momo",
    name: "MoMo",
    icon: () => (
      <img
        src="/lovable-uploads/b4cad0cb-fe38-4a99-b928-fbd480e8c22e.png"
        alt="MoMo"
        className="w-5 h-5"
      />
    ),
  },
  {
    id: "vnpay",
    name: "VNPay",
    icon: () => (
      <img
        src="/lovable-uploads/4ae7b41e-8029-4f8f-88f3-32e7f15fb20c.png"
        alt="VNPay"
        className="w-5 h-5"
      />
    ),
  },
];

export const CheckoutForm = () => {
  const [selectedMethod, setSelectedMethod] = useState("credit-card");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Coming Soon",
      description: "Payment processing will be implemented with Stripe and other providers",
    });
  };

  return (
    <div className="max-w-md mx-auto bg-white/5 backdrop-blur-lg rounded-lg shadow-xl p-8">
      <h2 className="text-2xl font-bold text-white mb-6">Complete Purchase</h2>
      
      <div className="mb-6">
        <h3 className="text-lg font-medium text-white mb-4">Payment Method</h3>
        <div className="grid grid-cols-2 gap-4">
          {paymentMethods.map((method) => (
            <button
              key={method.id}
              onClick={() => setSelectedMethod(method.id)}
              className={`p-4 rounded-lg border ${
                selectedMethod === method.id
                  ? "border-purple-500 bg-purple-500/10"
                  : "border-gray-700 hover:border-gray-600"
              } transition-colors flex items-center gap-2`}
            >
              <method.icon className="w-5 h-5 text-gray-300" />
              <span className="text-gray-300">{method.name}</span>
            </button>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {selectedMethod === "credit-card" && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Card Number
              </label>
              <Input
                type="text"
                placeholder="1234 5678 9012 3456"
                className="bg-white/10 border-white/20 text-white"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Expiry Date
                </label>
                <Input
                  type="text"
                  placeholder="MM/YY"
                  className="bg-white/10 border-white/20 text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  CVC
                </label>
                <Input
                  type="text"
                  placeholder="123"
                  className="bg-white/10 border-white/20 text-white"
                />
              </div>
            </div>
          </>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Name on Card
          </label>
          <Input
            type="text"
            placeholder="John Doe"
            className="bg-white/10 border-white/20 text-white"
          />
        </div>

        <div className="pt-4">
          <Button className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 hover:opacity-90">
            Pay Now
          </Button>
        </div>
      </form>

      <div className="mt-6 text-center text-sm text-gray-400">
        By completing this purchase, you agree to our Terms of Service and Privacy Policy
      </div>
    </div>
  );
};