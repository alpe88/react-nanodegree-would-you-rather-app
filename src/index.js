import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
//import registerServiceWorker from './registerServiceWorker';

//these imports allow us to reap the benefits of the redux store and its' various aspects (like provider and the reducers we built)
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'

//in order to use the store we need to invoke createStore with our reducers passed in.
const store = createStore(reducer, middleware)

//our app can now be wrapped in a provider, allowing us to pass the store to it in a manageable way
ReactDOM.render(<Provider store={store}>
					<App />
				</Provider>, 
document.getElementById('root')
)

//registerServiceWorker();
