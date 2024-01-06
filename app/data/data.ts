// data.ts

export type User = {
    id: string;
    name: string;
    email: string;
    role: string;
    team: string;
    status: string;
  };
  
  export type Column = {
    uid: string;
    name: string;
  };
  
  export const columns: Column[] = [
    { uid: "name", name: "Name" },
    { uid: "role", name: "Role" },
    { uid: "status", name: "Status" },
    { uid: "actions", name: "Actions" },
  ];
  
  export const users: User[] = [
    {
      id: "1",
      name: "Tony Reichert",
      email: "tony.reichert@example.com",
      role: "CEO",
      team: "Management",
      status: "Active",
    },
    {
      id: "2",
      name: "Zoey Lang",
      email: "zoey.lang@example.com",
      role: "Technical Lead",
      team: "Development",
      status: "Paused",
    },
    {
      id: "3",
      name: "Jane Fisher",
      email: "jane.fisher@example.com",
      role: "Senior Developer",
      team: "Development",
      status: "Active",
    },
    {
      id: "4",
      name: "William Howard",
      email: "william.howard@example.com",
      role: "Community Manager",
      team: "Marketing",
      status: "Vacation",
    },
    {
      id: "5",
      name: "Kristen Copper",
      email: "kristen.cooper@example.com",
      role: "Sales Manager",
      team: "Sales",
      status: "Active",
    },
  ];
  