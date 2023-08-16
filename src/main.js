import {render, RenderPosition} from './render.js';
import FiltersView from './view/filters.js';
import InfoTrip from './view/info-trip.js';


const siteFiltersElement = document.querySelector('.trip-controls__filters');
const siteTripMainElement = document.querySelector('.trip-main');

render(new FiltersView(), siteFiltersElement);
render (new InfoTrip(), siteTripMainElement, RenderPosition.AFTERBEGIN);
