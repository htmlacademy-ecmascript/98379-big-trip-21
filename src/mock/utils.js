import dayjs from 'dayjs';
import {DURATION} from './const.js';

function getRandomInteger(a = 0, b = 1) {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(lower + Math.random() * (upper - lower + 1));
}

function getRandomValue(items) {
  return items[getRandomInteger(0, items.length - 1)];
}

let date = dayjs().subtract(getRandomInteger(0, DURATION.DAY), 'day').toDate();

function getDate({next}) {
  const minsGap = getRandomInteger(0, DURATION.MIN);
  const hoursGap = getRandomInteger(1, DURATION.HOUR);
  const daysGap = getRandomInteger(0, DURATION.DAY);

  if(next) {
    date = dayjs(date)
      .add(minsGap, 'minute')
      .add(hoursGap, 'hour')
      .add(daysGap, 'day')
      .toDate();
  }

  return date;
}

export {getDate, getRandomInteger, getRandomValue};
