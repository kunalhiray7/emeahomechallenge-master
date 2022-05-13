import React from 'react';
import {shallow} from 'enzyme';

import App from './App';
import {paths} from './common/constants/constants';
import Home from "./home/home";

describe("App Routes", () => {

    let wrapper;

    beforeEach(function () {
        wrapper = shallow(<App/>);
    });

    it('should render the route for edit profile', function () {
        const routes = wrapper.find('Routes');
        const homeRoute = routes.childAt(0);

        expect(homeRoute.prop("path")).toEqual(paths.HOME);
        expect(homeRoute.prop("element")).toEqual(<Home/>);
    });
});
