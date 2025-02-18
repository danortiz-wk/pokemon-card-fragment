import Container from "@mui/material/Container";
import { PokemonContainer } from "./components/PokemonContainer";
import Stack from "@mui/material/Stack";

export default function App() {
  return (
    <main>
      <Container maxWidth="sm">
        <Stack alignItems="center" justifyContent="center" height="100vh">
          <PokemonContainer />
        </Stack>
      </Container>
    </main>
  );
}
