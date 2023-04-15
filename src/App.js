import React from "react";
import "./style.css";
import MainComponent from "../components/MainComponent/index";
import Header from "../components/Header/index";
import Footer from "../components/Footer/index";
import { Router, Routes, Route } from "react-router-dom";
import {ProductListing} from "../HOC/productListing"

export default function App() {
  
  return (
    <div className="container">
        <Header />
        {/* <MainComponent /> */}
        <ProductListing category_id="610811f7f774dd0104d0b62e" limit="100" page="1"/>
        <Footer />
        {/* <Router>
          <Routes>
            <Route path="/productListing" exact component={ProductListing} />
            <Route path="/" exact component={MainComponent} />
          </Routes>
    </Router> */}
    </div>
  );
}
