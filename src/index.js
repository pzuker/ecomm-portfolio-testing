import React from 'react';
//import { createRoot } from 'react-dom/client';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Elements } from '@stripe/react-stripe-js';

import { persistor, store } from './store/store';
import App from './App';
import { stripePromise } from './utils/stripe/stripe.utils';
import * as serviceWorkerRegistration from './serviceWorkerRegistration.ts';

//const root = createRoot(document.getElementById('root'));
const rootElement = document.getElementById('root');

render(
  //root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Elements stripe={stripePromise}>
            <App />
          </Elements>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  rootElement
);

serviceWorkerRegistration.register();
