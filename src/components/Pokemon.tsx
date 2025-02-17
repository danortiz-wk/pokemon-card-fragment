/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";
import { Attacks } from "./Attacks";
import { Evolutions } from "./Evolutions";
import type { Pokemon} from "./types";
import gql from "graphql-tag";

type PokemonProps = {
  pokemon: Pokemon;
};

export function Pokemon({ pokemon }: PokemonProps) {
  return (
    <Card elevation={3} sx={{ width: 400 }}>
      <CardHeader
        sx={{ background: "orange" }}
        title={pokemon.name}
        subheader={
          <CardSubheader
            type={pokemon.types.map((type) => type).join(", ")}
            num={pokemon.number}
          />
        }
      />
      <CardMedia sx={{ p: 5 }} component="img" image={pokemon.image} />
      <Attacks attacks={pokemon.attacks} />
      <Evolutions evolutions={pokemon.evolutions} />
    </Card>
  );
}

function CardSubheader({ type, num }: { type: string; num: string }) {
  return (
    <Stack direction="row" justifyContent="space-between">
      <Stack>{`Type: ${type}`}</Stack>
      <Stack>{`No. ${num}`}</Stack>
    </Stack>
  );
}

export const POKEMON_FRAGMENT = gql`
  fragment PokemonFragment on Pokemon {
    name
    number
    image
    types
  }
`;