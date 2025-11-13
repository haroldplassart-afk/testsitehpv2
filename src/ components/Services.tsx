import { Lock, Key, DoorOpen, Shield, Wrench, Clock } from 'lucide-react';
import { Card } from './ui/card';

const services = [
  {
    icon: DoorOpen,
    title: "Dépannage d'urgence",
    description: "Porte claquée, serrure bloquée ? Nous intervenons rapidement pour vous dépanner 7j/7.",
  },
  {
    icon: Key,
    title: "Ouverture de porte",
    description: "Ouverture de porte sans dégâts avec nos techniques professionnelles et notre expertise.",
  },
  {
    icon: Lock,
    title: "Installation de serrures",
    description: "Installation de serrures de haute sécurité pour protéger votre domicile ou entreprise.",
  },
  {
    icon: Shield,
    title: "Blindage de porte",
    description: "Renforcez la sécurité de votre porte avec nos solutions de blindage certifiées.",
  },
  {
    icon: Wrench,
    title: "Réparation de serrure",
    description: "Réparation rapide et efficace de tous types de serrures et mécanismes de fermeture.",
  },
  {
    icon: Key,
    title: "Reproduction de clés",
    description: "Duplication de clés standards et de sécurité avec précision et rapidité.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-900 mb-4">Nos Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Une gamme complète de services de serrurerie pour répondre à tous vos besoins
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-blue-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 bg-blue-900 rounded-2xl p-8 text-white text-center">
          <Clock className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
          <h3 className="text-white mb-2">Intervention d'urgence</h3>
          <p className="text-blue-100 max-w-2xl mx-auto">
            En cas d'urgence, nous sommes disponibles pour intervenir rapidement. 
            Contactez-nous au 06 72 72 43 44 pour une assistance immédiate.
          </p>
        </div>
      </div>
    </section>
  );
}
