import SortView from '../view/main-sort-view.js';
import EventsList from '../view/main-events-list-view.js';

import PointView from '../view/list-point-view.js';
//import NewPointView from '../view/list-new-point-form-view.js';
import EditPointView from '../view/list-edit-point-form.js';

//import DestinationsModel from '../model/destinations-model.js';


import {render} from '../render.js';

export default class EventsPresenter {
  sortComponent = new SortView();
  eventsListComponent = new EventsList();

  constructor({container, destinationModel, offersModel, pointsModel}) {
    this.container = container;
    this.destinationModel = destinationModel;
    this.offersModel = offersModel;
    this.pointsModel = pointsModel;

  // this.points = [...pointsModel.get()];
  }

  init() {
    render(this.sortComponent, this.container);
    render(this.eventsListComponent, this.container);

    render(
      new EditPointView({
        points: this.points[0],
        pointsDestinations: this.destinationsModel.get(),
        pointOffers: this.offersModel.get()
      }),
      this.eventsListComponent.getElement()
    );
    this.points.forEach((point) => {
      render(
        new PointView({
          point,
          pointsDestination: this.destinationsModel.getById(point.detination),
          pointOffer: this.offersModel.getByType(point.type)
        }),
        this.eventsListComponent.getElement()
      );
    });
    // render(new PointView(), this.eventsListComponent.getElement());
    // render(new EditPointView(), this.eventsListComponent.getElement());
    // render(new NewPointView(), this.eventsListComponent.getElement());
    // for(let i = 2; i >= 0; i--) {
    //   render(new PointView(), this.eventsListComponent.getElement());
    // }
  }
}
