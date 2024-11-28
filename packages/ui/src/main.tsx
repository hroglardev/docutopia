import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import { system } from "./theme.ts";
import "./index.css";
import { ColorModeProvider } from "./components/ui/color-mode.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ChakraProvider value={system}>
			<ColorModeProvider>
				<App />
			</ColorModeProvider>
		</ChakraProvider>
	</React.StrictMode>
);
