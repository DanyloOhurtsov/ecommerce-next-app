'use client'

import React, { useEffect, useState } from "react";
import { Heading } from "@/components/custom/components";
import { Separator } from "@/components/ui/separator";
import { OrderColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";

interface OrderClientProps {
    data: OrderColumn[];
}

const OrderClient: React.FC<OrderClientProps> = ({ data }) => {
    const [isPaid, setIsPaid] = useState(true);
    const [filteredData, setFilteredData] = useState<OrderColumn[]>([]);

    useEffect(() => {
        const filterData = () => {
            const filteredOrders = isPaid
                ? data.filter((order) => order.isPaid)
                : data;
            setFilteredData(filteredOrders);
        };
        filterData();
    }, [isPaid, data]);

    return (
        <>
            <Heading
                title={`Orders (${filteredData.length})`}
                description="Manage orders for your store"
            />
            <Separator />
            <DataTable
                columns={columns}
                data={filteredData}
                searchKey="products"
                setIsPaid={setIsPaid}
                isPaid={isPaid}
            />
        </>
    );
};

export default OrderClient;
