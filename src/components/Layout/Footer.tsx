import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Shield,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ExternalLink,
  Award,
  CheckCircle,
} from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">
              {t('footer.contact.title')}
            </h3>
            
            {/* Company Info */}
            <div className="space-y-2 text-sm text-gray-300">
              <p className="font-medium text-white">SchutzNetze24 GmbH</p>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Weyerberg 3</p>
                  <p>35614 Aßlar-Berghausen</p>
                  <p>Germany</p>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary-400 flex-shrink-0" />
                <span className="text-gray-300">+49 (0) 6443 - 436 96 40</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary-400 flex-shrink-0" />
                <span className="text-gray-300">+49 (0) 6443 - 436 96 40</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary-400 flex-shrink-0" />
                <span className="text-gray-300">+49 (0) 6443 - 435 96 70</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary-400 flex-shrink-0" />
                <span className="text-gray-300">info@schutznetze24.de</span>
              </div>
            </div>
          </div>

          {/* Bestseller Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">
              {t('footer.bestseller.title')}
            </h3>
            
            {/* Custom-made protective nets */}
            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-200 mb-2">
                {t('footer.bestseller.customMade')}
              </h4>
              <nav className="space-y-1">
                <Link to="/products/safety-nets" className="block text-xs text-gray-300 hover:text-primary-400 transition-colors">
                  {t('footer.bestseller.safetyNets')}
                </Link>
                <Link to="/products/climbing-nets" className="block text-xs text-gray-300 hover:text-primary-400 transition-colors">
                  {t('footer.bestseller.climbingNets')}
                </Link>
                <Link to="/products/wire-rope-nets" className="block text-xs text-gray-300 hover:text-primary-400 transition-colors">
                  {t('footer.bestseller.wireRopeNets')}
                </Link>
                <Link to="/products/fabric-tarpaulins" className="block text-xs text-gray-300 hover:text-primary-400 transition-colors">
                  {t('footer.bestseller.fabricTarpaulins')}
                </Link>
                <Link to="/products/goal-nets" className="block text-xs text-gray-300 hover:text-primary-400 transition-colors">
                  {t('footer.bestseller.goalNets')}
                </Link>
              </nav>
            </div>

            {/* Nets for home and garden */}
            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-200 mb-2">
                {t('footer.bestseller.homeGarden')}
              </h4>
              <nav className="space-y-1">
                <Link to="/products/leaf-nets" className="block text-xs text-gray-300 hover:text-primary-400 transition-colors">
                  {t('footer.bestseller.leafNets')}
                </Link>
                <Link to="/products/animal-protection" className="block text-xs text-gray-300 hover:text-primary-400 transition-colors">
                  {t('footer.bestseller.animalProtection')}
                </Link>
                <Link to="/products/sports-nets" className="block text-xs text-gray-300 hover:text-primary-400 transition-colors">
                  {t('footer.bestseller.sportsNets')}
                </Link>
                <Link to="/products/balcony-nets" className="block text-xs text-gray-300 hover:text-primary-400 transition-colors">
                  {t('footer.bestseller.balconyNets')}
                </Link>
                <Link to="/products/more" className="block text-xs text-gray-300 hover:text-primary-400 transition-colors">
                  {t('footer.bestseller.more')}
                </Link>
              </nav>
            </div>

            {/* Networks for industry and construction */}
            <div>
              <h4 className="text-sm font-medium text-gray-200 mb-2">
                {t('footer.bestseller.industryConstruction')}
              </h4>
              <nav className="space-y-1">
                <Link to="/products/personal-security" className="block text-xs text-gray-300 hover:text-primary-400 transition-colors">
                  {t('footer.bestseller.personalSecurity')}
                </Link>
                <Link to="/products/construction-equipment" className="block text-xs text-gray-300 hover:text-primary-400 transition-colors">
                  {t('footer.bestseller.constructionEquipment')}
                </Link>
                <Link to="/products/structural-security" className="block text-xs text-gray-300 hover:text-primary-400 transition-colors">
                  {t('footer.bestseller.structuralSecurity')}
                </Link>
                <Link to="/products/load-securing" className="block text-xs text-gray-300 hover:text-primary-400 transition-colors">
                  {t('footer.bestseller.loadSecuring')}
                </Link>
              </nav>
            </div>
          </div>

          {/* Information Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">
              {t('footer.information.title')}
            </h3>
            <nav className="space-y-2">
              <Link to="/network-strengths" className="flex items-center text-xs text-accent-400 hover:text-accent-300 transition-colors">
                <ExternalLink className="w-3 h-3 mr-1" />
                {t('footer.information.networkStrengths')}
              </Link>
              <Link to="/installation-guide" className="flex items-center text-xs text-accent-400 hover:text-accent-300 transition-colors">
                <ExternalLink className="w-3 h-3 mr-1" />
                {t('footer.information.installationGuide')}
              </Link>
              <Link to="/construction-guidelines" className="flex items-center text-xs text-accent-400 hover:text-accent-300 transition-colors">
                <ExternalLink className="w-3 h-3 mr-1" />
                {t('footer.information.constructionGuidelines')}
              </Link>
              <Link to="/safety-calculator" className="flex items-center text-xs text-accent-400 hover:text-accent-300 transition-colors">
                <ExternalLink className="w-3 h-3 mr-1" />
                {t('footer.information.safetyCalculator')}
              </Link>
              <Link to="/faq" className="flex items-center text-xs text-accent-400 hover:text-accent-300 transition-colors">
                <ExternalLink className="w-3 h-3 mr-1" />
                {t('footer.information.faq')}
              </Link>
              <Link to="/customer-photos" className="flex items-center text-xs text-accent-400 hover:text-accent-300 transition-colors">
                <ExternalLink className="w-3 h-3 mr-1" />
                {t('footer.information.customerPhotos')}
              </Link>
              <Link to="/references" className="flex items-center text-xs text-accent-400 hover:text-accent-300 transition-colors">
                <ExternalLink className="w-3 h-3 mr-1" />
                {t('footer.information.references')}
              </Link>
              <Link to="/remaining-stock" className="flex items-center text-xs text-accent-400 hover:text-accent-300 transition-colors">
                <ExternalLink className="w-3 h-3 mr-1" />
                {t('footer.information.remainingStock')}
              </Link>
            </nav>
          </div>

          {/* Certifications & Awards */}
          <div className="space-y-6">
            {/* Certifications */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                {t('footer.certifications.title')}
              </h3>
              
              {/* Trusted Shops */}
              <div className="bg-white rounded-lg p-3 mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xs">e</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-gray-800 font-medium">schutznetze24.de</div>
                    <div className="text-xs text-gray-600">/ 5.00 at</div>
                    <div className="text-xs text-gray-600">Reviews</div>
                    <div className="flex text-yellow-400 text-xs">
                      ★★★★★
                    </div>
                  </div>
                </div>
                <div className="mt-2 space-y-1">
                  <div className="flex items-center text-xs text-gray-600">
                    <CheckCircle className="w-3 h-3 text-green-500 mr-1" />
                    {t('footer.certifications.buyerProtection')}
                  </div>
                  <div className="flex items-center text-xs text-gray-600">
                    <CheckCircle className="w-3 h-3 text-green-500 mr-1" />
                    {t('footer.certifications.professionalAdvice')}
                  </div>
                  <div className="flex items-center text-xs text-gray-600">
                    <CheckCircle className="w-3 h-3 text-green-500 mr-1" />
                    {t('footer.certifications.secureOrdering')}
                  </div>
                </div>
              </div>

              {/* EHI Certification */}
              <div className="bg-white rounded-lg p-3 mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xs">EHI</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-gray-800 font-medium">{t('footer.certifications.ehiCertified')}</div>
                    <div className="space-y-1 mt-1">
                      <div className="flex items-center text-xs text-gray-600">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-1" />
                        {t('footer.certifications.testedProcesses')}
                      </div>
                      <div className="flex items-center text-xs text-gray-600">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-1" />
                        {t('footer.certifications.dataSecurity')}
                      </div>
                      <div className="flex items-center text-xs text-gray-600">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-1" />
                        {t('footer.certifications.secureIT')}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Awards */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                {t('footer.awards.title')}
              </h3>
              <div className="grid grid-cols-3 gap-2">
                {/* Excellent Shop Award */}
                <div className="bg-yellow-500 rounded-lg p-2 text-center">
                  <Award className="w-6 h-6 text-white mx-auto mb-1" />
                  <div className="text-xs text-white font-bold">Excellent</div>
                  <div className="text-xs text-white">Shop</div>
                  <div className="text-xs text-white font-bold">10 Jahre</div>
                  <div className="text-xs text-white">zertifiziert</div>
                </div>

                {/* Trend Shop Award */}
                <div className="bg-red-600 rounded-lg p-2 text-center">
                  <Award className="w-6 h-6 text-white mx-auto mb-1" />
                  <div className="text-xs text-white font-bold">TREND</div>
                  <div className="text-xs text-white">SHOP</div>
                  <div className="text-xs text-white">2022</div>
                </div>

                {/* Computer Top Shop Award */}
                <div className="bg-red-600 rounded-lg p-2 text-center">
                  <Award className="w-6 h-6 text-white mx-auto mb-1" />
                  <div className="text-xs text-white font-bold">Computer</div>
                  <div className="text-xs text-white">TOP SHOP</div>
                  <div className="text-xs text-white">2025</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <Shield className="w-6 h-6 text-primary-400" />
              <span className="text-sm text-gray-400">
                © 2024 SchutzNetze24 GmbH. {t('footer.allRightsReserved')}
              </span>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end items-center space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-primary-400 transition-colors">
                {t('footer.privacy')}
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-primary-400 transition-colors">
                {t('footer.terms')}
              </Link>
              <Link to="/imprint" className="text-gray-400 hover:text-primary-400 transition-colors">
                {t('footer.imprint')}
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-primary-400 transition-colors">
                {t('footer.cookies')}
              </Link>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;