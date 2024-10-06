import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client' for React 18
import { Provider } from 'react-redux'; // Wrap with Provider
import { createStore, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk'; // Import thunk as a named export
import reducers from './reducers'; // Import your root reducer

import App from './App'; // Import your App component

// Create the store using reducers and thunk middleware
const store = createStore(reducers, compose(applyMiddleware(thunk)));

// Create the root element and render the App wrapped with Provider
const root = ReactDOM.createRoot(document.getElementById('root')); // Use createRoot
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
