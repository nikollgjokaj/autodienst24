'use client';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Car, Calendar, Gauge, Info, CheckCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CarSalesPage = () => {
  const { t } = useTranslation('common');

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const sampleCars = [
    {
      id: 1,
      title: 'BMW 320d',
      year: 2019,
      km: 85000,
      price: 19900,
      image: '/images/cars/bmw-320d.jpg',
      features: [
        t('carSales.features.automatic'),
        t('carSales.features.led'),
        t('carSales.features.nav'),
        t('carSales.features.pdc')
      ],
      sold: true
    },
    {
      id: 2,
      title: 'VW Golf 7',
      year: 2018,
      km: 98000,
      price: 15900,
      image: '/images/cars/vw-golf.jpg',
      features: ['DSG', 'Klimaautomatik', 'Apple CarPlay', 'ACC'],
      sold: true
    },
    {
      id: 3,
      title: 'Mercedes A180',
      year: 2020,
      km: 45000,
      price: 24900,
      image: '/images/cars/mercedes-a180.jpg',
      features: ['AMG-Line', 'MBUX', 'LED', 'Parkassistent'],
      sold: true
    },
    {
        id: 4,
        title: 'BMW 320d',
        year: 2019,
        km: 85000,
        price: 19900,
        image: '/images/cars/bmw-320d.jpg',
        features: ['Automatik', 'LED', 'Navi', 'PDC'],
        sold: true
      },
      {
        id: 5,
        title: 'VW Golf 7',
        year: 2018,
        km: 98000,
        price: 15900,
        image: '/images/cars/vw-golf.jpg',
        features: ['DSG', 'Klimaautomatik', 'Apple CarPlay', 'ACC'],
        sold: true
      },
      {
        id: 6,
        title: 'Mercedes A180',
        year: 2020,
        km: 45000,
        price: 24900,
        image: '/images/cars/mercedes-a180.jpg',
        features: ['AMG-Line', 'MBUX', 'LED', 'Parkassistent'],
        sold: true
      }
  ];

  return (
    <div className="pt-16 bg-white dark:bg-gray-900">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            {t('services.carSelling.title')}
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
            {t('services.carSelling.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleCars.map((car) => (
            <motion.div
              key={car.id}
              variants={fadeInUp}
              whileHover={{ scale: car.sold ? 1 : 1.03 }}
              className={`relative bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden 
                ${car.sold ? 'cursor-not-allowed' : 'cursor-pointer'}`}
            >
              {car.sold && (
                <div className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm z-10 flex flex-col items-center justify-center">
                  <CheckCircle className="w-16 h-16 text-red-600 mb-2" />
                  <span className="text-white text-2xl font-bold">{t('carSales.sold')}</span>
                </div>
              )}
              
              <div className={`relative h-48 bg-gray-200 ${car.sold ? 'filter blur-sm' : ''}`}>
                <Car className="w-24 h-24 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-400" />
              </div>
              
              <div className={`p-6 ${car.sold ? 'filter blur-sm' : ''}`}>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {car.title}
                </h3>
                
                <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{car.year}</span>
                  </div>
                  <div className="flex items-center">
                    <Gauge className="w-4 h-4 mr-1" />
                    <span>{car.km.toLocaleString()} km</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {car.features.map((feature, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-600 dark:text-gray-400"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-red-600">
                    € {car.price.toLocaleString()},-
                  </span>
                  <button 
                    className={`flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg transition
                      ${car.sold ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-700'}`}
                    disabled={car.sold}
                  >
                    <Info className="w-4 h-4" />
                    {t('services.learnMore')}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CarSalesPage; 