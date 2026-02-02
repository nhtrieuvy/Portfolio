import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio showcasing my projects, technical skills, and learning journey as an Information Technology student.',
    tech: ['ReactJS', 'Tailwind', 'Headless UI'],
    image: '/image_portfolio.png',
    demo: 'https://portfolio-nguyenhoangtrieuvy.vercel.app',
    github: 'https://github.com/nhtrieuvy/Portfolio',
  },
  {
    title: 'PlanPalApp',
    description: 'A collaborative travel planning app with real-time chat, activity management, and map integration.',
    tech: ['Flutter', 'Django', 'Firebase', 'WebSocket', 'MySQL'],
    image: '/image_planpal.jpg',
    demo: 'https://github.com/nhtrieuvy/PlanPalApp/releases/tag/v1.0.0',
    isApp: true,
    github: 'https://github.com/nhtrieuvy/PlanPalApp',
  },
  {
    title: 'E-commerce Website',
    description: 'A full-stack E-commerce platform — backend powered by Spring Boot and frontend built with React + MUI.',
    tech: ['ReactJS', 'MUI', 'Spring Boot', 'MySQL'],
    image: '/image_ecommerce.png',
    demo: 'https://spring-ecommerce-app.vercel.app/',
    github: 'https://github.com/nhtrieuvy/SpringEcommerceApp',
  },
];

export default function Projects() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [perView, setPerView] = useState(() => {
    if (typeof window === 'undefined') return 2;
    return window.matchMedia('(min-width: 1024px)').matches ? 2 : 1;
  });
  const [isPaused, setIsPaused] = useState(false);
  const autoSlideRef = useRef(null);
  const intervalMs = 3000;
  const [isTransitioning, setIsTransitioning] = useState(true);

  const total = projects.length;

  const extendedProjects = useMemo(() => {
    const head = projects.slice(0, perView);
    const tail = projects.slice(-perView);
    return [...tail, ...projects, ...head];
  }, [perView]);

  const offsetIndex = currentIndex + perView;

  const goToIndex = useCallback((nextIndex) => {
    setIsTransitioning(true);
    setCurrentIndex(nextIndex);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    const media = window.matchMedia('(min-width: 1024px)');
    const handleChange = (e) => setPerView(e.matches ? 2 : 1);
    if (media.addEventListener) {
      media.addEventListener('change', handleChange);
    } else {
      media.addListener(handleChange);
    }
    return () => {
      if (media.removeEventListener) {
        media.removeEventListener('change', handleChange);
      } else {
        media.removeListener(handleChange);
      }
    };
  }, []);

  useEffect(() => {
    if (isPaused) return undefined;
    autoSlideRef.current = setTimeout(() => {
      goToIndex(currentIndex + 1);
    }, intervalMs);
    return () => clearTimeout(autoSlideRef.current);
  }, [currentIndex, goToIndex, isPaused, intervalMs]);

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('projects.title')}</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-10">{t('projects.subtitle')}</p>

        <div
          className="relative overflow-visible"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <button
            type="button"
            aria-label="Previous project"
            onClick={() => goToIndex(currentIndex - 1)}
            className="absolute left-2 lg:-left-16 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/70 w-14 h-14 flex items-center justify-center text-gray-800 shadow hover:bg-white dark:bg-gray-900/70 dark:text-gray-200"
          >
            <span className="text-2xl font-medium">&lt;</span>
          </button>
          <button
            type="button"
            aria-label="Next project"
            onClick={() => goToIndex(currentIndex + 1)}
            className="absolute right-2 lg:-right-16 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/70 w-14 h-14 flex items-center justify-center text-gray-800 shadow hover:bg-white dark:bg-gray-900/70 dark:text-gray-200"
          >
            <span className="text-2xl font-medium">&gt;</span>
          </button>

          <div className="overflow-hidden">
            <div
              className={`flex ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''}`}
              style={{ transform: `translateX(-${(offsetIndex * 100) / perView}%)` }}
              onTransitionEnd={() => {
                if (currentIndex < 0) {
                  setIsTransitioning(false);
                  setCurrentIndex(total - 1);
                  requestAnimationFrame(() => setIsTransitioning(true));
                }
                if (currentIndex >= total) {
                  setIsTransitioning(false);
                  setCurrentIndex(0);
                  requestAnimationFrame(() => setIsTransitioning(true));
                }
              }}
            >
              {extendedProjects.map((p, idx) => (
                <div
                  key={`${idx}-${p.title}`}
                  className="flex-shrink-0"
                  style={{ width: `${100 / perView}%` }}
                >
                  <div className="px-4">
                    <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm hover:shadow-lg transition-all">
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
                            {p.isApp ? t('projects.download') : t('projects.demo')}
                          </a>
                          <a href={p.github} className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:underline">
                            <CodeBracketIcon className="h-5 w-5" />
                            {t('projects.github')}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
