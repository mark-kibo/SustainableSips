import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import ViewIcon from "./EyeIcon";
import EditIcon from "./EditIcon";
import DeleteIcon from "./DeleteIcon";

export default function App() {
  const data = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Developer" },
    { id: 2, name: "Jane Doe", email: "jane@example.com", role: "Designer" },
    // Add more data as needed
  ];

  const renderActions = () => (
    <div className="flex items-center space-x-2">
      <span className="cursor-pointer">
        <ViewIcon />
      </span>
      <span className="cursor-pointer">
        <EditIcon />
      </span>
      <span className="cursor-pointer">
        <DeleteIcon />
      </span>
    </div>
  );

  return (
    <div className="mt-20">
      <Table aria-label="Example table with icons">
        <TableHeader>
          <TableColumn>Name</TableColumn>
          <TableColumn>Email</TableColumn>
          <TableColumn>Role</TableColumn>
          <TableColumn>Actions</TableColumn>
        </TableHeader>
        <TableBody emptyContent={"No rows to display."}>
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.role}</TableCell>
              <TableCell>{renderActions()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
