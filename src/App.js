import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
// import store from "./config/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./config/redux/reduxPersist/configureStore";
import Router from "./router";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
