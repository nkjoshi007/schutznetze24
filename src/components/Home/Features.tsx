import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Shield, Settings, Truck, Headphones } from 'lucide-react';

const Features: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Shield,
      key: 'quality',
      color: 'bg-primary-100 text-primary-600',
    },
    {
      icon: Settings,
      key: 'custom',
      color: 'bg-secondary-100 text-secondary-600',
    },
    {
      icon: Truck,
      key: 'fast',
      color: 'bg-accent-100 text-accent-600',
    },
    {
      icon: Headphones,
      key: 'support',
      color: 'bg-purple-100 text-purple-600',
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-14 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('home.features.title')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group px-2"
              >
                <div className="relative mb-4 sm:mb-5 md:mb-6">
                  <div className={`inline-flex items-center justify-center w-14 sm:w-16 h-14 sm:h-16 rounded-2xl ${feature.color} group-hover:scale-110 transition-transform duration-200`}>
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                  {t(`home.features.${feature.key}.title`)}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {t(`home.features.${feature.key}.description`)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
