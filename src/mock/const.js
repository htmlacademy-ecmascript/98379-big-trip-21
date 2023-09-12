const CITIES = [
  'Chamonix',
  'Geneva',
  'Amsterdam',
  'Sochi',
  'Helsinki',
  'Oslo',
  'Kopengagen',
  'Den Haag',
  'Moscow',
  'Tokio',
  'Rio',
  'LA'
];

const TYPES = [
  'taxi',
  'bus',
  'train',
  'ship',
  'drive',
  'flight',
  'check-in',
  'sightseeing',
  'restaurant'
];

const DESTINATION_COUNT = 5;

const POINT_COUNT = 5;

const OFFER_COUNT = 5;

const DEFAULT_TYPE = 'flight';

const POINT_EMPTY = {
  basePrice: 0,
  dateFrom: null,
  dateTo: null,
  destination: null,
  isFavorite: false,
  offers: [],
  type: DEFAULT_TYPE
};

const DESCRIPTION = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.';

const PRICE = {
  MIN: 1,
  MAX: 1000
};

const DURATION = {
  HOUR: 5,
  DAY: 5,
  MIN: 59
};

export {POINT_EMPTY, OFFER_COUNT, DEFAULT_TYPE, POINT_COUNT, DESTINATION_COUNT, CITIES, DESCRIPTION, PRICE, DURATION, TYPES};
