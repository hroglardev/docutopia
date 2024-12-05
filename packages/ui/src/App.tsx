
import "./App.css";
import Sidebar from "./components/Sidebar";
import { Grid, GridItem } from "@chakra-ui/react";
import { ColorModeButton } from "./components/ui/color-mode";
import BodyParamsContainer from "./components/BodyParamsContainer";
import ResponseContainer from "./components/ResponseContainer";

function App() {


	return (
	<>	
	<Grid templateColumns={{base: "1fr", lg: "auto 1.4fr 1fr"}} templateRows={{base: "auto 1fr 1fr", lg: "auto 1fr"}} pt={"1rem"} color={"font-default"} bg={"primary-background-color"} _dark={{bg: "primary-background-color-dark", color: "primary-text-dark"}}>
		<GridItem bg={""} colSpan={3} rowStart={1} rowEnd={2}>
			<ColorModeButton mb={"1rem"} ml={"40px"} />
		</GridItem>
		<GridItem bg={""} colSpan={1} rowStart={2} rowEnd={3}>
			<Sidebar />
		</GridItem>
		<GridItem bg={""} p={"1rem"} colStart={2} colEnd={3} rowSpan={1}>
			<BodyParamsContainer />
		</GridItem>
	    <GridItem>
			<ResponseContainer />
		</GridItem>		
	</Grid>
	</>
	);
}

export default App;
