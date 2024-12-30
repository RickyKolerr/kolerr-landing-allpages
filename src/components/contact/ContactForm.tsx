import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getLanguageString } from "@/config/languages";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export const ContactForm = () => {
  const { language } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    toast({
      title: getLanguageString(language, 'contact.form.successTitle'),
      description: getLanguageString(language, 'contact.form.successMessage'),
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white/5 p-6 rounded-lg backdrop-blur-sm">
      <div>
        <Input
          placeholder={getLanguageString(language, 'contact.form.namePlaceholder')}
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          className="bg-white/10"
        />
      </div>
      <div>
        <Input
          type="email"
          placeholder={getLanguageString(language, 'contact.form.emailPlaceholder')}
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className="bg-white/10"
        />
      </div>
      <div>
        <Input
          placeholder={getLanguageString(language, 'contact.form.subjectPlaceholder')}
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          required
          className="bg-white/10"
        />
      </div>
      <div>
        <Textarea
          placeholder={getLanguageString(language, 'contact.form.messagePlaceholder')}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
          className="min-h-[150px] bg-white/10"
        />
      </div>
      <Button type="submit" className="w-full bg-purple-500 hover:bg-purple-600">
        {getLanguageString(language, 'contact.form.submit')}
      </Button>
    </form>
  );
};