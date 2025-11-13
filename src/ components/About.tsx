import { Award, Users, Clock, Shield } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const features = [
  {
    icon: Clock,
    title: "5+ ans d'expérience",
    description: "Une expertise reconnue dans le domaine de la serrurerie",
  },
  {
    icon: Shield,
    title: "Service de qualité",
    description: "Des prestations professionnelles et fiables",
  },
  {
    icon: Award,
    title: "Tarifs transparents",
    description: "Devis gratuit et sans surprise",
  },
  {
    icon: Users,
    title: "Proximité",
    description: "Un service local à Guignen et en Bretagne",
  },
];

export function About() {
  return (
    <section id="apropos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-blue-900 mb-6">À propos de testsitehp</h2>
            <p className="text-gray-600 mb-6">
              Forte de plus de 5 ans d'expérience, <strong>testsitehp</strong> est votre partenaire 
              de confiance pour tous vos besoins en serrurerie à Guignen et dans toute la Bretagne.
            </p>
            <p className="text-gray-600 mb-8">
              Nous mettons notre expertise au service des particuliers et des professionnels pour garantir 
              la sécurité de vos biens. Notre engagement : des interventions rapides, un travail soigné 
              et des tarifs transparents.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-blue-900 mb-1">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1701619568096-323d3a22a9ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicml0dGFueSUyMGZyYW5jZSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjE3NTcwMzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Bretagne"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-yellow-400 text-blue-900 p-6 rounded-xl shadow-lg">
              <p className="text-4xl mb-1">5+</p>
              <p className="text-sm">ans d'expérience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}