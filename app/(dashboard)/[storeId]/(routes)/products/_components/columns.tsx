"use client";

import { ColumnDef } from "@tanstack/react-table";
import CellAction from "./cell-actions";
import { Color } from "@prisma/client";

export type ProductColumn = {
    id: string;
    name: string;
    price: string;
    size: string;
    color: Color;
    category: string;
    isFeatured: boolean;
    isArchived: boolean;
    createdAt: string;
};

export const columns: ColumnDef<ProductColumn>[] = [
    {
        accessorKey: "name",
        header: "Name",
        cell: ({ row }) => <p className="">{row.original.name}</p>,
    },
    {
        accessorKey: "isArchived",
        header: "Archived",
        cell: ({ row }) => (
            <p className="">{row.original.isArchived ? "Archived" : "-"}</p>
        ),
    },
    {
        accessorKey: "isFeatured",
        header: "Featured",
        cell: ({ row }) => (
            <p className="">{row.original.isFeatured ? "Featured" : "-"}</p>
        ),
    },
    {
        accessorKey: "price",
        header: "Price",
    },
    {
        accessorKey: "category",
        header: "Category",
        cell: ({ row }) => <p className="truncate">{row.original.category}</p>,
    },
    {
        accessorKey: "size",
        header: "Size",
        cell: ({ row }) => (
            <p className="truncate min-w-12 flex justify-center items-center p-0.5 bg-orange-400 bg-background rounded-md text-white w-fit">
                {row.original.size}
            </p>
        ),
    },
    {
        accessorKey: "color",
        header: "Color",
        cell: ({ row }) => (
            <div className="flex items-center gap-x-2">
                <div
                    className="h-6 w-6 rounded-full"
                    style={{ backgroundColor: row.original.color.value }}
                />
                <p className="truncate">{row.original.color.name}</p>
            </div>
        ),
    },
    {
        accessorKey: "createdAt",
        header: "Date",
        cell: ({ row }) => (
            <p className="truncate">{row.original.createdAt}</p>
        ),
    },
    {
        id: "actions",
        cell: ({ row }) => <CellAction data={row.original} />,
    },
];
