export type Extract = {
  value: number;
  date: Date;
  description: string;
};

export type Account = {
  name: string;
  cpf: number;
  date: Date;
  balance: number;
  extract: Extract[];
};

export let ArrayAccounts: Account[] = [
  {
    name: "Edu",
    cpf: 95788493875,
    date: new Date("Dec 21, 2000"),
    balance: 500,
    extract: [],
  },
  {
    name: "Paulo",
    cpf: 23612353875,
    date: new Date("Dec 10, 1999"),
    balance: 1500,
    extract: [],
  },
];
