import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <div className="flex justify-center">
          <img
            src="/avatar.png"
            alt="Profile"
            className="h-40 w-40 md:h-48 md:w-48 rounded-full object-cover shadow-lg ring-4 ring-white/60 dark:ring-gray-800/80"
          />
        </div>
        <p className="text-sm uppercase tracking-widest text-primary-600">{t('hero.badge')}</p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          {t('hero.name')}
          <span className="block text-primary-600">{t('hero.role')}</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
          {t('hero.intro')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            {t('hero.ctaPrimary')}
          </a>
          <a
            href="/cv.pdf"
            className="px-6 py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 rounded-lg font-semibold hover:bg-primary-50 dark:hover:bg-gray-800 transition-colors inline-flex items-center justify-center gap-2"
            download
          >
            <ArrowDownTrayIcon className="h-5 w-5" />
            {t('hero.ctaSecondary')}
          </a>
        </div>
      </div>
    </section>
  );
}
