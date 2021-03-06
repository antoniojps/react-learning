import React from 'react';
import { render } from 'react-dom';
import store from './js/store/index'
import { Provider } from 'react-redux'
import { SurfProvider } from './js/SurfContext'
import * as serviceWorker from './serviceWorker';
import App from './js/components/App';
import 'bulma/css/bulma.min.css'

render(
  (
    <Provider store={store}>
      <SurfProvider>
        <App />
      </SurfProvider>
    </Provider>
  ),
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

