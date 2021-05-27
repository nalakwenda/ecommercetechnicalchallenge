import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import ProductPage from "./Pages/ProductPage";
import PageNotFound from "./Pages/PageNotFound";

function Routes() {
	return (
		<Switch>
			<Route exact path="/" component={HomePage} />
			<Route exact path="/Product/:id/">
				<ProductPage />
			</Route>
			<Route component={PageNotFound} />
		</Switch>
	);
}

export default Routes;
