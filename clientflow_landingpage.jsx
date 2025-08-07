export default function LandingPage() {
  return (
    <div className="bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-black to-gray-900">
        <h1 className="text-5xl font-bold mb-4">Få flere kunder uden at røre en finger</h1>
        <p className="text-lg text-gray-300 mb-6 max-w-2xl">
          Vi finder leads, skriver personlige cold emails og booker møder – alt for dig.
        </p>
        <div className="mb-8 w-full max-w-lg aspect-video bg-gray-800 flex items-center justify-center rounded-xl">
          <span className="text-gray-500">[Din Loom-video her]</span>
        </div>
        <a
          href="#cta"
          className="bg-yellow-400 text-black font-semibold py-3 px-6 rounded-full hover:bg-yellow-300 transition"
        >
          Book et gratis møde
        </a>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Sådan hjælper vi dig</h2>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-3">1. Vi finder dine ideelle kunder</h3>
            <p className="text-gray-400">Vi researcher og håndplukker leads, der passer perfekt til din branche og dit budget.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">2. Vi skriver & sender outreach</h3>
            <p className="text-gray-400">Personlige, målrettede e-mails der skiller sig ud i indbakken og skaber svar.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">3. Vi booker møder i din kalender</h3>
            <p className="text-gray-400">Du møder blot op og taler med potentielle kunder – resten klarer vi.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-gray-900">
        <h2 className="text-3xl font-bold mb-10 text-center">Hvorfor vælge os?</h2>
        <ul className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto list-disc list-inside text-gray-300">
          <li>100% done-for-you – du skal kun møde op til møderne</li>
          <li>Vi målretter leads, der kan betale for din service</li>
          <li>Personlige e-mails → højere svarrate end standard templates</li>
          <li>Fokus på ROI – vi måler kun på bookede møder og salg</li>
        </ul>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Det siger vores kunder</h2>
        <blockquote className="italic text-gray-300 max-w-3xl mx-auto">
          “Vi gik fra ingen møder til 10 bookinger på 2 uger – uden at løfte en finger.”
        </blockquote>
        <p className="mt-4 text-gray-500">– CEO, E-commerce brand</p>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-gray-900" id="faq">
        <h2 className="text-3xl font-bold mb-10 text-center">FAQ</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          <div>
            <h3 className="text-xl font-semibold">Hvor hurtigt kan jeg forvente resultater?</h3>
            <p className="text-gray-400">Ofte booker vi de første møder indenfor 1–2 uger.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Er der binding?</h3>
            <p className="text-gray-400">Nej, vi arbejder måned for måned.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Hvad koster det?</h3>
            <p className="text-gray-400">Fra $1.000/måned – afhænger af omfang og mål.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Hvordan finder I leads?</h3>
            <p className="text-gray-400">Manuelt og målrettet efter din branche og ICP – ingen tilfældige lister.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Hvad hvis det ikke virker?</h3>
            <p className="text-gray-400">Så stopper vi samarbejdet – ingen grund til at spilde din tid.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center" id="cta">
        <h2 className="text-3xl font-bold mb-6">Klar til at få flere kunder?</h2>
        <p className="text-gray-300 mb-6">Book et gratis 10-minutters møde og hør, hvordan vi kan hjælpe dig.</p>
        <a
          href="mailto:christian@clientflow.agency"
          className="bg-yellow-400 text-black font-semibold py-3 px-6 rounded-full hover:bg-yellow-300 transition"
        >
          Book et gratis møde
        </a>
      </section>

      <footer className="py-6 text-center text-gray-500 text-sm border-t border-gray-800">
        © {new Date().getFullYear()} Clientflow.agency – All rights reserved.
      </footer>
    </div>
  );
}
