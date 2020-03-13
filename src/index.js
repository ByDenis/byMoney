import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import moneyApp from './reducers/'

const store = createStore(moneyApp)


//import * as serviceWorker from './serviceWorker';

let render = (props) => { 
    ReactDOM.render(<Provider store={store}><App count={props.count.count}/></Provider>, document.getElementById('root')) 
}

render(store.getState());

store.subscribe(() => {
    let state = store.getState();
    render(state)
}
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
