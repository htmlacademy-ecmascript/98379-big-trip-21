import {getRandomInteger} from './utils.js';
import {PRICE} from './const.js';
import {getDate} from './utils.js';

function generatePoint(type, destinationId, offerIds) {
  return {
    id: crypto.randomUUID(),
    basePrice: getRandomInteger(PRICE.MIN, PRICE.MAX),
    dateFrom: getDate({next: false}),
    dateTo: getDate({next: true}),
    destination: destinationId,
    isFavorite: !!getRandomInteger(0, 1),
    offers: offerIds,
    type: type
  };
}

export {generatePoint};
