import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

import { StateContextProvider } from "./context";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<ThirdwebProvider
		activeChain={ChainId.Goerli}
		clientId="274254d5adf6ab52e6a4e5e523a2b729"
	>
		<Router>
			<StateContextProvider>
				<App />
			</StateContextProvider>
		</Router>
	</ThirdwebProvider>
);
