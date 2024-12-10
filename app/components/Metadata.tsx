import Head from 'next/head';
import { useTranslation } from 'react-i18next';

interface MetadataProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export const Metadata = ({ 
  title, 
  description,
  image = '/og-image.jpg',
  url = 'https://autodienst24.at'
}: MetadataProps) => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  
  return (
    <Head>
      <title>{title ? `${title} | AUTODIENST24` : 'AUTODIENST24'}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Sprache */}
      <meta property="og:locale" content={currentLang} />
      <link rel="canonical" href={url} />
      
      {/* Alternative Sprachversionen */}
      <link rel="alternate" href={`${url}/de`} hrefLang="de" />
      <link rel="alternate" href={`${url}/en`} hrefLang="en" />
      <link rel="alternate" href={`${url}/tr`} hrefLang="tr" />
      <link rel="alternate" href={`${url}/sq`} hrefLang="sq" />
      <link rel="alternate" href={`${url}/sr`} hrefLang="sr" />
      <link rel="alternate" href={`${url}/hr`} hrefLang="hr" />
      <link rel="alternate" href={`${url}/bs`} hrefLang="bs" />
    </Head>
  );
}; 