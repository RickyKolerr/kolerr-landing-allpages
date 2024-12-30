import { useLanguage } from "@/contexts/LanguageContext";
import { getLanguageString } from "@/config/languages";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const ContactInfo = () => {
  const { language } = useLanguage();

  const contactDetails = [
    {
      icon: <MapPin className="w-5 h-5" />,
      label: getLanguageString(language, 'contact.info.address'),
      value: "123 Business Street, Ho Chi Minh City, Vietnam",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: getLanguageString(language, 'contact.info.phone'),
      value: "+84 123 456 789",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: getLanguageString(language, 'contact.info.email'),
      value: "contact@kolerr.com",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      label: getLanguageString(language, 'contact.info.hours'),
      value: "Mon - Fri: 9:00 AM - 6:00 PM",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="prose prose-invert">
        <h2 className="text-2xl font-semibold mb-4">
          {getLanguageString(language, 'contact.info.title')}
        </h2>
        <p className="text-gray-300">
          {getLanguageString(language, 'contact.info.description')}
        </p>
      </div>
      
      <div className="space-y-6">
        {contactDetails.map((detail, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="p-3 bg-purple-500/10 rounded-lg text-purple-500">
              {detail.icon}
            </div>
            <div>
              <h3 className="font-medium text-gray-200">{detail.label}</h3>
              <p className="text-gray-400">{detail.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};