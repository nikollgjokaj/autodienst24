'use client';

import { useTranslation } from 'next-i18next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ImprintPage() {
  const { t } = useTranslation('common');

  return (
    <div className="pt-16 bg-white dark:bg-gray-900">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          {t('footer.legal.imprint')}
        </h1>

        <div className="space-y-8 text-gray-600 dark:text-gray-400">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              {t('imprint.companyDetails')}
            </h2>
            <p>{t('footer.company.title')}</p>
            <p>{t('contact.address')}</p>
            <p>{t('imprint.country')}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              {t('contact.info')}
            </h2>
            <p>{t('contact.labels.phone')}: {t('contact.phone')}</p>
            <p>{t('contact.labels.email')}: {t('contact.email')}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              {t('imprint.companyInfo')}
            </h2>
            <p>{t('imprint.companyNumber')}</p>
            <p>{t('imprint.companyCourt')}</p>
            <p>{t('imprint.vatId')}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              {t('imprint.supervisoryAuthority')}
            </h2>
            <p>{t('imprint.authority')}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              {t('imprint.professionalTitle')}
            </h2>
            <p>{t('imprint.title')}</p>
            <p>{t('imprint.awardedIn')}</p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
} 