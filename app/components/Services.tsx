"use client";
import { useTranslation } from 'next-i18next';
import { CarIcon, ClockIcon, ShieldIcon, WrenchIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
  const { t } = useTranslation('common');

  const services = [
    {
      title: t('services.carBuying.title'),
      icon: CarIcon,
      description: t('services.carBuying.description'),
      color: "bg-blue-50"
    },
    {
      title: t('services.carSelling.title'),
      icon: CarIcon,
      description: t('services.carSelling.description'),
      color: "bg-red-50"
    },
    {
      title: t('services.towingService.title'),
      icon: ClockIcon,
      description: t('services.towingService.description'),
      color: "bg-green-50"
    },
    {
      title: t('services.brokerage.title'),
      icon: ShieldIcon,
      description: t('services.brokerage.description'),
      color: "bg-purple-50"
    },
    {
      title: t('services.parts.title'),
      icon: WrenchIcon,
      description: t('services.parts.description'),
      color: "bg-orange-50"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
          >
            {t('services.heading')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto"
          >
            {t('services.subheading')}
          </motion.p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`relative p-8 rounded-2xl ${service.color} overflow-hidden group`}
            >
              <div className="absolute right-4 top-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <service.icon size={80} />
              </div>
              
              <div className="relative">
                <div className="inline-flex items-center justify-center p-3 bg-white rounded-xl shadow-sm">
                  <service.icon className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-gray-600">
                  {service.description}
                </p>
              </div>

              <div className="mt-6">
                <a 
                  href="#contact" 
                  className="inline-flex items-center text-sm font-medium text-red-600 hover:text-red-700"
                >
                  {t('services.learnMore')}
                  <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;