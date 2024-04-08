"use client";

import { ColumnDef } from "@tanstack/react-table";
import CellAction from "./cell-actions";

export type SizeColumn = {
    id: string;
    name: string;
    value: string;
    createdAt: string;
};

export const columns: ColumnDef<SizeColumn>[] = [
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "value",
        header: "Value",
        cell: ({ row }) => (
            <p className="truncate min-w-12 flex justify-center items-center p-0.5 bg-orange-400 bg-background rounded-md text-white w-min">
                {row.original.value}
            </p>
        ),
    },
    {
        accessorKey: "createdAt",
        header: "Date",
    },
    {
        id: "actions",
        cell: ({ row }) => <CellAction data={row.original} />,
    },
];
