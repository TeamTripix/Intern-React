import Home from "./Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./Redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <persistGate persistor={persistor}>
          <Router>
            <Switch>
              <Route exact path="/">
                <Redirect to="/home" />
              </Route>
              <Route exact path="/home">
                <Home />
              </Route>
              <Route exact path="*">
                <Redirect to="/home" />
              </Route>
            </Switch>
          </Router>
        </persistGate>
      </Provider>
    </>
  );
}

export default App;
