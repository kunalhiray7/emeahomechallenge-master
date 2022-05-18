import React, {Component} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {paths} from "./common/constants/constants";
import AppRoutes from "./home/routes";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route exact path={paths.ALL} element={<AppRoutes/>}/>
                </Routes>
            </BrowserRouter>
        );
    }
}

export default App;
