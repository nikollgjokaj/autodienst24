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
            <p>Enis Arifi</p>
            <p>GLN: 9110032490043</p>
            <p>GISA: 35133995, 35134077</p>
            <p>Am Berg 3, 3150 Wilhelmsburg</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              {t('imprint.licenses')}
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">{t('imprint.transportLicense.title')}</h3>
                <p className="text-sm">
                  {t('imprint.transportLicense.description')}
                </p>
                <p className="text-sm mt-1">{t('imprint.transportLicense.gisa')}</p>
              </div>

              <div>
                <h3 className="font-medium mb-2">{t('imprint.tradeLicense.title')}</h3>
                <p className="text-sm">
                  {t('imprint.tradeLicense.description')}
                </p>
                <p className="text-sm mt-1">{t('imprint.tradeLicense.gisa')}</p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
} 