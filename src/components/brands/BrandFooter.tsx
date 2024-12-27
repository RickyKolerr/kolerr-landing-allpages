import { Button } from "@/components/ui/button";

export const BrandFooter = () => {
  return (
    <footer className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Campaign?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90"
            >
              Start Free Trial
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-purple-500 text-purple-500 hover:bg-purple-500/10"
            >
              Contact Sales
            </Button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8 pt-12 border-t border-gray-800">
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="/features" className="text-gray-400 hover:text-white">Features</a></li>
              <li><a href="/pricing" className="text-gray-400 hover:text-white">Pricing</a></li>
              <li><a href="/integrations" className="text-gray-400 hover:text-white">Integrations</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="/blog" className="text-gray-400 hover:text-white">Blog</a></li>
              <li><a href="/guides" className="text-gray-400 hover:text-white">Guides</a></li>
              <li><a href="/help" className="text-gray-400 hover:text-white">Help Center</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="/careers" className="text-gray-400 hover:text-white">Careers</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="/privacy" className="text-gray-400 hover:text-white">Privacy</a></li>
              <li><a href="/terms" className="text-gray-400 hover:text-white">Terms</a></li>
              <li><a href="/security" className="text-gray-400 hover:text-white">Security</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};