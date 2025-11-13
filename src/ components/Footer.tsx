import { Shield, Phone, MapPin, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-6 w-6 text-yellow-400" />
              <h3 className="text-white">testsitehp</h3>
            </div>
            <p className="text-blue-200">
              Votre serrurier de confiance à Guignen, en Bretagne. 
              Plus de 5 ans d'expérience à votre service.
            </p>
          </div>

          <div>
            <h4 className="text-white mb-4">Contact</h4>
            <div className="space-y-3 text-blue-200">
              <a href="tel:0767975294" className="flex items-center gap-2 hover:text-yellow-400 transition">
                <Phone className="h-4 w-4" />
                <span>07 67 97 52 94</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>La Pibourdière, 35580 Guignen</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Lun-Ven: 08:00 - 20:00</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white mb-4">Services</h4>
            <ul className="space-y-2 text-blue-200">
              <li>Dépannage d'urgence</li>
              <li>Ouverture de porte</li>
              <li>Installation de serrures</li>
              <li>Blindage de porte</li>
              <li>Réparation de serrure</li>
              <li>Reproduction de clés</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-8 text-center text-blue-200">
          <p>&copy; {new Date().getFullYear()} testsitehp. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}