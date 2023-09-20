import {getRandomInteger} from './utils.js';
import {PRICE} from './const.js';

function generateOffer(type) {
  return {
    id: crypto.randomUUID(),
    offers: `Offer ${type}`,
    price: getRandomInteger(PRICE.MIN, (PRICE.MAX / 10))
  };
}

export {generateOffer};
