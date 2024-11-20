'use client';

import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';
import { Car, CheckCircle, Phone, MessageCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function CarBuyingPage() {
  const { t } = useTranslation('common');

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const benefits = [
    'Faire Preisbewertung',
    'Sofortige Barauszahlung',
    'Kostenlose Fahrzeugbewertung',
    'Abmeldung inklusive',
    'Abholung möglich',
    'Schnelle Abwicklung'
  ];

  return (
    <div className="bg-white dark:bg-gray-900">
      <Navbar />
      
      <div className="pt-16">
        {/* Hero Section */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        >
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
              {t('services.carBuying.title')}
            </h1>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
              {t('services.carBuying.description')}
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex items-start space-x-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg"
              >
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-red-600 dark:bg-red-700 rounded-2xl p-8 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <Car className="w-16 h-16 mx-auto mb-6" />
              <h2 className="text-2xl font-bold mb-4">
                Verkaufen Sie uns Ihr Fahrzeug
              </h2>
              <p className="mb-8">
                Kontaktieren Sie uns jetzt für eine kostenlose Bewertung Ihres Fahrzeugs
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