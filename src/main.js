import {render, RenderPosition} from './render.js';
import FiltersView from './view/filters.js';
import InfoTrip from './view/info-trip.js';

import EventsPresenter from './presenter/content-presenter.js';


const siteFiltersElement = document.querySelector('.trip-controls__filters');
const siteTripMainElement = document.querySelector('.trip-main');
const siteMainElement = document.querySelector('.trip-events');
const eventsPresenter = new EventsPresenter({eventsContainer: siteMainElement});

render(new FiltersView(), siteFiltersElement);
render (new InfoTrip(), siteTripMainElement, RenderPosition.AFTERBEGIN);


eventsPresenter.init();
