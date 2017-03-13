'use strict';

export default class Filter {
  static defaultState = {
    sort: {
      defaultOrder: 'asc',
      order: 'asc',
      text: 'Title',
      value: 'title'
    }
  };

  constructor(name, initialState) {
    this.CLEAR = `/${name}/CLEAR`;
    this.UPDATE = `/${name}Filter/UPDATE`;
    this.initialState = { ...Filter.defaultState, ...initialState };
  }

  getReducer() {
    return (state = this.initialState, action) => {
      switch (action.type) {
        case this.UPDATE:
          return {
            ...state,
            ...action.payload
          };

        case this.CLEAR:
          return this.initialState;

        default:
          return state;
      }
    };
  }

  update(payload) {
    return { type: this.UPDATE, payload };
  }

  clear() {
    return { type: this.CLEAR };
  }
}

// project-filter.js
const projectFilter = new Filter('project', { project: {}, tags: [] });

export default const projectFilter.getReducer();
export const clearProjectFilter = projectFilter.clear;
export const updateProjectFilter = projectFilter.update;
