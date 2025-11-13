import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import { Card } from './ui/card';

const schedule = [
  { day: 'Lundi', hours: '08:00 – 20:00' },
  { day: 'Mardi', hours: '08:00 – 20:00' },
  { day: 'Mercredi', hours: '08:00 – 20:00' },
  { day: 'Jeudi', hours: '08:00 – 20:00' },
  { day: 'Vendredi', hours: '08:00 – 20:00' },
  { day: 'Samedi', hours: 'Fermé' },
  { day: 'Dimanche', hours: 'Fermé' },
];

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-900 mb-4">Contactez-nous</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            N'hésitez pas à nous contacter pour toute demande d'information ou de devis
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="h-7 w-7 text-blue-600" />
            </div>
            <h3 className="text-blue-900 mb-2">Téléphone</h3>
            <a href="tel:0767975294" className="text-blue-600 hover:text-blue-700">
              07 67 97 52 94
            </a>
            <p className="text-sm text-gray-500 mt-2">Lun-Ven: 08:00 - 20:00</p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-7 w-7 text-blue-600" />
            </div>
            <h3 className="text-blue-900 mb-2">Adresse</h3>
            <p className="text-gray-600">La Pibourdière</p>
            <p className="text-gray-600">35580 Guignen</p>
            <p className="text-gray-600">France</p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-7 w-7 text-blue-600" />
            </div>
            <h3 className="text-blue-900 mb-2">Horaires</h3>
            <p className="text-gray-600">Lundi - Vendredi</p>
            <p className="text-gray-600">08:00 - 20:00</p>
            <p className="text-sm text-gray-500 mt-2">Fermé le week-end</p>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-8">
            <h3 className="text-blue-900 mb-6">Horaires d'ouverture</h3>
            <div className="space-y-3">
              {schedule.map((item, index) => (
                <div 
                  key={index} 
                  className={`flex justify-between py-2 border-b border-gray-200 ${
                    item.hours === 'Fermé' ? 'text-gray-400' : ''
                  }`}
                >
                  <span>{item.day}</span>
                  <span className={item.hours === 'Fermé' ? '' : 'text-blue-600'}>
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-8">
            <h3 className="text-blue-900 mb-6">Zone d'intervention</h3>
            <div className="mb-6">
              <MapPin className="h-6 w-6 text-blue-600 mb-2" />
              <p className="text-gray-600 mb-4">
                Basés à Guignen, nous intervenons dans toute la région bretonne pour 
                tous vos besoins en serrurerie.
              </p>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden bg-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42616.28744374467!2d-1.9156244!3d47.9182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480f0e5b7e3d8e8f%3A0x40ca5cd36e48e50!2s35580%20Guignen!5e0!3m2!1sfr!2sfr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Carte de Guignen"
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}