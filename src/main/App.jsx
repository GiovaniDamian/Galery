import React, { Component } from "react";
import './App.css';
import 'font-awesome/css/font-awesome.min.css'


import Home from "../components/templates/Home";
import Footer from "../components/templates/Footer";

export default class Galery extends Component {
    render() {
        return <div class="galery">
            <Home />
            <Footer />
        </div>
    }
}