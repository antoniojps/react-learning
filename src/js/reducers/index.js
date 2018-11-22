import { ARTICLE_ADD } from './../constants/actionTypes';
import { articleAdd } from './articles'

const initialState = {
  articles: [],
}

const rootReducer = (state = initialState, action) => {
  const { type } = action
  if ( type === ARTICLE_ADD) return articleAdd(state, action)
  return initialState
}

export default rootReducer