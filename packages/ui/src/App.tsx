
import "./App.css";
import Sidebar from "./components/Sidebar";
import Response from "./components/Response";
import { Grid, GridItem } from "@chakra-ui/react";
import { ColorModeButton } from "./components/ui/color-mode";
import InputField from "./components/Input";
function App() {


	return (
	<>	
	{/* <Grid templateColumns={"auto 1fr 1fr"} templateRows={"auto 1fr"} pt={"1rem"} px={"2rem"} color={"primary-text"} bg={"primary-background-color"} _dark={{bg: "primary-background-color-dark", color: "primary-text-dark"}}>
		<GridItem bg={"blue"} colSpan={3} rowStart={1} rowEnd={2}>
			<ColorModeButton mb={"1rem"} />
		</GridItem>
		<GridItem bg={"red"} colSpan={1} rowStart={2} rowEnd={3}>
			<Sidebar />
		</GridItem>
		<GridItem bg={"orange"} colStart={2} colEnd={3} rowSpan={1}>
			<Response code={200} message={"testing the message"} />
		</GridItem>
	</Grid> */}
	<InputField label="uuid" type="string" isRequired={true} inputType="text"/>
	</>
	);
}

export default App;
