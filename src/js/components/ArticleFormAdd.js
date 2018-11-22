import React, { Component } from 'react'
import { connect } from 'react-redux'
import uuidv1 from "uuid"
import { articleAdd } from './../actions/articles'

function mapDispatchToProps (dispatch) {
  return {
    articleAdd: article => dispatch(articleAdd(article))
  }
}

class ConnectedForm extends Component {
  constructor () {
    super()

    this.state = {
      title: ''
    }

    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleTitleChange(event) {
    this.setState({ title: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    const { title } = this.state
    const id = uuidv1()

    const newArticle = { title, id }
    this.props.articleAdd(newArticle)

    this.setState({ title: '' })
  }

  render() {
    const { title } = this.state

    return (
      <form onSubmit={this.handleSubmit}>

        <div className="field">
          <label className="label">Title</label>
          <div className="control">
            <input
              className="input"
              type="text"
              id="title"
              value={title}
              onChange={this.handleTitleChange}
              placeholder="Type a title"
            />
          </div>
        </div>


        <button type="submit" className="button is-primary">
          SAVE
        </button>
      </form>
    )
  }

}

const ArticleFormAdd = connect(null, mapDispatchToProps)(ConnectedForm)

export default ArticleFormAdd