import {filter} from '../utils/filter.js';

function generateFilters(points) {
  return Object.entries(filter).map(
    ([filterType, filterPoints]) => ({
      type: filterType,
      isAvailability: filterPoints(points).length > 0,
    }),
  );
}

export {generateFilters};
