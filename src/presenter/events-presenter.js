import SortView from '../view/main-sort-view.js';
import EventsList from '../view/main-events-list-view.js';

import PointView from '../view/list-point-view.js';
import NewPointView from '../view/list-new-point-form-view.js';
import EditPointView from '../view/list-edit-point-form.js';

import {render} from '../render.js';

export default class EventsPresenter {
  eventsListComponent = new EventsList();

  constructor({eventsContainer}) {
    this.eventsContainer = eventsContainer;
  }

  init() {
    render(new SortView(), this.eventsContainer);
    render(this.eventsListComponent, this.eventsContainer);
    render(new PointView(), this.eventsListComponent.getElement());
    render(new EditPointView(), this.eventsListComponent.getElement());
    render(new NewPointView(), this.eventsListComponent.getElement());
    for(let i = 2; i >= 0; i--) {
      render(new PointView(), this.eventsListComponent.getElement());
    }
  }
}
