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
};

export const columns: ColumnDef<OrderColumn>[] = [
    {
        accessorKey: "address",
        header: "Address",
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
