import { CheckCircleIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <p className="text-base font-semibold leading-7 mb-4 text-indigo-600">
          <Link
            href="/"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Powrót do strony głównej
          </Link>
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Polityka Prywatności określa zasady przetwarzania i ochrony danych
          osobowych, przekazywanych przez Użytkowników serwisu internetowego TCM
          KONGRES KRAKÓW 2023, dalej „Serwis” lub „Serwis internetowy”.
        </h1>

        <div className="mt-10">
          <ul role="list" className="mt-8 space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">I. </strong>{" "}
                POSTANOWIENIA OGÓLNE
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">1.</strong>{" "}
                Administratorem danych osobowych, zawartych w Serwisie, jest
                Polskie Towarzystwo Tradycyjnej Medycyny Chińskiej ul.
                Warszawska 1; 31-155 Kraków (w siedzibie Centrum Medycyny
                Chińskiej) REGON: 121055094; NIP: 676-240-83-17 ; KRS:
                0000331282 dalej „Administrator”.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">2.</strong>{" "}
                Użytkownikiem Serwisu jest każda osoba fizyczna odwiedzająca
                stronę internetową www.tcmkongres.pl lub korzystająca z jednej
                lub kilku usług i/lub produktów oferowanych przez
                Administratora.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">3.</strong>{" "}
                Serwis internetowy pozyskuje dane osobowe Użytkowników
                wprowadzane w formularzach na podstawie zgody wyrażonej przez
                nich samych
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">4.</strong>{" "}
                Przez dane osobowe rozumie się wszelkie informacje dotyczące
                zidentyfikowanej lub możliwej do zidentyfikowania żyjącej osoby
                fizycznej, której tożsamość można określić bezpośrednio lub
                pośrednio, w szczególności przez powołanie się na numer
                identyfikacyjny albo jeden lub kilka specyficznych czynników
                określających jej cechy fizyczne, fizjologiczne, umysłowe,
                ekonomiczne, kulturowe lub społeczne. Przez dane osobowe rozumie
                się numer IP urządzenia, dane o lokalizacji, identyfikator
                internetowy oraz informacje gromadzone za pośrednictwem plików
                cookies lub podobnej technologii.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">5.</strong> Dane
                osobowe Użytkowników są przetwarzane zgodnie z Rozporządzeniem
                Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia
                2016 r. w sprawie ochrony osób fizycznych w związku z
                przetwarzaniem danych osobowych i w sprawie swobodnego przepływu
                takich danych oraz uchylenia dyrektywy 95/46/WE (RODO).
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">6.</strong>{" "}
                Administrator dokłada szczególnej staranności w celu ochrony
                interesów osób, których dane dotyczą, a w szczególności
                zapewnia, że zbierane przez niego dane są: a. przetwarzane
                zgodnie z prawem, b. zbierane dla oznaczonych, zgodnych z prawem
                celów i niepoddawane dalszemu przetwarzaniu niezgodnemu z tymi
                celami, c. merytorycznie poprawne i adekwatne w stosunku do
                celów, w jakich są przetwarzane oraz przechowywane w postaci
                umożliwiającej identyfikację osób, których dotyczą, nie dłużej
                niż jest to niezbędne do osiągnięcia celu przetwarzania.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">II.</strong> CEL
                I ZAKRES ZBIERANIA DANYCH
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">1.</strong>{" "}
                Dane, które podaje lub pozostawia Użytkownik podczas zapisywania
                się na świadczone przez Administratora usługi i produkty oraz w
                trakcie korzystania z usług i produktów, wykorzystywane są do:
                a. udostępnienia możliwości korzystania z usług i produktów
                Administratora; b. rejestracji udziału w Kongresie TMC , dalej
                „Kongres”, założenia indywidualnego konta w systemie
                rejestracji, zorganizowania Kongresu i jego przeprowadzenia,
                komunikacji i przekazu informacji dot. udziału w Kongresie; c.
                wykonania obowiązków ciążących na Administratorze w związku z
                organizacją Kongresu, wynikających z obowiązujących przepisów
                prawa; d. celów informacyjnych oraz innych czynności związanych
                z aktywnością Administratora na stronie internetowej
                www.tcm-kongres.pl; e. realizacji umów i procesów handlowych; f.
                celów marketingowych (przesyłanie informacji handlowych drogą
                elektroniczną oraz działania telemarketingowe); g. oceny
                organizacji Kongresu oraz badania satysfakcji z uczestnictwa w
                Kongresie; h. kontaktu, wymiany informacji i danych.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">2.</strong>{" "}
                Administrator przetwarza następujące dane osobowe Użytkowników:
                a. imię, nazwisko, b. adres e-mail, c. nazwa firmy / instytucji
                / organizacji / uczelni, d. numer telefonu, e. miasto, kod
                pocztowy, województwo, ulica, kraj,f. IP.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">3.</strong>{" "}
                Podanie danych osobowych, o których mowa w pkt 2 jest
                dobrowolne, ale niezbędne do świadczenia przez Usługodawcę usług
                drogą elektroniczną za pomocą Serwisu oraz do uczestnictwa w
                Kongresie.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">4.</strong> Dane
                osobowe mogą być ujawniane: a) podmiotom upoważnionym na
                podstawie powszechnie obowiązujących przepisów prawa, w
                szczególności instytucjom uprawnionym do kontroli działalności
                Administratora lub do uzyskania danych osobowych na podstawie
                przepisów prawa; b) Podmiotom, z usług których Administrator
                korzysta w związku z organizacją Kongresu, w tym podmiotom
                obsługującym rejestrację uczestników oraz obsługującym Kongres w
                obszarze PR; c) Partnerom biznesowym w celu dokonywania akcji
                marketingu bezpośredniego oraz świadczenia usług drogą
                elektroniczną d) podmiotom świadczącym na rzecz Administratora
                usługi w zakresie outsourcingu procesów księgowych, audytorom,
                doradcom prawnym lub podatkowym oraz dostawcom usług IT.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">5.</strong> Dane
                osobowe nie będą przekazywane do państwa trzeciego lub
                organizacji międzynarodowej.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">6.</strong> Dane
                osobowe nie będą poddawane zautomatyzowanemu przetwarzaniu i
                profilowaniu.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">III.</strong>{" "}
                PODSTAWA PRZETWARZANIA DANYCH I OKRES
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">1.</strong>{" "}
                Korzystanie z Serwisu internetowego, rejestrowanie się na
                świadczone przez Administratora usługi i produkty oraz
                korzystanie z nich, z czym wiąże się konieczność podania danych
                osobowych, jest całkowicie dobrowolne. Osoba, której dane
                dotyczą, samodzielnie decyduje, czy chce rozpocząć korzystanie z
                usług świadczonych drogą elektroniczną przez Administratora.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">2.</strong>{" "}
                Zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE)
                2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób
                fizycznych w związku z przetwarzaniem danych osobowych i w
                sprawie swobodnego przepływu takich danych oraz uchylenia
                dyrektywy 95/46/WE (RODO) dane osobowe przetwarzane będą na
                podstawie art. 6 ust 1 lit. a, b, c, f RODO, czyli : osoba,
                której dane dotyczą, wyrazi na to zgodę, jest niezbędne do
                wykonania umowy, której stroną jest osoba, której dane dotyczą,
                lub do podjęcia działań na żądanie osoby, której dane dotyczą,
                przed zawarciem umowy oraz jest niezbędne do wypełnienia
                obowiązku prawnego ciążącego na administratorze oraz celów
                wynikających z prawnie uzasadnionych interesów realizowanych
                przez administratora.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">3.</strong>{" "}
                Przetwarzanie danych osobowych przez Administratora odbywa się
                zawsze w ramach podstaw dopuszczalności ich przetwarzania
                wymienionych w pkt 2.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">4.</strong> Dane
                osobowe będą przetwarzane przez okres niezbędny do realizacji
                celów przetwarzania. W zakresie realizacji umowy, przez okres do
                jej zakończenia, po tym czasie dane będą przetwarzane przez
                okres wymagany przez prawo lub przez okres niezbędny do
                dochodzenia roszczeń. W zakresie realizacji uzasadnionych
                interesów ADO, dane będą przetwarzane do chwili pozytywnego
                rozpatrzenia wniesionego sprzeciwu wobec przetwarzania danych.
              </span>
            </li>

            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">5.</strong>{" "}
                Administrator dopełnia należytej staranności w celu
                odpowiedniego zabezpieczenia przekazanych danych osobowych, a w
                szczególności przed ich udostępnieniem osobom nieupoważnionym.
              </span>
            </li>

            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">IV.</strong>{" "}
                PRAWO KONTROLI, DOSTĘPU DO TREŚCI SWOICH DANYCH ORAZ ICH
                POPRAWIANIA
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">1.</strong>{" "}
                Użytkownik ma prawo dostępu do treści swoich danych osobowych
                oraz ich poprawiania.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">2.</strong>{" "}
                Każdej osobie przysługuje prawo do kontroli przetwarzania
                danych, które jej dotyczą, zawartych w zbiorze danych
                Administratora, a zwłaszcza prawo do żądania uzupełnienia,
                uaktualnienia, sprostowania danych osobowych, czasowego lub
                stałego wstrzymania ich przetwarzania lub ich usunięcia, jeżeli
                są one niekompletne, nieaktualne, nieprawdziwe lub zostały
                zebrane z naruszeniem prawa albo są już zbędne do realizacji
                celu, dla którego zostały zebrane.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">3.</strong>{" "}
                Każdej osobie przysługuje prawo sprzeciwu wobec przetwarzania
                danych w celach marketingowych lub innych, bez konieczności
                uzasadniania takiego sprzeciwu.
              </span>
            </li>

            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">4.</strong> W
                celu realizacji uprawnień, o których mowa w pkt. 1 i 2 można
                korzystać poprzez przesłanie stosownej wiadomości e-mail na
                adres : biuro@pttmc.org; lub korespondencyjnie na adres wskazany
                w I pkt.1.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">5.</strong>{" "}
                Wnioski Użytkowników dotyczące realizacji wskazanych powyżej
                uprawnień powinny w miarę możliwości precyzyjnie określać czego
                dotyczy żądanie tj. z jakiego uprawnienia i w jakim zakresie
                Użytkownik chce skorzystać.
              </span>
            </li>

            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">6.</strong>{" "}
                Użytkownik ma prawo do wniesienia skargi do organu nadzorczego.
                W Polsce organem takim jest Prezes Urzędu Ochrony Danych
                Osobowych. Pytania dotyczące polityki prywatności należy
                kierować na adres: biuro@pttmc.org. Polityka prywatności jest na
                bieżąco weryfikowana i w razie potrzeby aktualizowana.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
