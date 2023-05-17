import hotel1 from "../app/hotel1.jpg";
import hotel3 from "../app/hotel3.jpg";
import hotel2 from "../app/hotel2.jpg";
import hotel4 from "../app/hotel4.jpg";
import Image from "next/image";

export default function Hotel() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              KONGRES VENUE
            </h2>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              Galaxy Hotel ul. Gesia 22A 31-535 Krakow
            </p>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Galaxy**** to wyjątkowy hotel w centrum Krakowa, zlokalizowany w
              sąsiedztwie Starego Miasta, tuż nad Wisłą. Decydując się na nocleg
              u nas otrzymasz paletę pozytywnych emocji. Jesteśmy do Twojej
              dyspozycji przez cały okres pobytu. Chętnie pomożemy w wyjątkowym
              spędzeniu czasu w stolicy Małopolski. Spotkajmy się!
            </p>
            <div className="mt-10 flex">
              <a
                href="http://galaxyhotel.pl/en/h24_code/TCMKongres/p2019-10-10/w2019-10-13/"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Rezerwuj hotel <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <Image
                src={hotel1}
                alt=""
                className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
              />
            </div>
            <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
              <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                <Image
                  src={hotel2}
                  alt=""
                  className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                <Image
                  src={hotel4}
                  alt=""
                  className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <Image
                  src={hotel3}
                  alt=""
                  className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
