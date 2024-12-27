import { Navigation } from "@/components/layout/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Coming Soon",
      description: "Authentication will be implemented with Supabase integration",
    });
  };

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Coming Soon",
      description: "Password reset will be implemented with Supabase integration",
    });
  };

  if (isForgotPassword) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
        <Navigation />
        <div className="container mx-auto px-4 pt-32">
          <div className="max-w-md mx-auto">
            <div className="bg-white/5 backdrop-blur-lg rounded-lg shadow-xl p-8 animate-fade-up">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white">Reset Password</h2>
                <p className="text-gray-400 mt-2">
                  Enter your email to receive reset instructions
                </p>
              </div>
              <form onSubmit={handleForgotPassword} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300">
                    Email
                  </label>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="mt-1 w-full bg-white/10 border-white/20 text-white"
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 hover:opacity-90">
                  Send Reset Instructions
                </Button>
              </form>
              <div className="mt-6 text-center">
                <button
                  onClick={() => setIsForgotPassword(false)}
                  className="text-sm text-gray-400 hover:text-white"
                >
                  Back to Sign In
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      <Navigation />
      <div className="container mx-auto px-4 pt-32">
        <div className="max-w-md mx-auto">
          <div className="bg-white/5 backdrop-blur-lg rounded-lg shadow-xl p-8 animate-fade-up">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white">
                {isLogin ? "Welcome back" : "Create an account"}
              </h2>
              <p className="text-gray-400 mt-2">
                {isLogin
                  ? "Sign in to your account"
                  : "Join the Kolerr community today"}
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-gray-300">
                    Full Name
                  </label>
                  <Input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="mt-1 w-full bg-white/10 border-white/20 text-white"
                  />
                </div>
              )}
              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Email
                </label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="mt-1 w-full bg-white/10 border-white/20 text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Password
                </label>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="mt-1 w-full bg-white/10 border-white/20 text-white"
                />
              </div>
              {isLogin && (
                <div className="text-right">
                  <button
                    type="button"
                    onClick={() => setIsForgotPassword(true)}
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    Forgot password?
                  </button>
                </div>
              )}
              <Button className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 hover:opacity-90">
                {isLogin ? "Sign In" : "Sign Up"}
              </Button>
            </form>
            <div className="mt-6 text-center">
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-sm text-gray-400 hover:text-white"
              >
                {isLogin
                  ? "Don't have an account? Sign up"
                  : "Already have an account? Sign in"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;