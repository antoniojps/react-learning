export function articleAdd(state, action) {
  console.log(action)
  const { payload: newArticle } = action
  const articles = [...state.articles, newArticle]

  return { ...state, articles}
}


