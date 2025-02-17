export type Evolution = {
  image: string;
  name: string;
  number: string;
};

type SingleAttack = {
  name: string;
  type: string;
  damage: number;
};

export type Attack = {
  fast: SingleAttack[];
  special: SingleAttack[];
};

export type Pokemon = {
  name: string;
  number: string;
  image: string;
  types: string[];
  attacks: Attack;
  evolutions: Evolution[];
};
