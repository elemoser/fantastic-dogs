import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import DogGrid from "./components/DogGrid";
import DogGroup from "./components/DogGroup";
import useDogs from "./hooks/useDogs";

function App() {
  const { dogs, error, isLoading } = useDogs();

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          <DogGroup dogs={dogs} error={error} isLoading={isLoading} />
        </GridItem>
      </Show>
      <GridItem area="main">
        <DogGrid dogs={dogs} error={error} isLoading={isLoading} />
      </GridItem>
    </Grid>
  );
}

export default App;
