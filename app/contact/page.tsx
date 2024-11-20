'use client';

import { MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactPage = () => {
    const { t, i18n } = useTranslation('common');

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="pt-16 bg-white dark:bg-gray-900">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="lg:text-center mb-12"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            {t('contact.title')}
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 lg:mx-auto">
            {t('contact.availability')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {t('contact.info')}
              </h3>
              <motion.div 
                className="space-y-6"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
              >
                <ContactItem
                  icon={<PhoneIcon className="w-6 h-6 text-red-600" />}
                  title={t('contact.labels.phone')}
                  content={t('contact.phone')}
                  href={`tel:${t('contact.phone')}`}
                />
                <ContactItem
                  icon={<MailIcon className="w-6 h-6 text-red-600" />}
                  title={t('contact.labels.email')}
                  content={t('contact.email')}
                  href={`mailto:${t('contact.email')}`}
                />
                <ContactItem
                  icon={<MapPinIcon className="w-6 h-6 text-red-600" />}
                  title={t('contact.labels.address')}
                  content={t('contact.address')}
                  href={t('contact.address')}
                />
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t('contact.hours.title')}
              </h3>
              <div className="space-y-2 text-gray-500 dark:text-gray-400">
                <motion.p 
                  className="font-medium text-red-600 mt-4"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {t('contact.hours.available')}
                </motion.p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="h-[600px] rounded-lg overflow-hidden shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2658.825983123707!2d15.5436!3d48.1234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d9b8b8b8b8b8b%3A0x0!2sAm%20Berg%203%2C%203150%20Wilhelmsburg!5e0!3m2!1sde!2sat!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const ContactItem = ({ icon, title, content, href }: { icon: JSX.Element, title: string, content: string, href?: string }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, x: -20 },
      visible: { opacity: 1, x: 0 }
    }}
    whileHover={{ scale: 1.05 }}
    className="flex items-center space-x-4"
  >
    {icon}
    <div>
      <p className="text-gray-900 dark:text-white font-medium">{title}</p>
      {href ? (
        <a href={href} className="text-gray-500 dark:text-gray-400 hover:text-red-600 transition-colors">
          {content}
        </a>
      ) : (
        <p className="text-gray-500 dark:text-gray-400">{content}</p>
      )}
    </div>
  </motion.div>
);

const TimeRow = ({ day, hours }: { day: string, hours: string }) => (
  <motion.div
    whileHover={{ x: 10 }}
    className="flex justify-between"
  >
    <span>{day}</span>
    <span>{hours}</span>
  </motion.div>
);

export default ContactPage;