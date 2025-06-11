import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Globe } from 'lucide-react';
import { RootState } from '../../store';
import { setLanguage } from '../../store/slices/uiSlice';

const languages = [
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
];

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const { language } = useSelector((state: RootState) => state.ui);

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
    dispatch(setLanguage(langCode));
  };

  const currentLanguage = languages.find(lang => lang.code === language) || languages[0];

  return (
    <div className="relative group">
      <button className="flex items-center space-x-2 px-3 py-1 rounded hover:bg-primary-500 transition-colors">
        <Globe className="w-4 h-4" />
        <span className="text-sm">{currentLanguage.flag} {currentLanguage.name}</span>
      </button>
      
      <div className="absolute top-full left-0 mt-1 bg-white rounded-md shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[140px] z-50">
        <div className="py-1">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`flex items-center space-x-2 w-full px-3 py-2 text-sm text-left hover:bg-gray-100 transition-colors ${
                language === lang.code ? 'bg-primary-50 text-primary-600' : 'text-gray-700'
              }`}
            >
              <span>{lang.flag}</span>
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;