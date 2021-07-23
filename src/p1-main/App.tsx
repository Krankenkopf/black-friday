import React from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import {Routes} from "./m1-ui/routes/Routes";
import Header from "./m1-ui/header/Header";
import Footer from "./m1-ui/footer/Footer";

export const App = () => {
    return (
        <HashRouter>
            <div className="App">
                <Header/>
                <Routes/>
                <Footer/>
            </div>
        </HashRouter>
    );
}
