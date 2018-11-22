import { ARTICLE_ADD } from './../constants/actionTypes'

export const articleAdd = article => ({
  type: ARTICLE_ADD,
  payload: article,
})