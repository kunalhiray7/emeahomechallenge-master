import React from 'react';
import {shallow} from 'enzyme';

import App from './App';
import {paths} from './common/constants/constants';
import AppRoutes from "./home/routes";

describe("App", () => {

    let wrapper;

    beforeEach(function () {
        wrapper = shallow(<App/>);
    });

    it('should render the base route', function () {
        const routes = wrapper.find('Routes');
        const homeRoute = routes.childAt(0);

        expect(homeRoute.prop("path")).toEqual(paths.ALL);
        expect(homeRoute.prop("element")).toEqual(<AppRoutes/>);
    });
});
