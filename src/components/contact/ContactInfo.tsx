import { useLanguage } from "@/contexts/LanguageContext";
import { getLanguageString } from "@/config/languages";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";

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
        <h2 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          {getLanguageString(language, 'contact.info.title')}
        </h2>
        <p className="text-gray-300 leading-relaxed">
          {getLanguageString(language, 'contact.info.description')}
        </p>
      </div>
      
      <div className="space-y-6">
        {contactDetails.map((detail, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="flex items-start space-x-4 group"
          >
            <div className="p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg text-purple-400 group-hover:scale-110 transition-transform duration-200">
              {detail.icon}
            </div>
            <div>
              <h3 className="font-medium text-gray-200 mb-1">{detail.label}</h3>
              <p className="text-gray-400">{detail.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 pt-8 border-t border-white/10">
        <div className="grid grid-cols-2 gap-4">
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-4 py-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-200 text-sm text-gray-300"
          >
            <MapPin className="w-4 h-4 mr-2" />
            View on Map
          </a>
          <a
            href="mailto:contact@kolerr.com"
            className="flex items-center justify-center px-4 py-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-200 text-sm text-gray-300"
          >
            <Mail className="w-4 h-4 mr-2" />
            Email Us
          </a>
        </div>
      </div>
    </div>
  );
};