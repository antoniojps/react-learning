import React, { Component, createContext } from 'react'

export const SurfContext = createContext()

export class SurfProvider extends Component {
  state = {
    quality: 'great',
    wind: 'offshore',
    height: '1.2m',
    interval: '11s',
  }
  render() {
    return (
      <SurfContext.Provider value={{waves: this.state}}>
        {this.props.children}
      </SurfContext.Provider>
    )
  }
}