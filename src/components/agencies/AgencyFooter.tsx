import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const AgencyFooter = () => {
  const navigate = useNavigate();

  return (
    <footer className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Scale Your Campaign Management?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Start managing your client campaigns more efficiently today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90"
              onClick={() => navigate("/auth/register")}
            >
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-500 text-purple-500 hover:bg-purple-500/10"
              onClick={() => navigate("/contact")}
            >
              Book a Demo
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8 text-gray-300">
          <div>
            <h3 className="font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-2">
              <li>Features</li>
              <li>Pricing</li>
              <li>Case Studies</li>
              <li>Documentation</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>Help Center</li>
              <li>API Documentation</li>
              <li>Community</li>
              <li>Status</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookie Policy</li>
              <li>GDPR</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};