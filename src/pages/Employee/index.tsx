import { generateEmployees } from "@/lib/employeeData";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";

export default function DemoPage() {
  // const employees = generateEmployees(4);
  const employees = generateEmployees(20);
  console.log("🔥✨ ", { employees });
  const [columnFilters, setColumnFilters] = useState([]);
  return (
    <Card className="w-full h-full ">
      <CardHeader>
        <CardTitle>Employees</CardTitle>
        <CardDescription>show all employees at the company</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="container mx-auto py-10">
          <DataTable columns={columns} data={employees} />
        </div>
      </CardContent>
    </Card>
  );
}
