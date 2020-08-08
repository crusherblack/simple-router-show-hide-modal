import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import ListTour from "./pages/ListTour";
import Transcation from "./pages/Transcation";
import Modal from "./components/modal/Modal";

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const handleModal = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <>
      <Router>
        <Header setModalVisible={handleModal} />
        {modalVisible && <Modal />}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/list-tour" component={ListTour} />
          <Route exact path="/transcation" component={Transcation} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
