"use client";

import { Heading } from "@/components/custom/components";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Billboard } from "@prisma/client";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { BillboardColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";

interface BillboardClientProps {
    data: BillboardColumn[];
}

const BillboardClient = ({ data }: BillboardClientProps) => {
    const router = useRouter();
    const params = useParams();

    return (
        <>
            <div className="flex items-center justify-between">
                <Heading
                    title={`Billboard (${data.length})`}
                    description="Manage billboards for your store"
                />
                <Button
                    onClick={() =>
                        router.push(`/${params.storeId}/billboards/new`)
                    }
                >
                    <Plus className="mr-2 h-4 w-4" />
                    Add new
                </Button>
            </div>
            <Separator />
            <DataTable columns={columns} data={data} searchKey="label" />
        </>
    );
};

export default BillboardClient;
