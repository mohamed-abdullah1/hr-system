import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EmployeeInterface } from "@/lib/employeeData";
import { ColumnDef } from "@tanstack/react-table";
import {
  ChevronDown,
  ChevronUp,
  EyeIcon,
  MoreVertical,
  PencilLine,
  Trash,
} from "lucide-react";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

const gender = {
  Male: "Male 👨‍🦱",
  Female: "Female 👩🏼",
  "Non-binary": "Non-binary 🏳️‍🌈",
  Other: "Other 🤷‍♂️",
};
export const columns: ColumnDef<EmployeeInterface>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: "Full Name",
    cell: ({ row }) => {
      return (
        <p>
          {row.original.firstName} {row.original.lastName}
        </p>
      );
    },
  },
  {
    accessorKey: "email",
    header: "Email",
    enableColumnFilter: true,
  },
  {
    accessorKey: "gender",
    header: "Gender",
    cell: ({ row }) => {
      return <p className="text-center">{gender[row.original.gender]}</p>;
    },
  },
  {
    accessorKey: "maritalStatus",
    header: "Marital Status",
  },
  {
    accessorKey: "nationality",
    header: "Nationality",
  },
  {
    accessorKey: "phoneNumber",
    header: "Phone Number",
    cell: ({ row }) => {
      return <p className="">{row.original.phoneNumber}</p>;
    },
  },
  {
    accessorKey: "address",
    header: "address",
    cell: ({ row }) => {
      return (
        <p>{`${row.original.address.street}, ${row.original.address.city}, ${row.original.address.state}, ${row.original.address.country}, ${row.original.address.postalCode}`}</p>
      );
    },
  },
  {
    accessorKey: "availableLeaveBalance",
    header: ({ column }) => (
      <div className="flex">
        <Button onClick={column.getToggleSortingHandler()} variant="ghost">
          Available Leave Balance
          {column.getIsSorted() === "desc" ? (
            <ChevronUp size={14} className="m-2" />
          ) : (
            <ChevronDown size={14} className="m-2" />
          )}
        </Button>
      </div>
    ),
    cell: ({ row }) => (
      <div className="text-center"> {row.original.availableLeaveBalance}</div>
    ),
  },
  {
    id: "actions",
    cell: () => (
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant={"ghost"}
              className="flex data-[state-open]:bg-muted"
            >
              <MoreVertical />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                View
                <DropdownMenuShortcut>
                  <EyeIcon size={14} />
                </DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Edit
                <DropdownMenuShortcut>
                  <PencilLine size={14} />
                </DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Remove
                <DropdownMenuShortcut>
                  <Trash size={14} />
                </DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    ),
  },
];
// {
//   "id": "100fa91a-0373-4140-944f-83b045a4c5ff",
//   "firstName": "FirstName20",
//   "lastName": "LastName20",
//   "dateOfBirth": "1983-07-23T21:00:00.000Z",
//   "gender": "Female",
//   "maritalStatus": "Divorced",
//   "nationality": "American",
//   "email": "employee20@example.com",
//   "phoneNumber": "+1 (555) 746-1942",
//   "address": {
//     "street": "847 Main St",
//     "city": "Anytown",
//     "state": "CA",
//     "country": "USA",
//     "postalCode": "46181"
//   }
// }
