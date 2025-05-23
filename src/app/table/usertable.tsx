// components/Table/TableColumnConfig.ts
import React from "react";
import Link from "next/link";
import { Column } from "@/app/components/table";
import { UserType } from "@/app/models/users";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

export const userColumns: Column<UserType>[] = [
  { header: "Name", accessor: "name" },
  { header: "Email", accessor: "email" },
  { header: "Phone", accessor: "phone" },
  { header: "DOB", accessor: "dob" },
  { header: "Gender", accessor: "gender" },
  { header: "Role", accessor: "role" },
  {
    header: "Annual Income",
    accessor: (row) => `₹ ${row.annualIncome.toLocaleString()}`,
  },
  {
    header: "Newsletter",
    accessor: (row) => (row.receiveNewsletter ? "Yes" : "No"),
  },
  {
    header: "Actions",
    accessor: (row) => (
      <div className="flex gap-2">
        <Link href={`/user/${row.name}`}>
          <span title="Details" className="cursor-pointer">
            <FontAwesomeIcon icon={faEye} />
          </span>
        </Link>
        <Link href={`/user/${row.name}/edit`}>
          <span title="Edit" className="cursor-pointer">
            <FontAwesomeIcon icon={faEdit} />
          </span>
        </Link>
        <button
          title="Delete"
          className="cursor-pointer text-red-500"
          onClick={() => alert(`Delete user: ${row.name}`)}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    ),
  },
];
