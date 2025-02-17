import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import { Evolution } from "./types";
import gql from "graphql-tag";

type EvolutionsProps = {
  evolutions: Evolution[];
};

export function Evolutions({ evolutions }: EvolutionsProps) {
  return (
    <Stack direction="row" justifyContent="space-between" padding={2}>
      {evolutions.map((e) => (
        <Item key={e.number}>
          <Stack alignItems="center">
            <Avatar src={e.image} />
            <Stack>{e.name}</Stack>
            <Stack>{`No. ${e.number}`}</Stack>
          </Stack>
        </Item>
      ))}
    </Stack>
  );
}

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
}));

export const EVOLUTIONS_FRAGMENT = gql`
  fragment EvolutionsFragment on Pokemon {
    evolutions {
      name
      image
      number
      evolutionRequirements {
        name
      }
    }
  }
`;
