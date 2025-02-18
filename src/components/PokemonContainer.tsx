import { gql, useQuery } from "@apollo/client";
import Container from "@mui/material/Container";
import { Pokemon, POKEMON_FRAGMENT } from "./Pokemon";
import { EVOLUTIONS_FRAGMENT } from "./Evolutions";
import { ATTACKS_FRAGMENT } from "./Attacks";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

export function PokemonContainer() {
  const { loading, error, data } = useQuery(GET_POKEMON_QUERY, {
    variables: {
      name: "Charmander",
    },
  });

  if (loading)
    return (
      <Stack alignItems="center" flex={1} height="100%" justifyContent="center">
        <CircularProgress />
      </Stack>
    );

  if (error) return <p>Error: {error.message}</p>;

  const pokemon = data?.pokemon || [];

  return (
    <Container maxWidth="sm">
      {pokemon && <Pokemon pokemon={pokemon} />}
    </Container>
  );
}

const GET_POKEMON_QUERY = gql`
  query pokemon($name: String) {
    pokemon(name: $name) {
      ...PokemonFragment
      ...AttacksFragment
      ...EvolutionsFragment
    }
  }
  ${POKEMON_FRAGMENT}
  ${ATTACKS_FRAGMENT}
  ${EVOLUTIONS_FRAGMENT}
`;
