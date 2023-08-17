import EditPointView from '../view/edit-point-form.js';
import PointView from '../view/point-view.js';
import SortView from '../view/sort-view.js';
import EventsList from '../view/events-list.js';
import NewPointView from '../view/new-point-form.js';

import {render} from '../render.js';

export default class EventsPresenter {
  eventsListComponent = new EventsList();

  constructor({eventsContainer}) {
    this.eventsContainer = eventsContainer;
  }

  init() {
    render(new PointView(44), this.eventsListComponent.getElement());
    render(new SortView(), this.eventsContainer);
    render(this.eventsListComponent, this.eventsContainer);
    render(new NewPointView(), this.eventsListComponent.getElement());
    render(new PointView(), this.eventsListComponent.getElement());
    render(new EditPointView(), this.eventsListComponent.getElement());

    render(new PointView(3), this.eventsListComponent.getElement());
  }
}
