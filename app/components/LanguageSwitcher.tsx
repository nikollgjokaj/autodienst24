'use client';

import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const languages = [
  { code: 'de', label: 'Deutsch' },
  { code: 'en', label: 'English' }
];

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 flex items-center gap-2"
      >
        {languages.find(lang => lang.code === i18n.language)?.label}
        <span className="text-xs">▼</span>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-white shadow-lg rounded-md overflow-hidden">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className="block w-full px-4 py-2 text-left hover:bg-gray-100"
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}; 