'use client';

import { TranslationProvider } from '../providers/TranslationProvider';
import { I18nextProvider } from 'react-i18next';
import { ThemeProvider } from '../providers/ThemeProvider';
import i18n from '../../i18n';

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <TranslationProvider>
        <I18nextProvider i18n={i18n}>
          {children}
        </I18nextProvider>
      </TranslationProvider>
    </ThemeProvider>
  );
} 