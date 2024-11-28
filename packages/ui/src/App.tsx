
import "./App.css";
import Sidebar from "./components/Sidebar";
import { Box } from "@chakra-ui/react";
import { ColorModeButton } from "./components/ui/color-mode";
function App() {


	return (
	<Box pt={"1rem"} px={"2rem"} color={"primary-text"} bg={"primary-background-color"} _dark={{bg: "primary-background-color-dark", color: "primary-text-dark"}}>
		<ColorModeButton mb={"1rem"} />
		<Sidebar />
	</Box>
	);
}

export default App;
