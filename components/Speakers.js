import Link from "next/link";
import Image from "next/image";
import bartosz_43_640 from "../app/speakers/bartosz_43_640.png";
import agnieszka_43 from "../app/speakers/agnieszka_43.jpg";
import david43_640 from "../app/speakers/david43_640.jpg";
import dorota_43_640_480 from "../app/speakers/dorota_43_640_480.jpg";
import grazyna_43 from "../app/speakers/grazyna_43.jpg";
import li_43_640 from "../app/speakers/li_43_640.png";
import LiLing from "../app/speakers/LiLing.jpg";
import peter_43 from "../app/speakers/peter_43.jpg";
import rani_43_640 from "../app/speakers/rani_43_640.png";
import ricardo640 from "../app/speakers/ricardo640.jpg";
import shulan_43 from "../app/speakers/shulan_43.png";
import tomasz_43_640_480 from "../app/speakers/tomasz_43_640_480.jpg";
import yair_43 from "../app/speakers/yair_43.jpg";
import zhou_43_640_480 from "../app/speakers/zhou_43_640_480.jpg";

const people = [
  {
    name: "Imie Nazwisko",
    role: "Doctor",
    imageUrl: bartosz_43_640,
    bio: "Lekarz w wieloletnim doswiadczeniem zawodowym. specjalizacja medycyna chinska",
  },
  {
    name: "Imie Nazwisko",
    role: "Doctor",
    imageUrl: agnieszka_43,
    bio: "Lekarz w wieloletnim doswiadczeniem zawodowym. specjalizacja medycyna chinska",
  },
  {
    name: "Imie Nazwisko",
    role: "Doctor",
    imageUrl: david43_640,
    bio: "Lekarz w wieloletnim doswiadczeniem zawodowym. specjalizacja medycyna chinska",
  },
  {
    name: "Imie Nazwisko",
    role: "Doctor",
    imageUrl: dorota_43_640_480,
    bio: "Lekarz w wieloletnim doswiadczeniem zawodowym. specjalizacja medycyna chinska",
  },
  {
    name: "Imie Nazwisko",
    role: "Doctor",
    imageUrl: grazyna_43,
    bio: "Lekarz w wieloletnim doswiadczeniem zawodowym. specjalizacja medycyna chinska",
  },
  {
    name: "Imie Nazwisko",
    role: "Doctor",
    imageUrl: li_43_640,
    bio: "Lekarz w wieloletnim doswiadczeniem zawodowym. specjalizacja medycyna chinska",
  },
  {
    name: "Imie Nazwisko",
    role: "Doctor",
    imageUrl: LiLing,
    bio: "Lekarz w wieloletnim doswiadczeniem zawodowym. specjalizacja medycyna chinska",
  },
  {
    name: "Imie Nazwisko",
    role: "Doctor",
    imageUrl: peter_43,
    bio: "Lekarz w wieloletnim doswiadczeniem zawodowym. specjalizacja medycyna chinska",
  },
  {
    name: "Imie Nazwisko",
    role: "Doctor",
    imageUrl: rani_43_640,
    bio: "Lekarz w wieloletnim doswiadczeniem zawodowym. specjalizacja medycyna chinska",
  },
  {
    name: "Imie Nazwisko",
    role: "Doctor",
    imageUrl: ricardo640,
    bio: "Lekarz w wieloletnim doswiadczeniem zawodowym. specjalizacja medycyna chinska",
  },
  {
    name: "Imie Nazwisko",
    role: "Doctor",
    imageUrl: shulan_43,
    bio: "Lekarz w wieloletnim doswiadczeniem zawodowym. specjalizacja medycyna chinska",
  },
  {
    name: "Imie Nazwisko",
    role: "Doctor",
    imageUrl: tomasz_43_640_480,
    bio: "Lekarz w wieloletnim doswiadczeniem zawodowym. specjalizacja medycyna chinska",
  },
  {
    name: "Imie Nazwisko",
    role: "Doctor",
    imageUrl: yair_43,
    bio: "Lekarz w wieloletnim doswiadczeniem zawodowym. specjalizacja medycyna chinska",
  },

  {
    name: "Imie Nazwisko",
    role: "Doctor",
    imageUrl: zhou_43_640_480,
    bio: "Lekarz w wieloletnim doswiadczeniem zawodowym. specjalizacja medycyna chinska",
  },
  // More people...
];

export default function Speakers() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Nasi wykładowcy
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Jakis tekst do do wpisania, kilka slow jakie chcemy wyswietlic.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
        >
          {people.map((person) => (
            <Link key={person.name} href="/people">
              <li className="flex flex-col gap-6 xl:flex-row">
                <Image
                  className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover"
                  src={person.imageUrl}
                  alt=""
                />

                <div className="flex-auto">
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-base leading-7 text-gray-600">
                    {person.role}
                  </p>
                  <p className="mt-6 text-base leading-7 text-gray-600">
                    {person.bio}
                  </p>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
