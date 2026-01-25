import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('about.title')}</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">{t('about.bio')}</p>
        <p className="text-gray-600 dark:text-gray-300">{t('about.goal')}</p>
      </div>
    </section>
  );
}
