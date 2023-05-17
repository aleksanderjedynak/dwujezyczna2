import { Link } from "react-router-dom";

const timeline = [
  {
    name: "Wroclaw",
    description: "Opis poprzedniego wydarzenia, jakis opis i tak dalej",
    date: "Aug 2016",
    dateTime: "2016-08",
  },
  {
    name: "Poznan",
    description: "Opis poprzedniego wydarzenia, jakis opis i tak dalej",
    date: "Dec 2017",
    dateTime: "2017-12",
  },
  {
    name: "Warszawa",
    description: "Opis poprzedniego wydarzenia, jakis opis i tak dalej",
    date: "Feb 2018",
    dateTime: "2018-02",
  },
  {
    name: "Krakow",
    description: "Opis poprzedniego wydarzenia, jakis opis i tak dalej",
    date: "Dec 2019",
    dateTime: "2019-12",
  },
];

export default function Timeline() {
  return (
    <div className="bg-white pb-24 sm:pb-32">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Nasze poprzednie edycje
        </h2>
      </div>
      <div className="mx-auto max-w-7xl mt-16 px-6 lg:px-8 sm:mt-20">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {timeline.map((item) => (
            <div key={item.name}>
              <time
                dateTime={item.dateTime}
                className="flex items-center text-sm font-semibold leading-6 text-indigo-600"
              >
                <svg
                  viewBox="0 0 4 4"
                  className="mr-4 h-1 w-1 flex-none"
                  aria-hidden="true"
                >
                  <circle cx={2} cy={2} r={2} fill="currentColor" />
                </svg>
                {item.date}
                <div
                  className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                  aria-hidden="true"
                />
              </time>
              <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                {item.name}
              </p>
              <p className="mt-1 text-base leading-7 text-gray-600">
                {item.description}
              </p>
              <div className="mt-4 flex">
                <Link
                  href="/"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Zobacz <span aria-hidden="true">&rarr;</span>
                </Link>
                {/*<a*/}
                {/*    href="#"*/}
                {/*    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"*/}
                {/*>*/}
                {/*  Zobacz <span aria-hidden="true">&rarr;</span>*/}
                {/*</a>*/}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
