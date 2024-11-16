'use client';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useCookieConsent } from './CookieManager';

const CookieBanner = () => {
  const { t } = useTranslation('common');
  const { hasConsented, saveConsent } = useCookieConsent();
  const [showPreferences, setShowPreferences] = useState(false);

  if (hasConsented && !showPreferences) return null;

  return (
    <>
      {showPreferences ? (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-900/95 text-white p-4 shadow-lg z-50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm">
              <p>{t('cookie.preferences.message')}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-900/95 text-white p-4 shadow-lg z-50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm">
              <p>{t('cookie.banner.message')}</p>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => setShowPreferences(true)}
                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md transition-colors"
              >
                {t('cookie.preferences')}
              </button>
              <button
                onClick={() => saveConsent({ necessary: true })}
                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md transition-colors"
              >
                {t('cookie.essential')}
              </button>
              <button
                onClick={() => saveConsent({
                  necessary: true,
                  analytics: true,
                  marketing: true,
                  preferences: true,
                })}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md transition-colors"
              >
                {t('cookie.acceptAll')}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieBanner; 