import {shallow} from "enzyme";
import {paths} from "../../common/constants/constants";
import Home from "../home";
import React from "react";
import AppRoutes from "../routes";
import {BookDetails} from "../../books/bookDetails";
import {Cart} from "../../cart/cart";

describe("App Routes", () => {

    let wrapper;

    beforeEach(function () {
        wrapper = shallow(<AppRoutes/>);
    });

    it('should render the route for home', function () {
        const routes = wrapper.find('Routes');
        const homeRoute = routes.childAt(0);

        expect(homeRoute.prop("path")).toEqual(paths.HOME);
        expect(homeRoute.prop("element")).toEqual(<Home/>);
    });

    it('should render the route for BookDetails', function () {
        const routes = wrapper.find('Routes');
        const homeRoute = routes.childAt(1);

        expect(homeRoute.prop("path")).toEqual(paths.BOOK_DETAILS);
        expect(homeRoute.prop("element")).toEqual(<BookDetails/>);
    });

    it("should render the route for cart", () => {
        const routes = wrapper.find('Routes');
        const homeRoute = routes.childAt(2);

        expect(homeRoute.prop("path")).toEqual(paths.CART);
        expect(homeRoute.prop("element")).toEqual(<Cart/>);
    });
});
