import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const { t } = useTranslation();
  const formRef = useRef(null);
  const [status, setStatus] = useState('');
  const autoReplyTemplate = import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID || '';

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      );
      // If an autoreply template is provided, send a confirmation email to the sender
      if (autoReplyTemplate) {
        try {
          const fd = new FormData(formRef.current);
          const data = {
            user_name: fd.get('user_name'),
            user_email: fd.get('user_email'),
            message: fd.get('message'),
          };
          await emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            autoReplyTemplate,
            data,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
          );
        } catch (err) {
          // don't block main flow if auto-reply fails
          console.error('Auto-reply failed', err);
        }
      }
      setStatus('success');
      formRef.current.reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('contact.title')}</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">{t('contact.subtitle')}</p>

        <form ref={formRef} onSubmit={onSubmit} className="space-y-4 text-left">
          <input
            name="user_name"
            type="text"
            required
            placeholder={t('contact.name')}
            className="w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          <input
            name="user_email"
            type="email"
            required
            placeholder={t('contact.email')}
            className="w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          <textarea
            name="message"
            rows="5"
            required
            placeholder={t('contact.message')}
            className="w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          <button
            type="submit"
            className="w-full rounded-lg bg-primary-600 px-6 py-3 text-white font-semibold hover:bg-primary-700 transition-colors"
          >
            {t('contact.send')}
          </button>

          {status === 'success' && (
            <p className="text-green-600">{t('contact.success')}</p>
          )}
          {status === 'error' && (
            <p className="text-red-600">{t('contact.error')}</p>
          )}
        </form>
      </div>
    </section>
  );
}
