// Определение интерфейсов
export interface TimePeriod {
  start: number;
  end: number;
  id: string;
}

// интерфейс определяет форму объектов исторического события
export interface HistoricalEvent {
  eventYear: number;
  eventDescription: string;
}

// интерфейс определяет структуру объекта, который представляет собой исторический период,
// включая временной период и массив исторических событий, связанных с этим периодом
export interface HistoricalPeriod {
  period: TimePeriod;
  events: HistoricalEvent[];
}

export let historicalPeriods: HistoricalPeriod[] = [
  {
    period:  {start: 1980, end: 1986, id: 'circle-button1'},
    events: [
      {eventYear: 1980, eventDescription: 'Sinclair Research выпускает домашний компьютер ZX80'},
      {eventYear: 1980, eventDescription: 'Sinclair Research выпускает домашний компьютер ZX80'},
      {eventYear: 1980, eventDescription: 'Sinclair Research выпускает домашний компьютер ZX80'},
      {eventYear: 1980, eventDescription: 'Sinclair Research выпускает домашний компьютер ZX80'},
      {eventYear: 1980, eventDescription: 'Sinclair Research выпускает домашний компьютер ZX80'},
      {eventYear: 1980, eventDescription: 'Sinclair Research выпускает домашний компьютер ZX80'},
    ]
  },
  {
    period:  {start: 1987, end: 1991, id: 'circle-button2'},
    events: [
      {eventYear: 1987, eventDescription: '«Хищник»/Predator, США (реж. Джон Мактирнан).'},
      {eventYear: 1988, eventDescription: '«Кто подставил кролика Роджера»/who framed Roger Rabbit, Сша (реж. Роберт Земекис).'},
      {eventYear: 1989, eventDescription: '«Назад в будущее 2»/Back To The Future 2, США (реж. Роберт Земекис).'},
      {eventYear: 1990, eventDescription: '«Крепкий орешек 2»/Die Hard 2, США (реж. Ренни Харлин).'},
      {eventYear: 1991, eventDescription: '«Семейка Аддамс»/The Addams Family, США, (реж. Барри Зонненфельд).'},
    ]
  },
  {
    period:  {start: 1992, end: 1997, id: 'circle-button3'},
    events: [
      {eventYear: 1992, eventDescription: 'Нобелевская премия по литературе - Дерек Уолкотт, «За блестящий образец карибского эпоса в 64 разделах».'},
      {eventYear: 1994, eventDescription: '«Бессоница» - роман Стивена Кинга.'},
      {eventYear: 1995, eventDescription: 'Нобелевская премия по литературе - Шеймас Хини'},
      {eventYear: 1997, eventDescription: '«Гарри Поттер и философский камень», (писат. Дж.К. Роулинг)'},
      {eventYear: 1992, eventDescription: 'Нобелевская премия по литературе - Дерек Уолкотт, «За блестящий образец карибского эпоса в 64 разделах».'},
    ]
  },
  {
    period:  {start: 1999, end: 2004, id: 'circle-button4'},
    events: [
      {eventYear: 1999, eventDescription: 'Премьера балета «Золушка» в постановке Жан-Кристофа Майо, сценография Эрнеста Пиньона.'},
      {eventYear: 2000, eventDescription: 'Возобновлено издание журнала «Театр».'},
      {eventYear: 2002, eventDescription: 'Премьера трилогии Тома Стоппарда «Берег Утопии», Королевский Национальный театр, Лондон.'},
      {eventYear: 2003, eventDescription: 'Венеции театр «Фениче» был возрожден и открыт после пожара 1996 года.'},
      {eventYear: 2004, eventDescription: 'Сары Кейн дебютировал на русском языке в «Роял Корт».'},
    ]
  },
  {
    period:  {start: 2006, end: 2014, id: 'circle-button5'},
    events: [
      {eventYear: 2006, eventDescription: 'баскетбольный клуб ЦСКА стал победителем национального первенства России.'},
      {eventYear: 2008, eventDescription: 'С 8 по 24 августа в Пекине прошли 29-е летние Олимпийские игры .'},
      {eventYear: 2010, eventDescription: '13 - 28 февраля в Ванкувере: Зимние Олимпийские игры 2010 года.'},
      {eventYear: 2012, eventDescription: '2 августа - Летние Олимпийские игры.'},
      {eventYear: 2014, eventDescription: 'ⅩⅩⅠⅠ зимние Олимпийские игры (Сочи, Россия).'},
    ]
  },
  {
    period:  {start: 2015, end: 2022, id: 'circle-button6'},
    events: [
      {eventYear: 2015, eventDescription: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды.'},
      {eventYear: 2016, eventDescription: 'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11.'},
      {eventYear: 2017, eventDescription: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi.'},
      {eventYear: 2018, eventDescription: 'Старт космического апперата solar Probe Plus, предназначеннго для изучения Солнца.'},
      {eventYear: 2019, eventDescription: 'Google объявил о создании 53-кубитного квантового компьютера.'},
      {eventYear: 2020, eventDescription: 'Корабль Crew Dragon вернулся на Землю из первого пилотируемого полёта.'},
    ]
  },
];

// класс реализует интерфейс HistoricalEvent
export class HistoricalEventClass implements HistoricalEvent {
  constructor(
    public eventYear: number,
    public eventDescription: string
  ) {}
}

export class HistoricalPeriodClass implements HistoricalPeriod {
  constructor(
    public period: TimePeriod,
    public events: HistoricalEvent[]
  ) {}
}
