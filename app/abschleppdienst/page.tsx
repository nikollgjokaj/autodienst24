'use client';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Clock, Truck, Phone, MessageCircle, Shield, CreditCard, Map, Users } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function TowingServicePage() {
  const { t } = useTranslation('common');

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const features = [
    { icon: Clock, text: t('services.towingService.features.24hours') },
    { icon: Truck, text: t('services.towingService.features.fastResponse') },
    { icon: Users, text: t('services.towingService.features.professional') },
    { icon: CreditCard, text: t('services.towingService.features.fairPrices') },
    { icon: Shield, text: t('services.towingService.features.insurance') },
    { icon: Map, text: t('services.towingService.features.nationwide') }
  ];

  return (
    <div className="bg-white dark:bg-gray-900">
      <Navbar />
      
      <div className="pt-16">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        >
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
              {t('services.towingService.title')}
            </h1>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
              {t('services.towingService.description')}
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg text-center"
              >
                <feature.icon className="w-12 h-12 text-red-600 mb-4" />
                <span className="text-gray-700 dark:text-gray-300">{feature.text}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 bg-red-600 dark:bg-red-700 rounded-2xl p-8 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <Truck className="w-16 h-16 mx-auto mb-6" />
              <h2 className="text-2xl font-bold mb-4">
                {t('services.towingService.cta.title')}
              </h2>
              <p className="mb-8">
                {t('services.towingService.cta.description')}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="tel:0664 5171020"
                  className="flex items-center justify-center gap-2 bg-white text-red-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition"
                >
                  <Phone className="w-5 h-5" />
                  <span>{t('nav.call')}</span>
                </a>
                <a
                  href={`https://wa.me/${t('contact.phone')}?text=${encodeURIComponent(t('contact.whatsapp.message'))}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>{t('nav.whatsapp')}</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
} 