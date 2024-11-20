"use client";
import { useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { 
  Menu, 
  X, 
  Phone,
  ChevronDown,
  Car,
  Clock,
  Shield,
  ChevronRight,
  MessageCircle,
  MoonIcon,
  SunIcon
} from 'lucide-react';
import ReactCountryFlag from "react-country-flag"
import { useTheme } from '../providers/ThemeProvider';

const languages = [
  { 
    code: 'de', 
    label: 'Deutsch',
    countryCode: 'DE'
  },
  { 
    code: 'en', 
    label: 'English',
    countryCode: 'GB'
  },
  { 
    code: 'sq', 
    label: 'Shqip',
    countryCode: 'AL'
  },
  { 
    code: 'tr', 
    label: 'Türkçe',
    countryCode: 'TR'
  }
];

const Navbar = () => {
  const { t, i18n } = useTranslation('common');
  const [activeMenu, setActiveMenu] = useState<'none' | 'desktop' | 'mobile'>('none');
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleDesktopHover = (isHovered: boolean) => {
    setActiveMenu(isHovered ? 'desktop' : 'none');
  };

  const toggleMobileMenu = () => {
    setActiveMenu(activeMenu === 'mobile' ? 'none' : 'mobile');
  };

  const toggleMobileServices = () => {
    setIsMobileServicesOpen(!isMobileServicesOpen);
  };

  const services = [
    {
      title: t('services.carBuying.title'),
      icon: Car,
      description: t('services.carBuying.description'),
      link: "/fahrzeugankauf"
    },
    {
      title: t('services.carSelling.title'),
      icon: Car,
      description: t('services.carSelling.description'),
      link: "/fahrzeugverkauf"
    },
    {
      title: t('services.towingService.title'),
      icon: Clock,
      description: t('services.towingService.description'),
      link: "/abschleppdienst"
    },
    {
      title: t('services.brokerage.title'),
      icon: Shield,
      description: t('services.brokerage.description'),
      link: "/vermittlung"
    }
  ];

  // Sprache ändern
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setIsLangOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold dark:text-white">
            AUTO<span className="text-red-600 dark:text-red-500">DIENST24</span>
          </Link>

          {/* Mobile Controls */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <SunIcon className="h-6 w-6" />
              ) : (
                <MoonIcon className="h-6 w-6" />
              )}
            </button>
            
            <button 
              className="p-2"
              onClick={toggleMobileMenu}
            >
              {activeMenu === 'mobile' ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Services Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => handleDesktopHover(true)}
              onMouseLeave={() => handleDesktopHover(false)}
            >
              <button className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500 transition">
                <span>{t('nav.services')}
                </span>
                <ChevronDown className="w-4 h-4" />
              </button>

              <div className={`absolute top-full -left-4 w-screen max-w-md bg-white dark:bg-gray-800 shadow-lg rounded-lg mt-2 transition-all duration-200
                ${activeMenu === 'desktop' ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <div className="grid grid-cols-2 gap-4 p-6">
                  {services.map((service, index) => (
                    <Link 
                      key={index}
                      href={service.link} 
                      className="flex items-start p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition"
                    >
                      <service.icon className="w-6 h-6 text-red-600 dark:text-red-500 mt-1" />
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{service.title}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{service.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500 transition">
              {t('nav.about')}
            </Link>

            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <SunIcon className="h-6 w-6" />
                ) : (
                  <MoonIcon className="h-6 w-6" />
                )}
              </button>

              <a href="tel:+436645171020" 
                className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
              >
                <Phone className="w-4 h-4" />
                <span>{t('nav.call')}</span>
              </a>
              <a href="https://wa.me/436645171020" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t('nav.whatsapp')}</span>
              </a>

              {/* Language Switcher ganz rechts */}
              <div className="relative">
                <button 
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className={`
                    px-3 py-2 rounded-md 
                    bg-gray-200 dark:bg-gray-700 
                    hover:bg-gray-300 dark:hover:bg-gray-600 
                    transition-all duration-200
                    ${isLangOpen ? 'ring-2 ring-red-500 ring-opacity-50' : ''}
                  `}
                >
                  <div className="flex items-center gap-2">
                    <ReactCountryFlag
                      countryCode={languages.find(lang => lang.code === i18n.language)?.countryCode || 'DE'}
                      svg
                      style={{
                        width: '1.5em',
                        height: '1.5em',
                      }}
                      className="rounded-sm"
                    />
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isLangOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </button>

                {isLangOpen && (
                  <div className="
                    absolute top-full right-0 mt-2 
                    bg-white dark:bg-gray-800 
                    shadow-lg rounded-md overflow-hidden 
                    min-w-[120px]
                    border border-gray-100 dark:border-gray-700
                    animate-in fade-in slide-in-from-top-2 duration-200
                  ">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className="
                          block w-full px-3 py-2 
                          text-left hover:bg-gray-100 dark:hover:bg-gray-700
                          flex items-center gap-3
                          transition-colors
                          text-gray-700 dark:text-gray-200
                        "
                      >
                        <ReactCountryFlag
                          countryCode={lang.countryCode}
                          svg
                          style={{
                            width: '1.5em',
                            height: '1.5em',
                          }}
                          className="rounded-sm"
                        />
                        <span className="text-sm">{lang.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {activeMenu === 'mobile' && (
            <div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-800 shadow-lg md:hidden">
              {/* Services Dropdown Mobile */}
              <div className="border-b border:border-gray-200 dark:border-gray-700">
                <button 
                  onClick={toggleMobileServices}
                  className="flex items-center justify-between w-full p-4 text-gray-700 dark:text-gray-300"
                >
                  <span>{t('nav.services')}</span>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isMobileServicesOpen ? 'rotate-90' : ''}`} />
                </button>
                
                {isMobileServicesOpen && (
                  <div className="bg-gray-50 dark:bg-gray-700/50 px-4">
                    {services.map((service, index) => (
                      <Link 
                        key={index}
                        href={service.link} 
                        className="flex items-start p-4 border-b border-gray-200 dark:border-gray-700 last:border-0"
                      >
                        <service.icon className="w-6 h-6 text-red-600 dark:text-red-500 mt-1" />
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{service.title}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{service.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Andere Navigation Links */}
              <Link 
                href="/about" 
                className="block p-4 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50 border-b border-gray-200 dark:border-gray-700"
              >
                {t('nav.about')}
              </Link>
              <Link 
                href="/contact" 
                className="block p-4 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50 border-b border-gray-200 dark:border-gray-700"
              >
                {t('nav.contact')}
              </Link>

              {/* Contact Buttons */}
              <div className="p-4 space-y-2">
                <a 
                  href="tel:+436645171020" 
                  className="flex items-center justify-center space-x-2 bg-red-600 text-white p-3 rounded-md hover:bg-red-700 transition w-full"
                >
                  <Phone className="w-4 h-4" />
                  <span>{t('nav.call')}</span>
                </a>
                <a 
                  href="https://wa.me/436645171020"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center space-x-2 bg-green-600 text-white p-3 rounded-md hover:bg-green-700 transition w-full"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{t('nav.whatsapp')}</span>
                </a>
              </div>

              {/* Language Switcher Mobile */}
              <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex flex-col space-y-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className="flex items-center space-x-3 p-2 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-md text-gray-700 dark:text-gray-300"
                    >
                      <ReactCountryFlag
                        countryCode={lang.countryCode}
                        svg
                        style={{
                          width: '1.5em',
                          height: '1.5em',
                        }}
                        className="rounded-sm"
                      />
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;