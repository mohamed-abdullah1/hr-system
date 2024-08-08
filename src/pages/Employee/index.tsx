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

export default function DemoPage() {
  // const employees = generateEmployees(4);
  const employees = generateEmployees(20);
  console.log("🔥✨ ", { employees });
  return (
    <Card className="w-full h-full p-0">
      <CardHeader>
        <CardTitle>Employees</CardTitle>
        <CardDescription>show all employees at the company</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="container mx-auto lg:py-10">
          <DataTable columns={columns} data={employees} />
        </div>
      </CardContent>
    </Card>
  );
}
