import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getLanguageString } from "@/config/languages";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export const ContactForm = () => {
  const { language } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: getLanguageString(language, 'contact.form.successTitle'),
        description: getLanguageString(language, 'contact.form.successMessage'),
      });
      
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <Input
          placeholder={getLanguageString(language, 'contact.form.namePlaceholder')}
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
        />
        <Input
          type="email"
          placeholder={getLanguageString(language, 'contact.form.emailPlaceholder')}
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
        />
        <Input
          placeholder={getLanguageString(language, 'contact.form.subjectPlaceholder')}
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          required
          className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
        />
        <Textarea
          placeholder={getLanguageString(language, 'contact.form.messagePlaceholder')}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
          className="min-h-[150px] bg-white/10 border-white/20 text-white placeholder:text-gray-400"
        />
      </div>
      
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          >
            <Send className="w-5 h-5" />
          </motion.div>
        ) : (
          <>
            <Send className="w-5 h-5" />
            {getLanguageString(language, 'contact.form.submit')}
          </>
        )}
      </Button>
    </form>
  );
};