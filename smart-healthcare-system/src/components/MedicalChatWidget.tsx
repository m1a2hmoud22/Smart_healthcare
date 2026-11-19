'use client';

import { useEffect } from 'react';

export default function MedicalChatWidget() {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.type = 'module';
    script.innerHTML = `
      import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
      createChat({
        webhookUrl: 'https://a0h2med2.app.n8n.cloud/webhook/5136002c-d2b6-4304-bd82-18e4828b60e1/chat',
        initialMessages: [
          'Hello! 👋 Welcome to Smart Healthcare System. Describe your symptoms, and I will guide you to the right specialist and doctors.'
        ],
        i18n: {
          en: {
            title: 'AI Medical Assistant',
            subtitle: 'Describe your symptoms to find the right specialist',
            inputPlaceholder: 'e.g., I have heart palpitations...',
          },
        },
      });
    `;
    document.body.appendChild(script);
  }, []);

  return null;
}