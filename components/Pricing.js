"use client";
import { useState } from "react";
import { CheckIcon } from "@heroicons/react/20/solid";

const frequencies = [
  { value: "monthly", label: "Monthly", priceSuffix: "/month" },
  { value: "annually", label: "Annually", priceSuffix: "/year" },
];
const tiers = [
  {
    name: "Bankiet",
    id: "1",
    href: "https://app.easycart.pl/checkout/88568273/bankiet-tcm2023",
    price: { monthly: "220 PLN" },
    description: "Bilet wstepu na bankiet.",
    features: [
      "Dostęp do wszystkich wykładów w sekcji po pobrania",
      "Możliwość uczestnictwa w bankiecie",
    ],
    mostPopular: false,
  },
  {
    name: "Bilet w przedsprzedaży",
    id: "2",
    href: "https://app.easycart.pl/checkout/88568273/tcm-kongres-2023-ticket?promo=1",
    price: { monthly: "od 407 PLN" },
    description: "Bilet wstępu na wykłady.",
    features: [
      "Uczestnitwo na wykladach w zalezności od wybranego biletu",
      "Dostęp do warsztatów i paneli dyskusyjnych przez 3 dni",
      "Dostęp do wszystkich wykładów w sekcji po pobrania",
      "zniżki dla wybranych partnerów",
      "-15% zniżki promocja tylko do konca maja",
    ],
    mostPopular: true,
  },
  // {
  //   name: "Bilet",
  //   id: "3",
  //   href: "https://app.easycart.pl/checkout/88568273/bilet-tcm2023?promo=1",
  //   price: { monthly: "od 479 PLN" },
  //   description: "Bilet wstępu na wykłady.",
  //   features: [
  //     "Dostęp do wszystkich wykładów przez 3 dni",
  //     "Dostęp do warsztatów i paneli dyskusyjnych przez 3 dni",
  //     "Dostęp do wszystkich wykładów w sekcji po pobrania",
  //     "zniżki dla wybranych partnerów",
  //   ],
  //   mostPopular: false,
  // },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Pricing() {
  const [frequency] = useState(frequencies[0]);
  return (
    <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
        aria-hidden="true"
      >
        <div
          className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Kup bilet na wydarzenie
          </h2>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
          Mamy dla was nastepujące bilety. Bilet normalny, bilet zniżkowy oraz
          bilet specjalny. Bilet zniżkowy - dla członków ETCMA, bilet specjalny
          - dla członków PTTMC - Polskiego Towarzystwa Tradycyjnej Medycyny
          Chińskiej
        </p>
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular
                  ? "ring-2 ring-indigo-600"
                  : "ring-1 ring-gray-200",
                "rounded-3xl p-8 xl:p-10"
              )}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3
                  id={tier.id}
                  className={classNames(
                    tier.mostPopular ? "text-indigo-600" : "text-gray-900",
                    "text-lg font-semibold leading-8"
                  )}
                >
                  {tier.name}
                </h3>
                {tier.mostPopular ? (
                  <p className="rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-indigo-600">
                    PROMOCJA do konca maja!
                  </p>
                ) : null}
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-600">
                {tier.description}
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900">
                  {tier.price[frequency.value]}
                </span>
                {/*<span className="text-sm font-semibold leading-6 text-gray-600">*/}
                {/*  {frequency.priceSuffix}*/}
                {/*</span>*/}
              </p>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? "bg-indigo-600 text-white shadow-sm hover:bg-indigo-500"
                    : "text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300",
                  "mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                )}
              >
                Kup bilet
              </a>
              <ul
                role="list"
                className="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10"
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      className="h-6 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
