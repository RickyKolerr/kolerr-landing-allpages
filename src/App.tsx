import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Loader2 } from "lucide-react";
import { LanguageProvider } from "@/contexts/LanguageContext";

// Optimize lazy loading with prefetch
const Index = lazy(() => {
  console.log("Loading Index page");
  return import("./pages/Index");
});
const Auth = lazy(() => {
  console.log("Loading Auth page");
  return import("./pages/Auth");
});
const ForKols = lazy(() => {
  console.log("Loading ForKols page");
  return import("./pages/ForKols");
});
const ForBrands = lazy(() => {
  console.log("Loading ForBrands page");
  return import("./pages/ForBrands");
});
const ForAgencies = lazy(() => {
  console.log("Loading ForAgencies page");
  return import("./pages/ForAgencies");
});
const Pricing = lazy(() => {
  console.log("Loading Pricing page");
  return import("./pages/Pricing");
});
const Checkout = lazy(() => {
  console.log("Loading Checkout page");
  return import("./pages/Checkout");
});
const Chat = lazy(() => {
  console.log("Loading Chat page");
  return import("./pages/Chat");
});
const Slot = lazy(() => {
  console.log("Loading Slot page");
  return import("./pages/Slot");
});
const Features = lazy(() => {
  console.log("Loading Features page");
  return import("./pages/Features");
});
const Contact = lazy(() => {
  console.log("Loading Contact page");
  return import("./pages/Contact");
});

// Optimize loading spinner with smaller size and better positioning
const LoadingSpinner = () => (
  <div className="min-h-[50vh] flex items-center justify-center">
    <Loader2 className="w-6 h-6 animate-spin text-purple-500" />
  </div>
);

// Optimize QueryClient configuration
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
      retry: 1,
      refetchOnWindowFocus: false, // Prevent unnecessary refetches
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/auth/*" element={<Auth />} />
              <Route path="/for-kols" element={<ForKols />} />
              <Route path="/for-brands" element={<ForBrands />} />
              <Route path="/for-agencies" element={<ForAgencies />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/slot" element={<Slot />} />
              <Route path="/features" element={<Features />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;