"use client";

import { ColumnDef } from "@tanstack/react-table";

export type OrderColumn = {
    id: string;
    phone: string;
    address: string;
    products: string;
    isPaid: boolean;
    totalPrice: string;
    createdAt: string;
    name: string;
};

export const columns: ColumnDef<OrderColumn>[] = [
    {
        accessorKey: "address",
        header: "Address",
    },
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "phone",
        header: "Phone",
    },
    {
        accessorKey: "products",
        header: "Products",
    },
    {
        accessorKey: "isPaid",
        header: "Paid",
        cell: ({ row }) =>
            row.original.isPaid ? (
                <div className=" flex items-center justify-center bg-background bg-green-600 w-min px-4 py-1 rounded-full text-white font-semibold">
                    <p>Paid</p>
                </div>
            ) : (
                <div className=" flex items-center justify-center bg-background bg-red-600 w-min px-4 py-1 rounded-full text-white font-semibold">
                    <p>Unpaid</p>
                </div>
            ),
    },
    {
        accessorKey: "totalPrice",
        header: "Total Price",
    },
    {
        accessorKey: "createdAt",
        header: "Date",
    },
];
