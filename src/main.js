import HeaderTripInfo from './view/header-trip-info-view.js';
import HeaderFilters from './view/header-time-filters-view.js';

import MockService from './service/mock-service.js';
import DestinationsModel from './model/destinations-model.js';
import OffersModel from './model/offers-model.js';
import PointsModel from './model/points-model.js';


import {render, RenderPosition} from './framework/render.js';

import EventsPresenter from './presenter/events-presenter.js';


const siteFiltersElement = document.querySelector('.trip-controls__filters');
const siteTripMainElement = document.querySelector('.trip-main');
const siteMainElement = document.querySelector('.trip-events');

const mockService = new MockService();
const destinationsModel = new DestinationsModel(mockService);
const offersModel = new OffersModel(mockService);
const pointsModel = new PointsModel(mockService);

const eventsPresenter = new EventsPresenter({
  container: siteMainElement,
  destinationsModel,
  offersModel,
  pointsModel
});

render(new HeaderTripInfo(), siteTripMainElement, RenderPosition.AFTERBEGIN);
render(new HeaderFilters(), siteFiltersElement);


eventsPresenter.init();