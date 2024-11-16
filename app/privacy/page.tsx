const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Datenschutzerklärung</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">1. Datenschutz auf einen Blick</h2>
        <h3 className="text-xl font-semibold mt-4 mb-2">Allgemeine Hinweise</h3>
        <p className="mb-4">
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, 
          wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert 
          werden können.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Datenerfassung auf unserer Website</h3>
        <p className="mb-4">
          Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem 
          Impressum dieser Website entnehmen.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">2. Cookies und Tracking</h2>
        <p className="mb-4">
          Unsere Website verwendet Cookies. Dabei handelt es sich um kleine Textdateien, die Ihr Webbrowser auf Ihrem Endgerät 
          speichert. Diese Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
        </p>
        
        <h3 className="text-xl font-semibold mt-4 mb-2">Arten von Cookies:</h3>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">
            <strong>Notwendige Cookies:</strong> Diese Cookies sind für den Betrieb der Website erforderlich
          </li>
          <li className="mb-2">
            <strong>Analyse-Cookies:</strong> Helfen uns zu verstehen, wie Besucher mit der Website interagieren
          </li>
          <li className="mb-2">
            <strong>Marketing-Cookies:</strong> Werden verwendet, um Werbung für Sie relevanter zu gestalten
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">3. Ihre Rechte</h2>
        <p className="mb-4">Sie haben folgende Rechte:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Recht auf Auskunft</li>
          <li>Recht auf Berichtigung</li>
          <li>Recht auf Löschung</li>
          <li>Recht auf Einschränkung der Verarbeitung</li>
          <li>Recht auf Datenübertragbarkeit</li>
          <li>Widerspruchsrecht</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">4. Kontaktformular</h2>
        <p className="mb-4">
          Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular 
          inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von 
          Anschlussfragen bei uns gespeichert.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">5. Datensicherheit</h2>
        <p className="mb-4">
          Wir verwenden innerhalb des Website-Besuchs das verbreitete SSL-Verfahren (Secure Socket Layer) in Verbindung 
          mit der jeweils höchsten Verschlüsselungsstufe, die von Ihrem Browser unterstützt wird.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">6. Verantwortlicher</h2>
        <p className="mb-4">
          Autodienst24.at<br />
          [Deine vollständige Adresse]<br />
          Tel: [Telefonnummer]<br />
          E-Mail: [E-Mail-Adresse]
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">7. Änderungen</h2>
        <p className="mb-4">
          Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen 
          Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen.
        </p>
        <p>Stand: [Aktuelles Datum]</p>
      </section>
    </div>
  );
};

export default PrivacyPolicy; 