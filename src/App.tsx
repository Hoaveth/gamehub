import { Grid, GridItem, Show } from "@chakra-ui/react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem pl="2" area={"nav"}>
        <Header />
      </GridItem>
      <Show above="lg">
        <GridItem pl="2" area={"aside"}>
          <Sidebar />
        </GridItem>
      </Show>
      <GridItem pl="2" bg="green.300" area={"main"}>
        <Content />
      </GridItem>
    </Grid>
  );
}

export default App;
