import React from 'react'
import ArticleList from './ArticleList'
import ArticleFormAdd from './ArticleFormAdd'
import Surf from './Surf'

const App = () => (
  <div className="container">
    <div className="level">
      <h1 className="title is-1">Rei Tone</h1>
    </div>
    <div className="columns">
      <div className="column">
        <div className="tile is-vertical notification is-primary">
          <p className="title">Articles</p>
          <ArticleList />
        </div>
      </div>

      <div className="column">
        <div className="tile is-vertical notification">
          <p className="title">Add</p>
          <ArticleFormAdd />
        </div>
      </div>
    </div>
    <Surf />
  </div>
)

export default App