// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';




import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

// ### Google Auth Provider

import { GoogleOAuthProvider } from '@react-oauth/google';

// ### Google Auth Provider

let persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));


// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

root.render(
  <GoogleOAuthProvider clientId='684383563657-mi8p9fv3gtab41uhlgqpn33nsm215m83.apps.googleusercontent.com' >
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
  </GoogleOAuthProvider>
);

