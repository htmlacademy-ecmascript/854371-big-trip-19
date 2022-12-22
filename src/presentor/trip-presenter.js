import {render} from '../render.js';
import TripFiltersView from '../view/trip-filters-view.js';
import TripSortView from '../view/trip-sort-view.js';
import TripListView from '../view/trip-list-view.js';
import PointView from '../view/point-view.js';
import EditPointView from '../view/edit-point-view.js';
import TripListEmptyView from '../view/trip-list-empty-view.js';

export default class TripPresenter {
  #filtersContainer = null;
  #tripEventsContainer = null;
  #pointsModel = null;

  #tripFiltersView = new TripFiltersView();
  #tripSortView = new TripSortView();
  #tripListView = new TripListView();
  #tripListEmptyView = new TripListEmptyView();

  #points = [];
  #destinations = [];
  #offers = [];

  constructor({filtersContainer, tripEventsContainer, pointsModel}) {
    this.#filtersContainer = filtersContainer;
    this.#tripEventsContainer = tripEventsContainer;
    this.#pointsModel = pointsModel;
  }

  init() {
    this.#installEnvironmentTemplate();
  }

  #installEnvironmentTemplate() {
    if (this.#pointsModel.points) {
      this.#points = [...this.#pointsModel.points];
      this.#destinations = [...this.#pointsModel.destinations];
      this.#offers = [...this.#pointsModel.offers];

      render(this.#tripFiltersView, this.#filtersContainer);
      render(this.#tripSortView, this.#tripEventsContainer);
      render(this.#tripListView, this.#tripEventsContainer);
      for (let i = 0; i < 5; i++) {
        this.#renderPoint(this.#points[i], this.#destinations, this.#offers);
      }
    } else {
      render(this.#tripListEmptyView, this.#tripEventsContainer);
    }
  }

  #renderPoint(point, destinations, offers) {
    const pointComponent = new PointView({
      point: point,
      destinations: destinations,
      offers: offers
    });
    const pointEditComponent = new EditPointView({
      point: point,
      destinations: destinations,
      offers: offers
    });

    const replacePointToForm = () => {
      pointComponent.element.replaceWith(pointEditComponent.element);
    };

    const replaceFormToPoint = () => {
      pointEditComponent.element.replaceWith(pointComponent.element);
    };

    const onOpenEditFormEscKeyDown = (evt) => {
      if (evt.key === 'Esc' || evt.key === 'Escape') {
        evt.preventDefault();
        replaceFormToPoint();
        document.removeEventListener('keydown', onOpenEditFormEscKeyDown);
      }
    };

    pointComponent.element.querySelector('.event__rollup-btn').addEventListener('click', () => {
      replacePointToForm();
      document.addEventListener('keydown', onOpenEditFormEscKeyDown);
    });

    pointEditComponent.element.querySelector('.event--edit').addEventListener('submit', (evt) => {
      evt.preventDefault();
      replaceFormToPoint();
    });

    pointEditComponent.element.querySelector('.event__rollup-btn').addEventListener('click', () => {
      replaceFormToPoint();
    });

    render(pointComponent, this.#tripListView.element);
  }
}
