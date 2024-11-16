"use client";
import { useTranslation } from 'next-i18next';

const Hero = () => {
  const { t } = useTranslation('common');
  
  return (
    <section className="relative min-h-screen w-full bg-gradient-to-r from-gray-900 to-gray-800 mt-[-64px]">
      <div className="absolute inset-0 hidden md:block">
        <img
          src="/autodienst24.svg"
          alt={t('hero.background.alt')}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 block md:hidden">
        <img
          src="/mobile.svg"
          alt={t('hero.background.altMobile')}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative max-w-7xl mx-auto px-4 min-h-screen flex items-center pt-16">
        <div className="text-white space-y-6 w-full md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 drop-shadow-lg">
            {t('hero.title')}
            <br />
            <span className="text-red-500">{t('hero.subtitle')}</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl font-light leading-relaxed tracking-wide">
            {t('hero.description.prefix')}
            <span className="font-medium text-red-400"> {t('hero.description.highlight')} </span> 
            {t('hero.description.suffix')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href="#services" 
              className="bg-gradient-to-r from-red-600 to-red-700 px-6 md:px-8 py-3 md:py-4 rounded-lg text-white font-bold hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-red-500/30 text-center"
            >
              {t('hero.buttons.services')}
            </a>
            <a 
              href="tel:+436645171020" 
              className="bg-white/10 backdrop-blur-sm px-6 md:px-8 py-3 md:py-4 rounded-lg text-white font-bold hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40 shadow-lg text-center"
            >
              {t('hero.buttons.call')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 