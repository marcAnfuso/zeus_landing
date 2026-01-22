"use client";

import { useCallback, useEffect } from 'react';

export function useMetaTracking() {
  // PageView al montar el componente
  useEffect(() => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'PageView');
      console.log('Meta Pixel: PageView enviado');
    }
  }, []);

  // Click en WhatsApp
  const trackWhatsAppClick = useCallback(() => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('trackCustom', 'ClickWhatsapp1', {
        value: 2.5,
        currency: 'USD'
      });
      console.log('Meta Pixel: ClickWhatsapp1 enviado con valor $2.5 USD');
    }
  }, []);

  return {
    trackWhatsAppClick,
  };
}
