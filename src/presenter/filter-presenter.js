import HeaderFilters from '../view/header-time-filters-view.js';

import {generateFilters} from '../mock/filter.js';
import {render} from '../framework/render.js';

export default class FilterPresenter {
  #container = null;

  #pointsModel = null;

  #filters = [];

  constructor({container, pointsModel}) {
    this.#container = container;
    this.#pointsModel = pointsModel;

    this.#filters = generateFilters(this.#pointsModel.get());

    // вариант с созвона
    // this.#filters = Object.entries(filter)
    // .map(([filterType, filterPoints], index) => ({
    //   type: filterType,
    //   isCheked: index === 0,
    //   isDisabled: filterPoints(this.#pointsModel.get()).length === 0,
    // }));
  }

  init() {
    render(new HeaderFilters(this.#filters), this.#container);
  }
}


