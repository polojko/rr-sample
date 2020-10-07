import { createStore } from 'redux'

const initialState = {
  cards: [],
  pageSize: 20,
  page: 1,
  searchTerm: ''
}

export const LOAD_CARDS = 'LOAD_CARDS'
export const DO_SEARCH = 'DO_SEARCH'

const reducer = (state = initialState, action) => {
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

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store