'use client';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import { Metadata } from '../components/Metadata';
import { LocalBusinessSchema } from '../components/LocalBusiness';

const AboutPage = () => {
  const { t } = useTranslation('common');
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const values = [
    {
      icon: "⭐",
      title: t('about.values.quality.title'),
      description: t('about.values.quality.description')
    },
    {
      icon: "🤝",
      title: t('about.values.reliability.title'),
      description: t('about.values.reliability.description')
    },
    {
      icon: "💎",
      title: t('about.values.transparency.title'),
      description: t('about.values.transparency.description')
    }
  ];

  return (
    <>
      <Metadata 
        title={t('about.title')}
        description={t('about.subtitle')}
      />
      <LocalBusinessSchema />
      <div className="pt-16 bg-white dark:bg-gray-900">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="lg:text-center"
          >
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              {t('about.title')}
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 lg:mx-auto">
              {t('about.subtitle')}
            </p>
<div className="mt-12 flex flex-col items-center">
  <motion.div 
    variants={fadeInUp}
    className="w-full max-w-xl mb-8"
  >
    <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-duration-300 mx-auto">
      <Image
        src="/enis.png"
        alt="Geschäftsführer Enis Arifi"
        fill
        className="object-cover object-center"
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
    </div>
  </motion.div>
  <motion.div 
    variants={fadeInUp}
    className="text-center max-w-2xl space-y-6"
  >
    <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
      Enis Arifi
    </h3>
    <p className="text-xl text-red-600 dark:text-red-500">
      {t('about.ceo.title')}
    </p>
    <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
      {t('about.ceo.description')}
    </p>
  </motion.div>
</div>
          </motion.div>

          <motion.div 
            variants={staggerChildren}
            initial="hidden"
            animate="visible"
            className="mt-16"
          >
            <motion.div 
              variants={fadeInUp}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            >
              <CounterCard 
                endValue={100} 
                label={t('about.stats.customers')} 
                icon="👥"
              />
              <CounterCard 
                endValue={24} 
                label={t('about.stats.hours')} 
                icon="⏰"
              />
              <CounterCard 
                endValue={5} 
                label={t('about.stats.experience')} 
                icon="🏆"
              />
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="grid grid-cols-1 gap-8 lg:grid-cols-2"
            >
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {t('about.history.title')}
                </h3>
                <p className="mt-4 text-gray-500 dark:text-gray-400">
                  {t('about.history.description')}
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {t('about.mission.title')}
                </h3>
                <p className="mt-4 text-gray-500 dark:text-gray-400">
                  {t('about.mission.description')}
                </p>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="mt-12"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {t('about.values.title')}
              </h3>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
                  >
                    <div className="text-3xl mb-4">{value.icon}</div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {value.title}
                    </h4>
                    <p className="mt-2 text-gray-500 dark:text-gray-400">
                      {value.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
        <Footer />
      </div>
    </>
  );
};

interface CounterCardProps {
  endValue: number;
  label: string;
  icon: string;
}

const CounterCard = ({ endValue, label, icon }: CounterCardProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = endValue;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [inView, endValue]);

  return (
    <motion.div
      ref={ref}
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center"
      whileHover={{ scale: 1.05 }}
    >
      <div className="text-4xl mb-2">{icon}</div>
      <div className="text-3xl font-bold text-red-600">{count}</div>
      <div className="text-gray-600 dark:text-gray-400">{label}</div>
    </motion.div>
  );
};

export default AboutPage; 