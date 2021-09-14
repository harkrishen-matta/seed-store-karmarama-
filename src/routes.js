import React from "react";
import {Route, Switch} from "react-router-dom";

import Home from "./pages/Home";
import Product from "./pages/Product";

const Routes = () => (
    <>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/product/:id" exact component={Product}/>
        </Switch>
    </>
);


export default Routes;
