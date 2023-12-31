import ApiService from '../framework/api-service.js';

const Metod = {
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST',
  DELETE: 'DELETE'
};

const ApiUrl = {
  POINTS: 'points',
  DESTINATIONS: 'destinations',
  OFFERS: 'offers',
};

export default class PointService extends ApiService {
  get destinations() {
    return this._load({url: 'destinations'})
      .then(ApiService.parseResponse);
  }

  get offers() {
    return this._load({url: 'offers'})
      .then(ApiService.parseResponse);
  }

  get points() {
    return this._load({url: 'points'})
      .then(ApiService.parseResponse);
  }

  async updatePoint(point) {
    const response = await this._load({
      url: `${ApiUrl.POINTS}/${point.id}`,
      method: Metod.PUT,
      body: JSON.stringify(this.#adaptToServer(point)),
      headers:new Headers({'Content-Type': 'application/json'}),
    });

    const parsedResponse = await ApiService.parseResponse(response);
    return parsedResponse;
  }

  async addPoints(point) {
    const response = await this._load({
      url: `${ApiUrl.POINTS}`,
      method: Metod.POST,
      body: JSON.stringify(this.#adaptToServer(point)),
      headers: new Headers({'Content-Type': 'application/json'}),
    });
    const parsedResponse = await ApiService.parseResponse(response);
    return parsedResponse;
  }

  async deletePoint(point) {
    const response = await this._load({
      url: `${ApiUrl.POINTS}/${point.id}`,
      method: Metod.DELETE
    });

    return response;
  }

  #adaptToServer(point) {
    const adaptedPoint = {...point,
      'date_from': point.dateFrom instanceof Date ? point.dateFrom.toISOString() : null,
      'date_to': point.dateTo instanceof Date ? point.dateTo.toISOString() : null,
      'is_favorite': point.isFavorite,
      'base_price': point.basePrice
    };

    delete adaptedPoint.dateFrom;
    delete adaptedPoint.dateTo;
    delete adaptedPoint.isFavorite;
    delete adaptedPoint.basePrice;

    return adaptedPoint;
  }
}
