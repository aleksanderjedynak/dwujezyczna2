export default function Example() {
  return (
    <div className="bg-white">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Organizator
          </h2>
          <p className="mx-auto mt-6 text-lg leading-8 text-gray-600">
            Organizatorami wydarzenia jest Polskie Towarzystwo Tradycyjnej
            Medycyny Chińskiej, którego celem jest propagowanie Tradycyjnej
            Medycyny Chińskiej oraz rozpowszechnianie i wspieranie stosowania
            zdobyczy naukowych w zakresie profilaktyki, diagnostyki, dietetyki,
            akupunktury, akupresury, masażu, baniek, ćwiczeń ruchowych Qi-Kung i
            farmakologii Tradycyjnej Medycyny Chińskiej oraz szerzenie postępu w
            tej dziedzinie.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="http://www.pttmc.org"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Polskie Towarzystwo Tradycyjnej Medycyny Chińskiej{" "}
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
