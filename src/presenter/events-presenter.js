import SortView from '../view/main-sort-view.js';
import EventsList from '../view/main-events-list-view.js';

import PointView from '../view/list-point-view.js';
import EditPointView from '../view/list-edit-point-form.js';
import EmptyList from '../view/list-empty.js';

//import NewPointView from '../view/list-new-point-form-view.js';

import { render, replace } from '../framework/render.js';

export default class EventsPresenter {
  #sortComponent = new SortView();
  #eventsListComponent = new EventsList();
  #emptyComponent = new EmptyList();

  #container = null;

  #destinationsModel = null;
  #offersModel = null;
  #pointsModel = null;

  #points = [];


  constructor({container, destinationsModel, offersModel, pointsModel}) {
    this.#container = container;
    this.#destinationsModel = destinationsModel;
    this.#offersModel = offersModel;
    this.#pointsModel = pointsModel;

    this.#points = [...this.#pointsModel.get()];
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

  #renderPoint = (point) => {
    const pointComponent = new PointView({
      point,
      pointDestinations: this.#destinationsModel.getById(point.destination),
      pointOffers: this.#offersModel.getByType(point.type),
      onEditClick: pointEditClickHandler
    });

    const pointEditComponent = new EditPointView({
      point,
      pointDestinations: this.#destinationsModel.get(),
      pointOffers: this.#offersModel.get(),
      onResetClick: resetButtonClickHandler,
      onSubmitClick: pointSubmitHandler
    });

    const replaceFormToPoint = () => {
      replace(pointComponent, pointEditComponent);
    };

    const replacePointToForm = () => {
      replace(pointEditComponent, pointComponent);
    };

    const escKeyDownHandler = (evt) => {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        evt.preventDefault();
        replaceFormToPoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };

    function pointEditClickHandler() {
      replacePointToForm();
      document.addEventListener('keydown', escKeyDownHandler);
    }

    function resetButtonClickHandler() {
      replaceFormToPoint();
      document.addEventListener('keydown', escKeyDownHandler);
    }

    function pointSubmitHandler() {
      replaceFormToPoint();
      document.removeEventListener('keydown', escKeyDownHandler);
    }

    render(pointComponent, this.#eventsListComponent.element);
  };
}
