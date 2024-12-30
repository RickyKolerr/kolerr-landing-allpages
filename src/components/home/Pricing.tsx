import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import { plans, searchPacks } from "@/config/pricing";
import { useState } from "react";
import { Language, getLanguageString } from "@/config/languages";

export const Pricing = () => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (path: string) => getLanguageString(language, `pricing.${path}`);

  return (
    <div className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center gap-4 mb-8">
            <Button
              variant={language === 'en' ? "default" : "outline"}
              onClick={() => setLanguage('en')}
              className="w-24"
            >
              English
            </Button>
            <Button
              variant={language === 'vi' ? "default" : "outline"}
              onClick={() => setLanguage('vi')}
              className="w-24"
            >
              Tiếng Việt
            </Button>
          </div>
          <h2 className="text-base font-semibold leading-7 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
            {t('title')}
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t('subtitle')}
          </p>
        </div>

        {/* Monthly Plans */}
        <div className="mx-auto mt-16 grid max-w-lg gap-8 grid-cols-1 lg:max-w-none lg:grid-cols-5">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className="flex flex-col justify-between rounded-3xl bg-white/5 p-8 ring-1 ring-white/10 xl:p-10 transition-all duration-300 hover:bg-white/10"
              style={{
                animation: `fade-up 0.5s ease-out forwards`,
                animationDelay: `${index * 0.2}s`,
                opacity: 0,
              }}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3 className="text-lg font-semibold leading-8 text-white">{plan.name}</h3>
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-300">{plan.description}</p>
                <div className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-white">${plan.price}</span>
                  <span className="text-sm font-semibold leading-6 text-gray-300">{t('perMonth')}</span>
                </div>
                <div className="text-sm text-gray-400 mt-1">
                  ${plan.yearlyPrice}{t('perYear')} ({t('yearly')})
                </div>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-300">
                  {plan.features.map((feature) => (
                    <li key={feature.name} className="flex gap-x-3 items-center">
                      {feature.included !== undefined ? (
                        feature.included ? (
                          <Check className="h-6 w-5 flex-none text-cyan-400" />
                        ) : (
                          <X className="h-6 w-5 flex-none text-gray-500" />
                        )
                      ) : (
                        <Check className="h-6 w-5 flex-none text-cyan-400" />
                      )}
                      <span>
                        {t(`features.${feature.name.toLowerCase().replace(/ /g, '')}`)}
                        {feature.value && `: ${feature.value}`}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <Button className="mt-8 w-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 hover:opacity-90 transition-all duration-300 transform hover:scale-105">
                {t('getStarted')}
              </Button>
            </div>
          ))}
        </div>

        {/* Pay-Per-Search Plans */}
        <div className="mt-24">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            {t('searchPacks')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {searchPacks.map((pack, index) => (
              <div
                key={`${pack.name}-${pack.searches}`}
                className="rounded-xl bg-white/5 p-6 ring-1 ring-white/10 text-center transition-all duration-300 hover:bg-white/10"
                style={{
                  animation: `fade-up 0.5s ease-out forwards`,
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0,
                }}
              >
                <h4 className="text-lg font-semibold text-white mb-2">
                  {pack.searches > 1 ? `${pack.searches} ${t('searches')}` : t('singleSearch')}
                </h4>
                <p className="text-3xl font-bold text-white mb-4">${pack.price}</p>
                <Button className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 hover:opacity-90">
                  {t('getStarted')}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};