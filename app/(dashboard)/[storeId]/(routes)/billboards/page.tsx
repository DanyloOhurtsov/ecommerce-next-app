import { format } from "date-fns";
import prismadb from "@/lib/prismadb";
import { BillboardClient } from "./_components/components";
import { BillboardColumn } from "./_components/columns";

const BillboardsPage = async ({ params }: { params: { storeId: string } }) => {
    const billboards = await prismadb.billboard.findMany({
        where: { storeId: params.storeId },
        orderBy: { createdAt: "desc" },
    });

    const formattedBillboard: BillboardColumn[] = billboards.map((item) => ({
        id: item.id,
        label: item.label,
        createdAt: format(item.createdAt, "MMMM dd, yyyy"),
    }));

    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <BillboardClient data={formattedBillboard} />
            </div>
        </div>
    );
};

export default BillboardsPage;
