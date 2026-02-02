import { CodeBracketIcon, CircleStackIcon, PaintBrushIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

const skills = [
  {
    title: 'Frontend',
    icon: CodeBracketIcon,
    items: ['React', 'Flutter', 'Tailwind'],
  },
  {
    title: 'Backend',
    icon: CircleStackIcon,
    items: ['Node.js', 'Django', 'MySQL', 'REST API', 'Spring Boot'],
  },
  {
    title: 'Design',
    icon: PaintBrushIcon,
    items: ['Figma', 'UI/UX', 'Responsive Design']
  },
];

export default function Skills() {
  const { t } = useTranslation();

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('skills.title')}</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-10">{t('skills.subtitle')}</p>

        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((group) => (
            <div
              key={group.title}
              className="p-6 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm hover:shadow-lg transition-all"
            >
              <group.icon className="h-10 w-10 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">{group.title}</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                {group.items.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
