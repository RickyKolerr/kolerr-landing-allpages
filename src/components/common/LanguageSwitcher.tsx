import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex gap-2">
      <Button
        variant={language === 'en' ? "default" : "outline"}
        onClick={() => setLanguage('en')}
        size="sm"
        className="w-20"
      >
        English
      </Button>
      <Button
        variant={language === 'vi' ? "default" : "outline"}
        onClick={() => setLanguage('vi')}
        size="sm"
        className="w-20"
      >
        Tiếng Việt
      </Button>
    </div>
  );
};