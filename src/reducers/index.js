import {LOAD_CARDS, DO_SEARCH} from '../constants/ActionTypes';

const initialState = {
  cards: [],
  pageSize: 20,
  page: 1,
  searchTerm: ''
}

function rootReducer (state = initialState, action) {
  switch (action.type) {
    case LOAD_CARDS:
      return {
        ...state,
        page: ++state.page,
        cards: state.cards.concat(action.payload)
      }
    case DO_SEARCH:
        return {
            ...state,
            cards: [],
            page: 1,
            searchTerm: action.payload
            
        }
    default:
      return state
  }
}

export default rootReducer;