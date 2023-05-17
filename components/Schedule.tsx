"use client";
import { useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
import clsx from "clsx";

const schedule = [
  {
    date: "Piątek",
    dateTime: "2023-10-13",
    summary: "Dzien 1.",
    timeSlots: [
      {
        name: "Izabela Miętka",
        description: "Powitanie",
        start: "10:00",
        end: "10:10",
      },
      {
        name: "Marek Kalmus",
        description: "Wkrótce",
        start: "10:10",
        end: "10:40",
      },
      {
        name: "Yair Maimon",
        description: "Wkrótce",
        start: "10:40",
        end: "11:40",
      },
      {
        name: "Przerwa",
        description: null,
        start: "11:40",
        end: "12:00",
      },
      {
        name: "Ricardo Teixeira ",
        description: "Wkrótce",
        start: "12:00",
        end: "12:30",
      },
      {
        name: "Marta Nizioł",
        description: "Wkrótce",
        start: "12:30",
        end: "13:00",
      },
      {
        name: "Izabela Miętka",
        description: "Wkrótce",
        start: "13:00",
        end: "13:30",
      },
      {
        name: "Przerwa obiadowa",
        description: null,
        start: "13:30",
        end: "15:00",
      },
      {
        name: "Prof. Li Jie",
        description: "Odpowiedzi na trudne pytania",
        start: "14:30",
        end: "14:50",
      },
      {
        name: "Marta Nizioł - Izabela Miętka - Katarzyna Pokrywka",
        description: "Kobiece sprawy - odpowiedzi na trudne pytania",
        start: "14:20",
        end: "14:50",
      },
      {
        name: "Hamid Montakab",
        description: "Sztuka starzenia się z wdziękiem i umierania w łasce",
        start: "15:00",
        end: "18:30",
      },
      {
        name: "Bartosz Chmielnicki",
        description:
          "Zimno i Gorąco – nieproszeni goście. Strategie Shang Han Lun i Wen Bing w walce z patogenami.",
        start: "15:00",
        end: "18:30",
      },
      {
        name: "Prof. Li Jie",
        description: "Akupunktura Ling Shu Jing . Co i dlaczego?",
        start: "15:00",
        end: "18:30",
      },
    ],
  },
  {
    date: "Sobota",
    dateTime: "2023-10-14",
    summary: "Dzien 2.",
    timeSlots: [
      {
        name: "Rani Ayal",
        description: "Pieśń Jadeitowego Smoka: 12 magicznych punktów",
        start: "9:00",
        end: "13:00",
      },
      {
        name: "Jong Baik",
        description:
          " Koreańska Terapia Dłoni (KHT) dla problemów ginekologicznych, niepłodności i wspomaganego zachodzenia w ciążę. Cz.1",
        start: "9:00",
        end: "13:00",
      },
      {
        name: "Ricardo Teixeira",
        description: "Kreatywne Hun. W jaki sposób Hun wpływa na nasze życie'",
        start: "9:00",
        end: "13:00",
      },
      {
        name: "Dorota Łapa",
        description:
          "Jak oczyszczać dietą osoby z niedoborami?\n" +
          "Oczyszczanie z wykorzystaniem podstaw wzmacniania Qi i Krwi wg medycyny chińskiej.",
        start: "9:00",
        end: "13:00",
      },
      {
        name: "Panel Rani Ayal - Yair Maimon",
        description: "Odpowiedzi na trudne pytania",
        start: "13:15",
        end: "13:45",
      },
      {
        name: "Dorota Łapa i Joanna Brejecka ",
        description: "Opis opis opis opis 22222",
        start: "13:15",
        end: "13:45",
      },
      {
        name: "Przerwa obiadowa ",
        description: null,
        start: "13:45",
        end: "15:00",
      },
      {
        name: "Jong Baik",
        description:
          "Terapia Dłoni (KHT) dla problemów ginekologicznych, niepłodności i wspomaganego zachodzenia w ciążę. Cz.2 ",
        start: "15:00",
        end: "18:00",
      },
      {
        name: "Hamid Montakab ",
        description:
          "Postępowanie w alergiach sezonowych i przewlekłych w praktyce klinicznej",
        start: "15:00",
        end: "18:00",
      },
      {
        name: "Yair Maimon",
        description: "Regulowanie układu odpornościowego w TMC",
        start: "15:00",
        end: "18:00",
      },
      {
        name: "Bankiet",
        description: null,
        start: "19:30",
        end: "23:00",
      },
    ],
  },
  {
    date: "Niedziela",
    dateTime: "2023-10-15",
    summary: "Dzien 3.",
    timeSlots: [
      {
        name: "Kasia Kołodziejczak - Pokrywka ",
        description: "Akupunktura wspierająca proces zapłodnienia in vitro.",
        start: "9:00",
        end: "11:00",
      },
      {
        name: "Joanna Brejecka- Pamungkas",
        description:
          "Przewlekłe infekcje oddechowe u dzieci  - wzorce patologii, fitoterapia zachodnia wg tcm, tuina pediatryczna.",
        start: "10:00",
        end: "11:00",
      },
      {
        name: "Bożena Olszowska Chińska",
        description: "Sztuka czytania z twarzy - przejrzeć wszystko na wylot",
        start: "11:00",
        end: "11:00",
      },
      {
        name: "Przerwa",
        description: null,
        start: "11:00",
        end: "12:00",
      },
      {
        name: "Ricardo Teixeira ",
        description: "Odpowiedzi na trudne pytania ",
        start: "11:15",
        end: "11:45",
      },
      {
        name: "Kasia Kołodziejczak - Pokrywka ",
        description: "Akupunktura wspierająca proces zapłodnienia in vitro.",
        start: "12:15",
        end: "14:00",
      },
      {
        name: "Joanna Brejecka- Pamungkas",
        description:
          "Przewlekłe infekcje oddechowe u dzieci  - wzorce patologii, fitoterapia zachodnia wg tcm, tuina pediatryczna.",
        start: "12:15",
        end: "14:00",
      },
      {
        name: "Bożena Olszowska Chińska",
        description: "Sztuka czytania z twarzy - przejrzeć wszystko na wylot",
        start: "12:15",
        end: "14:00",
      },
    ],
  },
];

function ScheduleTabbed({
  dictionary,
}: {
  dictionary: {
    aaa: string
  }
}) {
  let [tabOrientation, setTabOrientation] = useState("horizontal");

  useEffect(() => {
    let smMediaQuery = window.matchMedia("(min-width: 640px)");

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? "vertical" : "horizontal");
    }

    onMediaQueryChange(smMediaQuery);
    smMediaQuery.addEventListener("change", onMediaQueryChange);

    return () => {
      smMediaQuery.removeEventListener("change", onMediaQueryChange);
    };
  }, []);

  return (
    <Tab.Group
      as="div"
      className="mx-auto grid max-w-2xl grid-cols-1 gap-y-6 sm:grid-cols-2 lg:hidden"
      vertical={tabOrientation === "vertical"}
    >
      <Tab.List className="-mx-4 flex gap-x-4 gap-y-10 overflow-x-auto pb-4 pl-4 sm:mx-0 sm:flex-col sm:pb-0 sm:pl-0 sm:pr-8">
        {({ selectedIndex }) =>
          schedule.map((day, dayIndex) => (
            <div
              key={day.dateTime}
              className={clsx(
                "relative w-3/4 flex-none pr-4 sm:w-auto sm:pr-0",
                dayIndex !== selectedIndex && "opacity-70"
              )}
            >
              <DaySummary
                day={{
                  ...day,
                  date: (
                    <Tab className="[&:not(:focus-visible)]:focus:outline-none">
                      <span className="absolute inset-0" />
                      {day.date}
                    </Tab>
                  ),
                }}
              />
            </div>
          ))
        }
      </Tab.List>

      <Tab.Panels>
        {schedule.map((day) => (
          <Tab.Panel
            key={day.dateTime}
            className="[&:not(:focus-visible)]:focus:outline-none"
          >
            <TimeSlots day={day} />
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}

function Container({ className, ...props }) {
  return (
    <div
      className={clsx("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}
      {...props}
    />
  );
}
function DaySummary({ day }) {
  return (
    <>
      <h3 className="text-2xl font-semibold tracking-tight text-gray-900">
        <time dateTime={day.dateTime}>{day.date}</time>
      </h3>
      <p className="mt-1.5 text-base tracking-tight text-gray-900">
        {day.summary}
      </p>
    </>
  );
}

function TimeSlots({ day, className }) {
  return (
    <ol
      role="list"
      className={clsx(
        className,
        "space-y-8 bg-white/60 px-10 py-14 text-center shadow-xl shadow-blue-900/5 backdrop-blur"
      )}
    >
      {day.timeSlots.map((timeSlot, timeSlotIndex) => (
        <li
          key={timeSlot.start}
          aria-label={`${timeSlot.name} talking about ${timeSlot.description} at ${timeSlot.start} - ${timeSlot.end}`}
        >
          {timeSlotIndex > 0 && (
            <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
          )}
          <h4 className="text-lg font-semibold tracking-tight text-gray-900">
            {timeSlot.name}
          </h4>
          {timeSlot.description && (
            <p className="mt-1 tracking-tight text-gray-600">
              {timeSlot.description}
            </p>
          )}
          <p className="mt-1 font-mono text-sm text-blue-500">
            <time dateTime={`${day.dateTime}T${timeSlot.start}-08:00`}>
              {timeSlot.start}
            </time>{" "}
            -{" "}
            <time dateTime={`${day.dateTime}T${timeSlot.end}-08:00`}>
              {timeSlot.end}
            </time>{" "}
          </p>
        </li>
      ))}
    </ol>
  );
}

function ScheduleStatic({
  dictionary,
}: {
  dictionary: {
    aaa: string
  }
}) {
  console.log("===>",dictionary)
  return (
    <div className="hidden lg:grid lg:grid-cols-3 lg:gap-x-8">
      {schedule.map((day) => (
        <section key={day.dateTime}>
          {dictionary} =3333
          <DaySummary day={day} />
          <TimeSlots day={day} className="mt-10" />
        </section>
      ))}
    </div>
  );
}

export function Schedule({
  dictionary,
}: {
  dictionary: {
    aaa: string
  }
}) {
  return (
    <section id="schedule" aria-label="Schedule" className="py-20 sm:py-32">
      <Container className="relative z-10">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Program Kongresu
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
          {dictionary.aaa} =11111
          </p>
        </div>
      </Container>
      <div className="relative mt-14 sm:mt-24">
        <div className="absolute inset-x-0 -bottom-32 -top-40 overflow-hidden bg-indigo-50">
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
        </div>
        <Container className="relative">
          <ScheduleTabbed  dictionary={dictionary.aaa}/>
          <ScheduleStatic  dictionary={dictionary.aaa}/>
        </Container>
      </div>
    </section>
  );
}
