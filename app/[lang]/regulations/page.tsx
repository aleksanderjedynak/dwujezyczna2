import { CheckCircleIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import {Locale} from "@/i18n-config";
import {getDictionary} from "@/get-dictionary";
import LocaleSwitcher from "@/components/locale-switcher";

export default async function Page({
  params: { lang },
}: {
  params: { lang: Locale }
}) {

 const dictionary = await getDictionary(lang)
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
               <LocaleSwitcher></LocaleSwitcher>
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                 {dictionary['header'].second}
        </h1>

        <div className="mt-10">
          <ul role="list" className="mt-8 space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">1.</strong>{" "}
                Niniejszy regulamin określa warunki, na jakich odbywa się TCM
                Kongres Kraków 2023 w dniach 13-15 października 2023r., zwany
                dalej Kongresem.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">2.</strong>{" "}
                Organizatorem Kongresu jest: Polskie Towarzystwo Tradycyjnej
                Medycyny Chińskiej ul. Warszawska 1; 31-155 Kraków (w siedzibie
                Centrum Medycyny Chińskiej) REGON: 121055094; NIP: 676-240-83-17
                ; KRS: 0000331282 e-mail: biuro@pttmc.org.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">3.</strong>{" "}
                Biuro Organizacyjne Kongresu ma siedzibę w lokalu Centrum
                Medycyny Chińskiej w Krakowie, ul. Warszawska 1, 31-155 Kraków.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">4.</strong>{" "}
                Kongres jest organizowany: – na terenie Hotelu Galaxy ul. Gęsia
                22 a, Kraków,
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">5.</strong>{" "}
                Uczestnikiem Spotkania może być każdy, kto kupi bilet poprzez
                stronę www.tcmkongres.pl.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">6.</strong>{" "}
                Istnieje mozliwość zakupu biletu na mijescu w kasie Kongresu w
                dniach wydarzenia 13-15 października 2023r.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">7.</strong>{" "}
                Kupując bilet Uczestnik zgadza się na umieszczenie danych
                osobowych w bazie Polskiego Towarzystwa Medycyny Chińskiej, w
                celu przeprowadzenia TCM Kongres Kraków 2023, osobowych zgodnie
                z ustawą z dnia 14 grudnia 2018 r. o ochronie danych osobowych.
                Podanie danych osobowych ma charakter dobrowolny, a podającemu
                przysługuje prawo wglądu do tych danych, jak i możliwość ich
                modyfikacji oraz usunięcia po zakończeniu Kongresu.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">8.</strong>{" "}
                Kupującemu przysługuje 14 - dniowy termin na zwrot zakupionego
                biletu. Po tym okresie nie ma możliwości zwrotu zakupionego
                biletu.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">9.</strong>{" "}
                Oficjalne zakończenie sprzedaży biletów następuje dnia
                12.10.2023 r.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">10.</strong>{" "}
                Koszt udziału w Kongresie obejmuje : a) w przypadku wyboru opcji
                Bilet 1 – dniowy lub Bilet 3 - dniowy – opłatę rejestracyjną, –
                opłatę za materiały kongresowe, – udział w sesji plenarnej,
                wykładach, panelach dyskusyjnych w przerwach, wykładach
                otwartych, na które wykupiony został bilet. b) w przypadku
                wybrania opcji „Bankiet” – udział w bankiecie oraz party
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">11.</strong>{" "}
                Opłata rejestracyjna nie obejmuje kosztów podróży, noclegu oraz
                wyżywienia.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">12.</strong> Za
                pokrycie szkody oraz pozostałych kosztów powstałych z winy
                Uczestnika nie objętych ceną i nieuregulowanych do dnia
                zakończenia Kongresu odpowiada Uczestnik, bądź delegująca go
                firma/instytucja/urząd. W przypadku nie uiszczenia płatności
                przez Uczestnika, o których mowa w zdaniu pierwszym, Organizator
                wystawi fakturę i prześle ją na adres wskazany podczas
                rejestracji online. Uczestnik lub delegująca go
                firma/instytucja/urząd jest zobowiązany uregulować należności w
                terminie wskazanym na fakturze.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">13.</strong> Za
                W przypadku uiszczenia zniżkowej opłaty za Kongres w przypadku
                członka Stowarzyszenia PTTMC lub ETCMA bez opłaconej składki
                członkowskiej, Organizator ma prawo skreślić z listy uczestników
                Kongresu.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">14.</strong>{" "}
                Organizator zastrzega sobie prawo do odwołania lub zmiany części
                programu Spotkania, bez obowiązku uprzedzenia i bez obowiązku
                wypłacenia rekompensaty lub odszkodowania wobec jakichkolwiek
                osób, w zależności od osobistego uznania Organizatora, bez
                obowiązku zwrotu części lub całkowitej sumy na jaką opiewa
                opłata uczestnictwa. W przypadku odwołania całości Spotkania
                Organizator zwraca całość kwoty wpłaconej przez uczestnika
                przelewem na konto bankowe z jakiego dokonana została wpłata za
                Bilet i Bankiet.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">15.</strong>{" "}
                Regulamin Kongresu dostępny jest na stronie internetowej, w
                siedzibie Organizatora oraz w Recepcji w trakcie trwania
                Kongresu.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">16.</strong>{" "}
                Organizator nie ponosi odpowiedzialności za rzeczy pozostawione
                przez uczestnika Kongresu
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">17.</strong> W
                sprawach nieuregulowanych niniejszym Regulaminem zastosowanie
                znajdą odpowiednie przepisy Kodeksu Cywilnego.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
