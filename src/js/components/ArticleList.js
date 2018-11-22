import React from 'react'
import { connect } from 'react-redux'

function mapStateToProps(state) {
  const { articles } = state
  return { articles }
}

const ConnectedList = ({ articles }) => (
  <ul>
    {
      articles.map(article => (
        <li key={ article.id }>
          { article.title }
        </li>
      ))
    }
  </ul>
)

const ArticleList = connect(mapStateToProps)(ConnectedList)

export default ArticleList

