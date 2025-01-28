import React from 'react';
import "./app.scss";
import Content from "./components/Content";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store.js";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="root-app">
          <Header />
          <Content />
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
