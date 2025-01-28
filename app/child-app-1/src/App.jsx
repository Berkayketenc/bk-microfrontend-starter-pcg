import "./App.css";
import ListPage from "./pages/ListPage";
import { Provider } from "react-redux";
import store from "parentApp/store";

function App() {
  return (
    <Provider store={store}>
      <div className="child-one">
        <ListPage />
      </div>
    </Provider>
  );
}

export default App;
