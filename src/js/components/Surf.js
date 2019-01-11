import React, { Component } from 'react'
import { SurfContext } from './../SurfContext'

export default class Surf extends Component {
  render() {
    return (
      <SurfContext.Consumer>
        {({ waves }) => {
          return (
              <div>
                How's the surf?
                {' '}
                {waves.quality}
              </div>
            )
        }
        }
      </SurfContext.Consumer>
    )
  }
}
