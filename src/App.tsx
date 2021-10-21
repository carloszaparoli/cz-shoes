import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Routes from './routes';
import store, { persistor } from './store';

import { Header } from './components/Header';
import { Footer } from './components/Footer';

import GlobalStyle, { Content } from './styles/GlobalStyle';

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <BrowserRouter>
            <GlobalStyle />
            <Header />
            <Content>
              <Routes />
            </Content>
            <Footer />
          </BrowserRouter>
        </PersistGate>
      </Provider>
      <ToastContainer
        autoClose={3000}
        className="toast-container"
        theme="colored"
      />
    </>
  );
}

export default App;
