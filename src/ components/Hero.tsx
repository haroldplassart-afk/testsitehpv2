import { Shield, Clock, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white">
      <div className="absolute inset-0 opacity-10">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1659325550160-a8272e589d6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2Nrc21pdGglMjBkb29yJTIwc2VjdXJpdHl8ZW58MXx8fHwxNzYxNzU3MDM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
          alt="Serrurerie"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <Shield className="h-8 w-8 text-yellow-400" />
            <span className="text-yellow-400">Plus de 5 ans d'expérience</span>
          </div>
          
          <h2 className="text-white mb-6">
            Votre serrurier de confiance à Guignen
          </h2>
          
          <p className="text-xl text-blue-100 mb-8">
            Intervention rapide et professionnelle pour tous vos besoins en serrurerie. 
            Dépannage d'urgence, installation, et sécurisation de votre domicile.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a href="tel:0767975294" className="inline-block">
              <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 w-full sm:w-auto">
                <Phone className="mr-2 h-5 w-5" />
                Appeler maintenant
              </Button>
            </a>
            <Button 
              onClick={scrollToContact}
              size="lg" 
              variant="outline" 
              className="bg-white/10 hover:bg-white/20 text-white border-white w-full sm:w-auto"
            >
              Demander un devis
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <Clock className="h-6 w-6 text-yellow-400 flex-shrink-0" />
              <div>
                <p className="text-sm text-blue-100">Disponibilité</p>
                <p>Lun-Ven 8h-20h</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="h-6 w-6 text-yellow-400 flex-shrink-0" />
              <div>
                <p className="text-sm text-blue-100">Intervention</p>
                <p>Rapide & Efficace</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-6 w-6 text-yellow-400 flex-shrink-0" />
              <div>
                <p className="text-sm text-blue-100">Contact</p>
                <p>07 67 97 52 94</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}