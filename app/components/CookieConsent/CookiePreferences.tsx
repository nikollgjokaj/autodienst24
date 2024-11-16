'use client';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useCookieConsent } from './CookieManager';
import { CookieCategory } from './types';

const CookiePreferences = ({ onClose }: { onClose: () => void }) => {
  const { t } = useTranslation('common');
  const { settings, saveConsent } = useCookieConsent();
  const [localSettings, setLocalSettings] = useState(settings);

  const categories: CookieCategory[] = [
    {
      id: 'necessary',
      name: t('cookie.categories.necessary.title'),
      description: t('cookie.categories.necessary.description'),
      required: true,
    },
    {
      id: 'analytics',
      name: t('cookie.categories.analytics.title'),
      description: t('cookie.categories.analytics.description'),
    },
    {
      id: 'marketing',
      name: t('cookie.categories.marketing.title'),
      description: t('cookie.categories.marketing.description'),
    },
    {
      id: 'preferences',
      name: t('cookie.categories.preferences.title'),
      description: t('cookie.categories.preferences.description'),
    },
  ];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full m-4 p-6">
        <h2 className="text-2xl font-bold mb-4">{t('cookie.preferences.title')}</h2>
        
        <div className="space-y-4">
          {categories.map((category) => (
            <div key={category.id} className="flex items-start gap-4">
              <input
                type="checkbox"
                id={category.id}
                checked={category.required || localSettings[category.id as keyof typeof localSettings] as boolean}
                onChange={(e) => {
                  if (!category.required) {
                    setLocalSettings(prev => ({
                      ...prev,
                      [category.id]: e.target.checked,
                    }));
                  }
                }}
                disabled={category.required}
                className="mt-1"
              />
              <div>
                <label htmlFor={category.id} className="font-semibold">
                  {category.name}
                  {category.required && <span className="text-red-500 ml-2">{t('cookie.required')}</span>}
                </label>
                <p className="text-sm text-gray-600">{category.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end gap-4 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md"
          >
            {t('common.cancel')}
          </button>
          <button
            onClick={() => {
              saveConsent(localSettings);
              onClose();
            }}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md"
          >
            {t('common.save')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookiePreferences; 