'use client';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

const AboutPage = () => {
  const { t } = useTranslation();
  
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

  return (
    <div className="pt-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="lg:text-center"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Über AUTODIENST24
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 lg:mx-auto">
            Ihr zuverlässiger Partner für alle Autobelange in Wilhelmsburg und Umgebung.
          </p>
        </motion.div>

        <motion.div 
          variants={staggerChildren}
          initial="hidden"
          animate="visible"
          className="mt-16"
        >
          {/* Statistiken mit Counter Animation */}
          <motion.div 
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            <CounterCard 
              endValue={+100} 
              label="Zufriedene Kunden" 
              icon="👥"
            />
            <CounterCard 
              endValue={24} 
              label="Stunden Service" 
              icon="⏰"
            />
            <CounterCard 
              endValue={5} 
              label="Jahre Erfahrung" 
              icon="🏆"
            />
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            className="grid grid-cols-1 gap-8 lg:grid-cols-2"
          >
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Unsere Geschichte
              </h3>
              <p className="mt-4 text-gray-500 dark:text-gray-400">
                Seit unserer Gründung setzen wir auf Qualität, Zuverlässigkeit und 
                erstklassigen Kundenservice. Mit jahrelanger Erfahrung in der 
                Automobilbranche bieten wir umfassende Dienstleistungen für unsere Kunden.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Unsere Mission
              </h3>
              <p className="mt-4 text-gray-500 dark:text-gray-400">
                Wir streben danach, unseren Kunden den bestmöglichen Service zu bieten 
                und sind stolz darauf, ein vertrauenswürdiger Partner in allen 
                Autoangelegenheiten zu sein.
              </p>
            </div>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            className="mt-12"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Unsere Werte
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
    </div>
  );
};

// Counter Komponente
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

const values = [
  {
    icon: "⭐",
    title: "Qualität",
    description: "Wir setzen auf hochwertige Arbeit und erstklassigen Service."
  },
  {
    icon: "🤝",
    title: "Zuverlässigkeit",
    description: "24/7 für unsere Kunden da, wenn sie uns brauchen."
  },
  {
    icon: "💎",
    title: "Transparenz",
    description: "Faire Preise und klare Kommunikation mit unseren Kunden."
  }
];

export default AboutPage; 