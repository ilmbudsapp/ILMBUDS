import React from 'react';
import { Icon } from '@/components/ui/icons';
import { useUserContext } from '@/context/user-context';
import { ProfileBadge } from '@/components/profile-badge';
import { Navbar } from '@/components/navbar';
import { useTranslation } from '@/hooks/use-translation';
import { useLanguage } from '@/context/language-context';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import LegalPrivacySections from '@/components/legal/LegalPrivacySections';
import { impressumDdGNote, type LegalLang } from '@/legal/legalContent';

export default function About() {
  const { user } = useUserContext();
  const { t } = useTranslation();
  const { language } = useLanguage();
  
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50">
      <header className="bg-gradient-to-r from-blue-700 to-indigo-600 text-white p-4 flex justify-between items-center shadow-md">
        <div className="flex items-center">
          <Icon name="info" className="text-3xl mr-2" />
          <h1 className="text-lg font-bold">
            {language === 'sq' ? 'Rreth Nesh' : 
             language === 'bs' ? 'O nama' : 
             language === 'de' ? 'Über uns' :
             language === 'it' ? 'Chi siamo' :
             'About Us'}
          </h1>
        </div>
        {user && <ProfileBadge points={user.points} />}
      </header>

      <main className="flex-1 overflow-auto p-4 pb-20">
        <div className="max-w-4xl mx-auto">
          {/* Web site info */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row items-center mb-4">
                <div className="w-40 h-40 mb-4 sm:mb-0 sm:mr-6 flex items-center justify-center">
                  <img 
                    src="/images/ilmbuds_logo.png"
                    alt="ILMBUDS Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <h2 className="text-2xl font-bold text-blue-800 mb-2">
                    {language === 'bs' 
                      ? 'ILMBUDS — ISLAMSKA WEB STRANICA ZA DECU'
                      : language === 'de'
                      ? 'ILMBUDS — ISLAMISCHE WEBSEITE FÜR KINDER'
                      : language === 'sq'
                      ? 'ILMBUDS — FAQE WEB ISLAMIKE PËR FËMIJË'
                      : language === 'it'
                      ? 'ILMBUDS — SITO WEB ISLAMICO PER BAMBINI'
                      : 'ILMBUDS — ISLAMIC WEBSITE FOR CHILDREN'}
                  </h2>
                  <p className="text-gray-600">
                    {language === 'sq' 
                      ? 'Një faqe web edukative islame për fëmijë dhe prindër — në kompjuter, tablet dhe telefon' 
                      : language === 'bs'
                      ? 'Islamska obrazovna web stranica za djecu i roditelje — na računaru, tabletu i telefonu'
                      : language === 'de'
                      ? 'Islamische Bildungs-Webseite für Kinder und Eltern — auf PC, Tablet und Smartphone'
                      : language === 'it'
                      ? 'Sito web educativo islamico per bambini e genitori — su computer, tablet e telefono'
                      : 'An Islamic educational website for children and parents — on computer, tablet and phone'}
                  </p>
                </div>
              </div>
              
              <Separator className="my-4" />
              
              <h3 className="text-lg font-semibold text-blue-700 mb-3">
                {language === 'sq' ? 'Misioni ynë' : 
                 language === 'bs' ? 'Naša misija' : 
                 language === 'de' ? 'Unsere Mission' :
                 language === 'it' ? 'La nostra missione' :
                 'Our Mission'}
              </h3>
              <p className="text-gray-700 mb-4">
                {language === 'sq' 
                  ? 'Misioni ynë është të ofrojmë një platformë edukative islame të aksesueshme dhe angazhuese për fëmijët, duke i ndihmuar ata të mësojnë për fenë e tyre në një mjedis interaktiv dhe argëtues. Ne besojmë se edukimi islamik duhet të jetë i përshtatshëm për moshën, tërheqës, dhe i disponueshëm në shumë gjuhë.' 
                  : language === 'bs'
                  ? 'Naša misija je da pružimo pristupačnu i zanimljivu islamsku obrazovnu web stranicu za djecu, pomažući im da uče o svojoj vjeri u interaktivnom i zabavnom okruženju. Vjerujemo da islamsko obrazovanje treba biti primjereno uzrastu, privlačno i dostupno na više jezika — bilo gdje imate internet.'
                  : language === 'de'
                  ? 'Unsere Mission ist es, eine zugängliche und ansprechende islamische Bildungs-Webseite für Kinder anzubieten, die ihnen hilft, ihren Glauben in einer interaktiven und unterhaltsamen Umgebung zu lernen. Wir glauben, dass islamische Bildung altersgerecht, ansprechend und in mehreren Sprachen verfügbar sein sollte — überall, wo es Internet gibt.'
                  : language === 'it'
                  ? 'La nostra missione è fornire una piattaforma educativa islamica accessibile e coinvolgente per i bambini, aiutandoli a conoscere la loro fede in un ambiente interattivo e divertente. Crediamo che l\'educazione islamica debba essere adatta all\'età, attraente e disponibile in più lingue.'
                  : 'Our mission is to provide an accessible and engaging Islamic educational website for children, helping them learn about their faith in an interactive and fun environment. We believe Islamic education should be age-appropriate, appealing, and available in multiple languages — wherever you have internet.'}
              </p>
              
              {/* Developer Bio Section */}
              <div className="bg-blue-50 p-4 rounded-lg mb-4 border border-blue-100">
                <h4 className="font-semibold text-blue-700 mb-2">
                  {language === 'sq' ? 'Nga Zhvilluesi' : 
                   language === 'bs' ? 'Od developera' : 
                   language === 'de' ? 'Vom Entwickler' :
                   language === 'it' ? 'Dallo sviluppatore' :
                   'From the Developer'}
                </h4>
                <p className="text-gray-700 mb-3 italic">
                  {language === 'sq' 
                    ? 'Unë jam Agron Osmani, Dizajner Grafik dhe Zhvillues. E kam filluar këtë faqe web për t\'i ndihmuar fëmijët e moshës së vogël të mësojnë besimin Islam në një mënyrë që është e lehtë për ta kuptuar dhe angazhuese. Qëllimi im është të krijoj një përvojë mësimore që jo vetëm informon por edhe frymëzon.' 
                    : language === 'bs'
                    ? 'Ja sam Agron Osmani, grafički dizajner i developer po profesiji. Pokrenuo sam ovu web stranicu kako bih pomogao maloj djeci da uče o islamskoj vjeri na način koji je lak za razumijevanje i zanimljiv. Moj cilj je stvoriti iskustvo učenja koje ne samo da informiše već i inspiriše.'
                    : language === 'de'
                    ? 'Ich bin Agron Osmani, von Beruf Grafikdesigner und Entwickler. Ich habe diese Webseite gestartet, um kleinen Kindern zu helfen, den islamischen Glauben auf eine Weise zu erlernen, die sowohl leicht verständlich als auch ansprechend ist. Mein Ziel ist es, eine Lernerfahrung zu schaffen, die nicht nur informiert, sondern auch inspiriert.'
                    : language === 'it'
                    ? 'Sono Agron Osmani, Designer Grafico e Sviluppatore di professione. Ho creato questo sito web per aiutare i bambini a conoscere la fede islamica in un modo facile da capire e coinvolgente. Il mio obiettivo è creare un\'esperienza di apprendimento che non solo informi ma anche ispiri.'
                    : 'I am Agron Osmani, a Graphic Designer and Developer by profession. I started this website to help young children learn about the Islamic faith in a way that is both easy to understand and engaging. My goal is to create a learning experience that not only informs but also inspires.'}
                </p>
              </div>
              
              <h3 className="text-lg font-semibold text-blue-700 mb-3 mt-6">
                {language === 'sq' ? 'Veçoritë kryesore' : 
                 language === 'bs' ? 'Ključne karakteristike' : 
                 language === 'de' ? 'Hauptfunktionen' :
                 language === 'it' ? 'Caratteristiche chiave' :
                 'Key Features'}
              </h3>
              
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Icon name="check_circle" className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    {language === 'sq' 
                      ? 'Kuize interaktive mbi njohuritë islamike' 
                      : language === 'bs'
                      ? 'Interaktivni kvizovi o islamskom znanju'
                      : language === 'de'
                      ? 'Interaktive Quizspiele über islamisches Wissen'
                      : language === 'it'
                      ? 'Quiz interattivi sulla conoscenza islamica'
                      : 'Interactive quizzes on Islamic knowledge'}
                  </span>
                </li>
                <li className="flex items-start">
                  <Icon name="check_circle" className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    {language === 'sq' 
                      ? 'Tregime islamike me mësime morale' 
                      : language === 'bs'
                      ? 'Islamske priče s moralnim lekcijama'
                      : language === 'de'
                      ? 'Islamische Geschichten mit moralischen Lehren'
                      : language === 'it'
                      ? 'Storie islamiche con lezioni morali'
                      : 'Islamic stories with moral lessons'}
                  </span>
                </li>
                <li className="flex items-start">
                  <Icon name="check_circle" className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    {language === 'sq' 
                      ? 'Mësimi i Kuranit për fëmijë' 
                      : language === 'bs'
                      ? 'Učenje Kurana za djecu'
                      : language === 'de'
                      ? 'Koran-Lernen für Kinder'
                      : language === 'it'
                      ? 'Apprendimento del Corano per bambini'
                      : 'Quran learning for children'}
                  </span>
                </li>
                <li className="flex items-start">
                  <Icon name="check_circle" className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    {language === 'sq' 
                      ? 'Mbështetje për shumë gjuhë (Anglisht, Shqip, Boshnjakisht, Gjermanisht, Italisht)' 
                      : language === 'bs'
                      ? 'Podrška za više jezika (engleski, albanski, bosanski, njemački, italijanski)'
                      : language === 'de'
                      ? 'Mehrsprachige Unterstützung (Englisch, Albanisch, Bosnisch, Deutsch, Italienisch)'
                      : language === 'it'
                      ? 'Supporto multilingue (inglese, albanese, bosniaco, tedesco, italiano)'
                      : 'Multi-language support (English, Albanian, Bosnian, German, Italian)'}
                  </span>
                </li>
                <li className="flex items-start">
                  <Icon name="check_circle" className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    {language === 'sq' 
                      ? 'Panel kontrolli për prindërit për të monitoruar progresin e fëmijëve' 
                      : language === 'bs'
                      ? 'Kontrolna tabla za roditelje za praćenje napretka djece'
                      : 'Parent dashboard to monitor children\'s progress'}
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          {/* Team Section */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-blue-700 mb-5">
                {language === 'sq' ? 'Ekipi Ynë' : 
                 language === 'bs' ? 'Naš tim' : 
                 language === 'de' ? 'Unser Team' :
                 language === 'it' ? 'Il nostro team' :
                 'Our Team'}
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Team Member 1 */}
                <div className="flex flex-col items-center p-4 rounded-lg bg-white border border-blue-100 shadow-sm">
                  <Avatar className="w-20 h-20 mb-4">
                    <AvatarImage src="/images/team/agron.jpg" alt="Agron Osmani" />
                    <AvatarFallback className="bg-blue-200 text-blue-700">AO</AvatarFallback>
                  </Avatar>
                  <h4 className="font-bold text-gray-800">Agron Osmani</h4>
                  <p className="text-sm text-gray-600 font-medium">
                    {language === 'bs' ? 'Osnivač i Developer' : 
                     language === 'de' ? 'Gründer & Entwickler' :
                     language === 'sq' ? 'Themelues & Zhvillues' :
                     language === 'it' ? 'Fondatore e Sviluppatore' :
                     'Founder & Developer'}
                  </p>
                  <p className="text-sm text-gray-500 text-center mt-1 mb-2">
                    {language === 'sq' 
                      ? 'Krijuesi i ILMBUDS dhe zhvilluesi kryesor i faqes web'
                      : language === 'bs'
                      ? 'Tvorac ILMBUDS-a i glavni developer web stranice'
                      : language === 'de'
                      ? 'Schöpfer von ILMBUDS und leitender Webentwickler'
                      : language === 'it'
                      ? 'Creatore di ILMBUDS e sviluppatore principale del sito web'
                      : 'Creator of ILMBUDS and lead website developer'}
                  </p>
                </div>
                
                {/* Team Member 2 */}
                <div className="flex flex-col items-center p-4 rounded-lg bg-white border border-blue-100 shadow-sm">
                  <Avatar className="w-20 h-20 mb-4">
                    <AvatarImage src="/images/team/afrim.jpg" alt="Afrim Osmani" />
                    <AvatarFallback className="bg-green-200 text-green-700">AO</AvatarFallback>
                  </Avatar>
                  <h4 className="font-bold text-gray-800">Afrim Osmani</h4>
                  <p className="text-sm text-gray-600 font-medium">
                    {language === 'bs' ? 'Stručnjak za islamski sadržaj' : 
                     language === 'de' ? 'Experte für islamische Inhalte' :
                     language === 'sq' ? 'Ekspert i Përmbajtjes Islame' :
                     language === 'it' ? 'Esperto di Contenuti Islamici' :
                     'Islamic Content Expert'}
                  </p>
                  <p className="text-sm text-gray-500 text-center mt-1 mb-2">
                    {language === 'sq' 
                      ? 'Hoxha Afrim Osmani ka rishikuar dhe kontrolluar të gjithë përmbajtjen islame në faqen web'
                      : language === 'bs'
                      ? 'Hodža Afrim Osmani je recenzirao i kontrolisao sav islamski sadržaj na web stranici' 
                      : language === 'de'
                      ? 'Imam Afrim Osmani hat alle islamischen Inhalte auf der Webseite überprüft und kontrolliert'
                      : language === 'it'
                      ? 'Imam Afrim Osmani ha recensito e controllato tutti i contenuti islamici sul sito web'
                      : 'Imam Afrim Osmani has reviewed and verified all Islamic content on the website'}
                  </p>
                </div>
                
                {/* Team Member 3 */}
                <div className="flex flex-col items-center p-4 rounded-lg bg-white border border-blue-100 shadow-sm">
                  <Avatar className="w-20 h-20 mb-4">
                    <AvatarImage src="/images/team/agron.jpg" alt="Agron Osmani" />
                    <AvatarFallback className="bg-purple-200 text-purple-700">AO</AvatarFallback>
                  </Avatar>
                  <h4 className="font-bold text-gray-800">Agron Osmani</h4>
                  <p className="text-sm text-gray-600 font-medium">
                    {language === 'bs' ? 'Stručnjak za prevođenje' : 
                     language === 'de' ? 'Übersetzungsspezialist' :
                     language === 'sq' ? 'Specialist i Përkthimit' :
                     language === 'it' ? 'Specialista di Traduzione' :
                     'Translation Specialist'}
                  </p>
                  <p className="text-sm text-gray-500 text-center mt-1 mb-2">
                    {language === 'sq' 
                      ? 'Koordinon dhe verifikon përkthimet në gjuhë të ndryshme'
                      : language === 'bs'
                      ? 'Koordinira i verifikuje prijevode na različitim jezicima'
                      : language === 'de'
                      ? 'Koordiniert und überprüft Übersetzungen in mehreren Sprachen'
                      : language === 'it'
                      ? 'Coordina e verifica le traduzioni in diverse lingue'
                      : 'Coordinates and verifies translations in multiple languages'}
                  </p>
                </div>
                
                {/* Team Member 4 */}
                <div className="flex flex-col items-center p-4 rounded-lg bg-white border border-blue-100 shadow-sm">
                  <Avatar className="w-20 h-20 mb-4">
                    <AvatarImage src="/images/team/agron.jpg" alt="Agron Osmani" />
                    <AvatarFallback className="bg-amber-200 text-amber-700">AO</AvatarFallback>
                  </Avatar>
                  <h4 className="font-bold text-gray-800">Agron Osmani</h4>
                  <p className="text-sm text-gray-600 font-medium">
                    {language === 'bs' ? 'Grafički dizajner' : 
                     language === 'de' ? 'Grafikdesigner' :
                     language === 'sq' ? 'Dizajner Grafik' :
                     language === 'it' ? 'Designer Grafico' :
                     'Graphic Designer'}
                  </p>
                  <p className="text-sm text-gray-500 text-center mt-1 mb-2">
                    {language === 'sq' 
                      ? 'Agron Osmani ka krijuar të gjithë dizajnin grafik në faqen web'
                      : language === 'bs'
                      ? 'Agron Osmani je kreirao sav grafički dizajn na web stranici'
                      : language === 'de'
                      ? 'Agron Osmani hat das gesamte grafische Design der Webseite erstellt'
                      : language === 'it'
                      ? 'Agron Osmani ha creato tutto il design grafico sul sito web'
                      : 'Agron Osmani created all graphic design on the website'}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Contact Section */}
          <Card id="contact">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-blue-700 mb-4">
                {language === 'sq' ? 'Na Kontaktoni' : 
                 language === 'bs' ? 'Kontaktirajte nas' : 
                 language === 'de' ? 'Kontaktieren Sie uns' :
                 language === 'it' ? 'Contattaci' :
                 'Contact Us'}
              </h3>
              <p className="text-gray-700 mb-6">
                {language === 'sq' 
                  ? 'Nëse keni ndonjë pyetje, sugjerim, ose dëshironi të kontribuoni në projektin tonë, ju lutem na kontaktoni.' 
                  : language === 'bs'
                  ? 'Ako imate bilo kakva pitanja, prijedloge ili želite doprinijeti našem projektu, molimo vas da nas kontaktirate.'
                  : language === 'de'
                  ? 'Wenn Sie Fragen oder Anregungen haben oder zu unserem Projekt beitragen möchten, kontaktieren Sie uns bitte.'
                  : language === 'it'
                  ? 'Se hai domande, suggerimenti o desideri contribuire al nostro progetto, ti preghiamo di contattarci.'
                  : 'If you have any questions, suggestions, or would like to contribute to our project, please reach out to us.'}
              </p>
              
              <div className="flex flex-col space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <Icon name="email" className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Email</h4>
                    <p className="text-blue-600">agron6922@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <Icon name="public" className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Website</h4>
                    <p className="text-blue-600">www.ilmbuds.com</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Privacy Policy Section */}
          <Card id="privacy" className="mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-blue-700 mb-5">
                {language === 'sq' ? 'Politika e Privatësisë' : 
                 language === 'bs' ? 'Politika Privatnosti' : 
                 language === 'de' ? 'Datenschutzrichtlinie' :
                 language === 'it' ? 'Politica sulla Privacy' :
                 'Privacy Policy'}
              </h3>
              
              <LegalPrivacySections />
            </CardContent>
          </Card>

          {/* Impresum/Legal Information Section */}
          <Card id="legal" className="mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-blue-700 mb-5">
                {language === 'sq' ? 'Impresum / Informacione Ligjore' : 
                 language === 'bs' ? 'Impresum / Pravne Informacije' : 
                 language === 'de' ? 'Impressum / Rechtliche Informationen' :
                 language === 'it' ? 'Impressum / Informazioni Legali' :
                 'Imprint / Legal Information'}
              </h3>
              
              <div className="text-sm text-gray-700 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-blue-600 mb-2">
                      {language === 'sq' ? 'Informacione për kompaninë' : 
                       language === 'bs' ? 'Informacije o kompaniji' : 
                       language === 'de' ? 'Unternehmensangaben' :
                       language === 'it' ? 'Informazioni aziendali' :
                       'Company Information'}
                    </h4>
                    <p className="mb-1">
                      <span className="font-medium">
                        {language === 'sq' ? 'Emri i kompanisë:' : 
                         language === 'bs' ? 'Naziv kompanije:' : 
                         language === 'de' ? 'Firmenname:' :
                         language === 'it' ? 'Nome dell\'azienda:' :
                         'Company name:'}
                      </span> AGRMULTIMEDIA
                    </p>
                    <p className="mb-1">
                      <span className="font-medium">
                        {language === 'sq' ? 'Pronari:' : 
                         language === 'bs' ? 'Vlasnik:' : 
                         language === 'de' ? 'Inhaber:' :
                         language === 'it' ? 'Proprietario:' :
                         'Owner:'}
                      </span> Agron Osmani
                    </p>
                    <p className="mb-1">
                      <span className="font-medium">
                        {language === 'sq' ? 'Profesioni:' : 
                         language === 'bs' ? 'Profesija:' : 
                         language === 'de' ? 'Beruf:' :
                         language === 'it' ? 'Professione:' :
                         'Profession:'}
                      </span> {language === 'sq' ? 'Dizajner Grafik & Zhvillues' : 
                              language === 'bs' ? 'Grafički Dizajner & Developer' : 
                              language === 'de' ? 'Grafikdesigner & Entwickler' :
                              language === 'it' ? 'Designer Grafico & Sviluppatore' :
                              'Graphic Designer & Developer'}
                    </p>
                    <p className="mb-3">
                      <span className="font-medium">
                        {language === 'sq' ? 'Adresa:' : 
                         language === 'bs' ? 'Adresa:' : 
                         language === 'de' ? 'Adresse:' :
                         language === 'it' ? 'Indirizzo:' :
                         'Address:'}
                      </span> Luise-Hainlen-Weg 4/4<br/>73312 Geislingen an der Steige<br/>{language === 'sq' ? 'Gjermani' : 
                                                                                           language === 'bs' ? 'Njemačka' : 
                                                                                           language === 'de' ? 'Deutschland' :
                                                                                           language === 'it' ? 'Germania' :
                                                                                           'Germany'}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-600 mb-2">
                      {language === 'sq' ? 'Informacione kontakti' : 
                       language === 'bs' ? 'Kontakt informacije' : 
                       language === 'de' ? 'Kontaktinformationen' :
                       language === 'it' ? 'Informazioni di contatto' :
                       'Contact Information'}
                    </h4>
                    <p className="mb-1">
                      <span className="font-medium">Email:</span> agron6922@gmail.com
                    </p>
                    <h4 className="font-bold text-blue-600 mt-4 mb-2">
                      {language === 'sq' ? 'Informacione ligjore' : 
                       language === 'bs' ? 'Pravne informacije' : 
                       language === 'de' ? 'Rechtliche Informationen' :
                       language === 'it' ? 'Informazioni legali' :
                       'Legal Information'}
                    </h4>
                    <p className="mb-1">
                      <span className="font-medium">
                        {language === 'sq' ? 'Numri i taksave (Steuernummer):' : 
                         language === 'bs' ? 'Porezni broj (Steuernummer):' : 
                         language === 'de' ? 'Steuernummer:' :
                         language === 'it' ? 'Codice fiscale (Steuernummer):' :
                         'Tax number (Steuernummer):'}
                      </span> 48267305956
                    </p>
                    <p className="mb-1">
                      <span className="font-medium">
                        {language === 'sq' ? 'Numri i Identifikimit të TVSH-së (USt-IdNr):' : 
                         language === 'bs' ? 'PDV identifikacijski broj (USt-IdNr):' : 
                         language === 'de' ? 'USt-IdNr:' :
                         language === 'it' ? 'Partita IVA (USt-IdNr):' :
                         'VAT identification number (USt-IdNr):'}
                      </span> DE35 401 6444
                    </p>
                    <p className="mt-4">
                      {language === 'sq' 
                        ? 'Përfaqësuar ligjërisht nga Agron Osmani, pronari i AGRMULTIMEDIA.' 
                        : language === 'bs'
                        ? 'Pravno zastupano od strane Agron Osmani, vlasnika AGRMULTIMEDIA-a.'
                        : language === 'de'
                        ? 'Rechtlich vertreten durch Agron Osmani, Inhaber von AGRMULTIMEDIA.'
                        : language === 'it'
                        ? 'Legalmente rappresentato da Agron Osmani, proprietario di AGRMULTIMEDIA.'
                        : 'Legally represented by Agron Osmani, owner of AGRMULTIMEDIA.'}
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-gray-500 italic">
                    {impressumDdGNote[(language as LegalLang) || 'en']}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Navbar />
    </div>
  );
}