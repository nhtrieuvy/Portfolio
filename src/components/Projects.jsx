import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'Modern portfolio with dark mode, i18n, and animations.',
    tech: ['React', 'Tailwind', 'Headless UI'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop',
    demo: 'https://example.com',
    github: 'https://github.com/example',
  },
  {
    title: 'E-commerce UI',
    description: 'Responsive storefront with product listing and cart.',
    tech: ['React', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop',
    demo: 'https://example.com',
    github: 'https://github.com/example',
  },
];

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('projects.title')}</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-10">{t('projects.subtitle')}</p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm hover:shadow-lg transition-all"
            >
              <img src={p.image} alt={p.title} className="h-48 w-full object-cover" />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{p.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tech.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-primary-50 dark:bg-gray-800 text-primary-700 dark:text-primary-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={p.demo} className="inline-flex items-center gap-2 text-primary-600 hover:underline">
                    <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                    {t('projects.demo')}
                  </a>
                  <a href={p.github} className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:underline">
                    <CodeBracketIcon className="h-5 w-5" />
                    {t('projects.github')}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
