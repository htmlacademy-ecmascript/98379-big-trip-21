import PointView from '../view/list-point-view.js';
import EditPointView from '../view/list-edit-point-form.js';
import {render, replace} from '../framework/render.js';

export default class PointPresenter {
  #destinationsModel = null;
  #offersModel = null;
  #eventList = null;


  constructor({destinationsModel, offersModel, eventList}) {
    this.#destinationsModel = destinationsModel;
    this.#offersModel = offersModel;
    this.#eventList = eventList;
  }

  init(point) {
    this.point = point;
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

    render(pointComponent, this.#eventList.element);
  }
}
