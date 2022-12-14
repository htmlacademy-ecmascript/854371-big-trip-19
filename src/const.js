const MAX_PRICE = 10000;
const NUMBER_POINTS_CREATED = 10;
const POINT_TYPES = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];
const CITY_DESCRIPTIONS = ['lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor', 'sit amet luctus venenatis lectus magna fringilla urna porttitor rhoncus', 'dictum sit amet justo donec enim diam vulputate ut pharetra', 'ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper', 'dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo', 'elementum curabitur vitae nunc sed velit dignissim sodales ut eu', 'feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit'];
const CITIES = ['Toronto', 'Quebec', 'Vancouver', 'Calgary', 'Ottawa', 'Montreal', 'Victoria', 'St. John\'s', 'Charlottetown', 'Saskatoon', 'Whitehorse', 'Halifax'];

const DateFormat = {
  HUMANIZE: 'MMM D',
  INTERNATIONAL: 'YYYY-MM-DD',
  INTERNATIONAL_WITH_TIME: 'DD/MM/YY HH:mm',
  SHORT_TIME: 'm[M]',
  AVERAGE_TIME: 'HH[H] mm[M]',
  LURGE_TIME: 'DD[D] HH[H] mm[M]',
  LOCAL_TIME: 'HH:mm'
};

const Minutes = {
  IN_HOUR: 60,
  IN_DAY: 1440,
};

const TimeUnits = {
  DAY: 'day',
  HOUR: 'hour',
  MINUTE: 'minute',
  SECOND: 'second'
};

const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING'
};

const SortType = {
  DEFAULT: 'default',
  DURATION: 'duration',
  PRICE: 'price'
};

export {
  MAX_PRICE,
  NUMBER_POINTS_CREATED,
  POINT_TYPES,
  CITY_DESCRIPTIONS,
  CITIES,
  DateFormat,
  TimeUnits,
  Minutes,
  Mode,
  SortType
};
