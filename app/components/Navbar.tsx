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
  MessageCircle
} from 'lucide-react';

const Navbar = () => {
  const { t } = useTranslation('common');
  const [activeMenu, setActiveMenu] = useState<'none' | 'desktop' | 'mobile'>('none');
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

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
      description: t('services.carBuying.description')
    },
    {
      title: t('services.carSelling.title'),
      icon: Car,
      description: t('services.carSelling.description')
    },
    {
      title: t('services.towingService.title'),
      icon: Clock,
      description: t('services.towingService.description')
    },
    {
      title: t('services.brokerage.title'),
      icon: Shield,
      description: t('services.brokerage.description')
    }
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Navbar */}
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold">
            AUTO<span className="text-red-600">DIENST24</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div 
              className="relative group"
              onMouseEnter={() => handleDesktopHover(true)}
              onMouseLeave={() => handleDesktopHover(false)}
            >
              <button className="flex items-center space-x-1 text-gray-700 hover:text-red-600 transition">
                <span>{t('nav.services')}</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              <div className={`absolute top-full -left-4 w-screen max-w-md bg-white shadow-lg rounded-lg mt-2 transition-all duration-200
                ${activeMenu === 'desktop' ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <div className="grid grid-cols-2 gap-4 p-6">
                  {services.map((service, index) => (
                    <Link 
                      key={index}
                      href="#" 
                      className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition"
                    >
                      <service.icon className="w-6 h-6 text-red-600 mt-1" />
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">{service.title}</p>
                        <p className="text-sm text-gray-500">{service.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/about" className="text-gray-700 hover:text-red-600 transition">
              {t('nav.about')}
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-red-600 transition">
              {t('nav.contact')}
            </Link>
            
            <div className="flex items-center space-x-4">
              <a
                href="tel:+436645171020" 
                className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
              >
                <Phone className="w-4 h-4" />
                <span>{t('nav.call')}</span>
              </a>
              <a
                href="https://wa.me/436645171020" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t('nav.whatsapp')}</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;