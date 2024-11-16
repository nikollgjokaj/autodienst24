import { PhoneIcon, MailIcon, MapPinIcon } from 'lucide-react';

const Contact = () => {
  const whatsappNumber = "436645171020"; // ohne + am Anfang für den Link
  const whatsappMessage = "Hallo, ich habe eine Frage..."; // Optional: vorausgefüllte Nachricht

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Kontaktieren Sie uns</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <PhoneIcon className="text-red-600" />
                <a href="tel:+436645171020" className="text-lg">0664 5171020</a>
              </div>
              <div className="flex items-center gap-3">
                {/* WhatsApp Icon und Link */}
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-6 h-6 text-red-600 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <a 
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg hover:text-red-600 transition"
                >
                  WhatsApp Chat
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPinIcon className="text-red-600" />
                <address className="text-lg">Am Berg 3, 3150 Wilhelmsburg</address>
              </div>
              <div className="flex items-center gap-3">
                <MailIcon className="text-red-600" />
                <a href="mailto:office@autodienst24.at" className="text-lg">office@autodienst24.at</a>
              </div>
            </div>
          </div>
          <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2658.825983123707!2d15.5436!3d48.1234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d9b8b8b8b8b8b%3A0x0!2sAm%20Berg%203%2C%203150%20Wilhelmsburg!5e0!3m2!1sde!2sat!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 