import SortView from '../view/trip-sort.js';
import EventsList from '../view/trip-events-list.js';
import EmptyList from '../view/trip-no-point.js';

//import NewPointView from '../view/list-new-point-form-view.js';

import {render} from '../framework/render.js';
import PointPresenter from './point-presenter.js';

export default class EventsPresenter {
  #sortComponent = new SortView();
  #eventsListComponent = new EventsList();
  #emptyComponent = new EmptyList();

  #container = null;

  #pointsModel = null;
  #destinationsModel = null;
  #offersModel = null;
  #points = [];

  constructor({container, destinationsModel, offersModel, pointsModel}) {
    this.#container = container;
    this.#pointsModel = pointsModel;
    this.#destinationsModel = destinationsModel;
    this.#offersModel = offersModel;
    this.#points = [...this.#pointsModel.get()];
  }


  #renderPoint(point) {
    const pointPresenter = new PointPresenter({
      destinationsModel: this.#destinationsModel,
      offersModel: this.#offersModel,
      eventList: this.#eventsListComponent});
    pointPresenter.init(point);
  }

  init() {
    if(this.#points.length === 0) {
      render(this.#emptyComponent, this.#container);
      return;
    }

    render(this.#sortComponent, this.#container);
    render(this.#eventsListComponent, this.#container);


    this.#points.forEach((point) => {
      this.#renderPoint(point);
    });
  }

}
