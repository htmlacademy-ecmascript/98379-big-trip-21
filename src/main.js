import HeaderTripInfo from './view/header-trip-info-view.js';
import HeaderFilters from './view/header-time-filters-view.js';

import {render, RenderPosition} from './render.js';

import EventsPresenter from './presenter/events-presenter.js';


const siteFiltersElement = document.querySelector('.trip-controls__filters');
const siteTripMainElement = document.querySelector('.trip-main');
const siteMainElement = document.querySelector('.trip-events');
const eventsPresenter = new EventsPresenter({eventsContainer: siteMainElement});

render(new HeaderFilters(), siteFiltersElement);
render(new HeaderTripInfo(), siteTripMainElement, RenderPosition.AFTERBEGIN);


eventsPresenter.init();
