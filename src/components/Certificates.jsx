import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Dialog, DialogPanel } from '@headlessui/react';
import { XMarkIcon, PlusIcon, MinusIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

const certificates = [
  {
    title: 'Samsung Innovation Campus – AI Course',
    issuer: 'Samsung Innovation Campus',
    date: 'Aug 2024',
    image: '/certSIC.jpg',
  },
];

export default function Certificates() {
  const { t } = useTranslation();
  const [selected, setSelected] = useState(null);
  const [scale, setScale] = useState(1);

  const openModal = (cert) => {
    setSelected(cert);
    setScale(1);
  };

  const closeModal = () => setSelected(null);

  const zoomIn = () => setScale((s) => Math.min(3, s + 0.25));
  const zoomOut = () => setScale((s) => Math.max(0.5, s - 0.25));
  const resetZoom = () => setScale(1);

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('certificates.title')}</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-10">{t('certificates.subtitle')}</p>

        <div className="grid md:grid-cols-2 gap-8">
          {certificates.map((cert) => (
            <div
              key={cert.title}
              className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm hover:shadow-lg transition-all"
            >
              <button
                type="button"
                onClick={() => openModal(cert)}
                className="block w-full focus:outline-none"
                aria-label={`Open certificate ${cert.title}`}
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="h-56 w-full object-cover cursor-zoom-in"
                />
              </button>
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{cert.issuer}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{cert.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={Boolean(selected)} onClose={closeModal} className="relative z-50">
        <div className="fixed inset-0 bg-black/70" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <DialogPanel className="w-full max-w-5xl rounded-2xl bg-white dark:bg-gray-900 p-4 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <div className="text-left">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {selected?.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{selected?.issuer}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={zoomOut}
                  className="rounded-full p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                  aria-label="Zoom out"
                >
                  <MinusIcon className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={zoomIn}
                  className="rounded-full p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                  aria-label="Zoom in"
                >
                  <PlusIcon className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={resetZoom}
                  className="rounded-full p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                  aria-label="Reset zoom"
                >
                  <ArrowPathIcon className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="rounded-full p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                  aria-label="Close"
                >
                  <XMarkIcon className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="overflow-auto max-h-[70vh]">
              {selected && (
                <img
                  src={selected.image}
                  alt={selected.title}
                  style={{ transform: `scale(${scale})` }}
                  className="mx-auto origin-center transition-transform duration-200"
                />
              )}
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </section>
  );
}
