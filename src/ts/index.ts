// Определение интерфейсов
interface TimePeriod {
  start: number;
  end: number;
  id: string;
}

interface HistoricalEvent {
  eventYear: number;
  eventDescription: string;
}

// Определение классов
class TimePeriodClass implements TimePeriod {
  constructor(
    public start: number,
    public end: number,
    public id: string
  ) {}
}

class HistoricalEventClass implements HistoricalEvent {
  constructor(
    public eventYear: number,
    public eventDescription: string
  ) {}
}

// Создание массива временных отрезков
let timePeriods: TimePeriod[] = [
  new TimePeriodClass(1980, 1986, "circle-button1"),
  new TimePeriodClass(1987, 1991, "circle-button2"),
  new TimePeriodClass(1992, 1997, "circle-button3"),
  new TimePeriodClass(1999, 2004, "circle-button4"),
  new TimePeriodClass(2006, 2014, "circle-button5"),
  new TimePeriodClass(2015, 2022, "circle-button6"),
];

// Создание массива массивов событий
let events: HistoricalEvent[][] = [
  [
    new HistoricalEventClass(2015, "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды"),
    new HistoricalEventClass(2016, "Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11"),
    new HistoricalEventClass(2017, "Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi"),
    new HistoricalEventClass(2017, "Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi"),
    new HistoricalEventClass(2017, "Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi"),
  ],
  [
    new HistoricalEventClass(2015, "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды"),
    new HistoricalEventClass(2016, "Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11"),
    new HistoricalEventClass(2017, "Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi"),
    new HistoricalEventClass(2017, "Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi"),
    new HistoricalEventClass(2017, "Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi"),
  ],
  [
    // GOOD
    new HistoricalEventClass(
      1992,
      "Нобелевская премия по литературе - Дерек Уолкотт, «За блестящий образец карибского эпоса в 64 разделах»"),
    new HistoricalEventClass(
      1994,
      "«Бессонница» &#8212; роман Стивена Кинга"),
    new HistoricalEventClass(
      1995,
      "Нобелевская премия по литературе &#8212; Шеймас Хини"),

    // another date
    new HistoricalEventClass(
      1997,
      "Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi"),
    new HistoricalEventClass(
      1997,
      "Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi"),
  ],
  [
    new HistoricalEventClass(
      1999,
      "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды"),
    new HistoricalEventClass(
      2000,
      "Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11"),
    new HistoricalEventClass(
      2002,
      "Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi"),
    new HistoricalEventClass(
      2003,
      "Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi"),
    new HistoricalEventClass(
      2017,
      "Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi"),
  ],
  [
    new HistoricalEventClass(
      2015,
      "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды"),
    new HistoricalEventClass(
      2016,
      "Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11"),
    new HistoricalEventClass(
      2017,
      "Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi"),
    new HistoricalEventClass(
      2017,
      "Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi"),
    new HistoricalEventClass(
      2017,
      "Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi"),
  ],
  [
    new HistoricalEventClass(
      2015,
      "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды"),
    new HistoricalEventClass(
      2016,
      "Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11"),
    new HistoricalEventClass(
      2017,
      "Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi"),
    new HistoricalEventClass(
      2017,
      "Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi"),
    new HistoricalEventClass(
      2017,
      "Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi"),
  ],
];
