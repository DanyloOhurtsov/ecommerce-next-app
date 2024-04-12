"use client";

import { ColumnDef } from "@tanstack/react-table";
import CellAction from "./cell-actions";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

export type ColorColumn = {
    id: string;
    name: string;
    value: string;
    createdAt: string;
};

const onCopy = (value: string) => {
    navigator.clipboard.writeText(value);
    toast.success('Color copied')
};
export const columns: ColumnDef<ColorColumn>[] = [
    {
        accessorKey: "name",
        header: "Name",
        cell: ({ row }) => (
            <div className="flex gap-x-2 items-center">
                <div
                    className="w-6 h-6 rounded-full border"
                    style={{ backgroundColor: row.original.value }}
                />
                <p>{row.original.name}</p>
            </div>
        ),
    },
    {
        accessorKey: "value",
        header: "Value",
        cell: ({ row }) => (
            <Button
                onClick={() => onCopy(row.original.value)}
                variant={"ghost"}
                className="px-1.5 h-6 min-w-24 w-min flex items-center rounded-md text-left cursor-pointer"
                style={{ border: `2px solid ${row.original.value}` }}
            >
                <p>{row.original.value.toUpperCase()}</p>
            </Button>
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
