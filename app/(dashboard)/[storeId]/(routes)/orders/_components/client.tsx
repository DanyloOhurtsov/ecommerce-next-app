"use client";

import { Heading } from "@/components/custom/components";
import { Separator } from "@/components/ui/separator";
import { useParams, useRouter } from "next/navigation";
import { OrderColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";

interface OrderClientProps {
    data: OrderColumn[];
}

const OrderClient = ({ data }: OrderClientProps) => {
    const router = useRouter();
    const params = useParams();

    return (
        <>
            <Heading
                title={`Orders (${data.length})`}
                description="Manage orders for your store"
            />
            <Separator />
            <DataTable columns={columns} data={data} searchKey="products" />
        </>
    );
};

export default OrderClient;
