'use client';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { CookieSettings } from './types';

const defaultSettings: CookieSettings = {
  necessary: true, // Immer true, da erforderlich
  analytics: false,
  marketing: false,
  preferences: false,
  timestamp: new Date().toISOString(),
};

export const useCookieConsent = () => {
  const [settings, setSettings] = useState<CookieSettings>(defaultSettings);
  const [hasConsented, setHasConsented] = useState(false);

  useEffect(() => {
    try {
      const storedConsent = localStorage.getItem('cookie-consent');
      if (storedConsent) {
        const parsed = JSON.parse(storedConsent);
        if (parsed && parsed.settings) {
          setSettings(parsed.settings);
          setHasConsented(true);
        }
      }
    } catch (error) {
      // Falls ein ungültiger Wert im localStorage ist, setzen wir die Standardwerte
      localStorage.removeItem('cookie-consent');
      console.error('Error parsing cookie consent:', error);
    }
  }, []);

  const saveConsent = (newSettings: Partial<CookieSettings>) => {
    const updatedSettings = {
      ...settings,
      ...newSettings,
      timestamp: new Date().toISOString(),
    };
    
    const consentData = {
      settings: updatedSettings,
      hasConsented: true,
    };
    
    try {
      localStorage.setItem('cookie-consent', JSON.stringify(consentData));
      setSettings(updatedSettings);
      setHasConsented(true);
      
      // Hier Cookies entsprechend der Einstellungen setzen/entfernen
      applyConsent(updatedSettings);
    } catch (error) {
      console.error('Error saving cookie consent:', error);
    }
  };

  return { settings, hasConsented, saveConsent };
};

const applyConsent = (settings: CookieSettings) => {
  if (settings.analytics) {
    // Google Analytics initialisieren
  } else {
    // Google Analytics Cookies entfernen
  }
  
  if (settings.marketing) {
    // Marketing Cookies aktivieren
  } else {
    // Marketing Cookies entfernen
  }
  // ... weitere Cookie-Logik
};

export default useCookieConsent; 