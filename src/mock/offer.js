import {getRandomInteger} from './utils.js';
import {Price} from './const.js';

function generateOffer(type) {
  ///console.log(typeof type);
  return {
    id: crypto.randomUUID(),
    offers: `Offer ${type}`,
    price: getRandomInteger(Price.MIN, (Price.MAX / 10))
  };
}

export {generateOffer};
