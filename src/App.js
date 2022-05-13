import React, {Component} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {paths} from "./common/constants/constants";
import Home from "./home/home";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route exact path={paths.HOME} element={<Home/>}/>
                </Routes>
            </BrowserRouter>
        );
    }
}

export default App;
