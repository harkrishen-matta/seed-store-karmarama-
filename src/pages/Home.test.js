import React from "react";
import {render, fireEvent} from "@testing-library/react";
import Home from "./Home";
import {Provider} from 'react-redux'
import store from "../store";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

describe("<Home/>", () => {


    it("Renders without crashing", async () => {
        const {getByTestId} = render(
            <Provider store={store}>
                <Home/>
            </Provider>
        );

        await sleep(2000);

        expect(getByTestId("home-grid")).toBeInTheDocument();

    });

    it("Has 7 Products", async () => {
        const {queryAllByTestId} = render(
            <Provider store={store}>
                <Home/>
            </Provider>
        );

        await sleep(2000);

        expect(queryAllByTestId("products-as-list").length).toBe(7);
    });

});
