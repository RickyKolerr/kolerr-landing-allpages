import { Switch } from "@/components/ui/switch";
import { useLanguage } from "@/contexts/LanguageContext";
import { Label } from "@/components/ui/label";

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <Label htmlFor="language-toggle" className="text-sm font-medium">
        {language === 'en' ? 'EN' : 'VI'}
      </Label>
      <Switch
        id="language-toggle"
        checked={language === 'vi'}
        onCheckedChange={(checked) => setLanguage(checked ? 'vi' : 'en')}
        className="data-[state=checked]:bg-purple-600"
      />
    </div>
  );
};