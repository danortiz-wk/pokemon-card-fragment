import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Attack } from "./types";
import { gql } from "@apollo/client";

type AttacksProps = {
  attacks: Attack;
};

export function Attacks({ attacks }: AttacksProps) {
  return (
    <CardContent>
      <Stack spacing={2}>
        <Item>
          <Stack direction="row" justifyContent="space-between">
            <Stack>{attacks.fast[0].name}</Stack>
            <Stack>{attacks.fast[0].damage}</Stack>
          </Stack>
        </Item>
        <Item>
          <Stack direction="row" justifyContent="space-between">
            <Stack>{attacks.special[0].name}</Stack>
            <Stack>{attacks.special[0].damage}</Stack>
          </Stack>
        </Item>
      </Stack>
    </CardContent>
  );
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "orange",
  padding: theme.spacing(1),
  textAlign: "center",
}));

export const ATTACKS_FRAGMENT = gql`
  fragment AttacksFragment on Pokemon {
    attacks {
      fast {
        name
        type
        damage
      }
      special {
        name
        type
        damage
      }
    }
  }
`;
