import { Phone, MapPin } from 'lucide-react';
import { Button } from './ui/button';

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-blue-900">testsitehp</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('accueil')} className="text-gray-700 hover:text-blue-600 transition">
              Accueil
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition">
              Services
            </button>
            <button onClick={() => scrollToSection('apropos')} className="text-gray-700 hover:text-blue-600 transition">
              À propos
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition">
              Contact
            </button>
          </nav>

          <div className="flex items-center gap-4">
            <a href="tel:0767975294" className="hidden lg:flex items-center gap-2 text-blue-900">
              <Phone className="h-5 w-5" />
              <span>07 67 97 52 94</span>
            </a>
            <Button onClick={() => scrollToSection('contact')} className="bg-blue-600 hover:bg-blue-700">
              Nous contacter
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
