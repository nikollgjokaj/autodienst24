"use client";
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import mobile from '@/public/mobile.svg';
import desktop from '@/public/autodienst24AT.svg';

const Hero = () => {
  const { t } = useTranslation('common');
  
  return (
    <section className="relative min-h-screen w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-black dark:via-gray-900 dark:to-black mt-[-64px]">
      {/* Background Images */}
      <div className="absolute inset-0 hidden md:block">
        <Image
          src={desktop}
          alt={t('hero.background.alt')}
          className="w-full h-full object-cover opacity-80 transition-opacity duration-300"
        />
      </div>
      <div className="absolute inset-0 block md:hidden">
        <Image
          src={mobile}
          alt={t('hero.background.altMobile')}
          className="object-cover object-center transition-opacity duration-300"
          priority
          fill
        />
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 min-h-screen flex items-center pt-16">
        <div className="text-white space-y-8 w-full md:w-3/5 animate-fadeIn">
          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-300 drop-shadow-lg">
              {t('hero.title')}
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
              {t('hero.subtitle')}
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl font-light leading-relaxed tracking-wide">
            {t('hero.description.prefix')}
            <span className="font-medium text-red-400"> {t('hero.description.highlight')} </span> 
            {t('hero.description.suffix')}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 pt-6">
            <a 
              href="#services" 
              className="group bg-gradient-to-r from-red-600 to-red-700 px-8 py-4 rounded-lg text-white font-bold 
                hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg 
                hover:shadow-red-500/30 text-center transform hover:scale-105"
            >
              {t('hero.buttons.services')}
            </a>
            <a 
              href="tel:+436645171020" 
              className="group bg-white/10 backdrop-blur-sm px-8 py-4 rounded-lg text-white font-bold 
                hover:bg-white/20 transition-all duration-300 border border-white/20 
                hover:border-white/40 shadow-lg text-center transform hover:scale-105"
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