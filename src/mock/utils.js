import dayjs from 'dayjs';
import {DURATION} from './const.js';

const getRandomInteger = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min > max || min < 0 || max < 0) {
    return NaN;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

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
