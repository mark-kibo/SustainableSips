// data.ts

export type User = {
  id: string;
  name: string;
  role: string;


};

export type Column = {
  uid: string;
  name: string;
};

export const columns: Column[] = [
  { uid: "name", name: "Name" },
  { uid: "role", name: "Role" },
  { uid: "actions", name: "Actions" },
];

export const users: User[] = [
  {
    id: "1",
    name: "Tony Reichert",
    role: "CEO",
  },
  {
    id: "2",
    name: "Zoey Lang",
    role: "Technical Lead",
  },
  {
    id: "3",
    name: "Jane Fisher",
    role: "Senior Developer",
  },
  {
    id: "4",
    name: "William Howard",
    role: "Community Manager",
  },
  {
    id: "5",
    name: "Kristen Copper",
    role: "Sales Manager",

  },
];
