import React from "react";
import {render, fireEvent} from "@testing-library/react";
import Home from "./Home";
import {Provider} from "react-redux";
import store from "../store";
import Header from "../components/header";
import Product from "./Product";
import {Router, Route} from "react-router-dom";
import {createMemoryHistory} from "history";


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

describe("<Product/>", () => {

    jest.mock('react-router-dom', () => ({
        ...jest.requireActual('react-router-dom'),
        useParams: () => ({
            id: 1,
        }),
        useRouteMatch: () => ({ url: '/product/1' }),
    }));


    it("Renders without crashing", async () => {
        const history = createMemoryHistory();
        const route = "/product/1";
        history.push(route);

        await sleep(2000);

        const {getByText} = render(
            <Provider store={store}>
                <Router history={history}>
                    <Route path={'/product/:id'}>
                        <Product/>
                    </Route>
                </Router>
            </Provider>
        );


        expect(getByText("Product is Loading")).toBeInTheDocument();

    });

});
