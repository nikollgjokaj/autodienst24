export type CookieCategory = {
  id: string;
  name: string;
  description: string;
  required?: boolean;
};

export type CookieSettings = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
  timestamp: string;
};

export type CookieConsentState = {
  settings: CookieSettings;
  hasConsented: boolean;
}; 