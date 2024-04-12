import { getTotalRevenue } from "@/actions/get-total-revenue";
import Heading from "@/components/custom/heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import prismadb from "@/lib/prismadb";
import { formatter } from "@/lib/utils";
import { CreditCard, DollarSign, Package2 } from "lucide-react";
import React from "react";

interface DashboardPageProps {
    params: { storeId: string };
}

const DashboardPage: React.FC<DashboardPageProps> = async ({ params }) => {
    const totalRevenue = await getTotalRevenue(params.storeId);
    const salesCount = () => {};
    const stockCount = () => {};

    return (
        <div className=" flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <Heading title="Dashboard" description="Overview your store" />
                <Separator />
                <div className=" grid gap-4 grid-cols-6">
                    <Card className=" p-3">
                        <CardHeader className="flex flex-row items-center justify-between p-2 space-y-0">
                            <CardTitle className="text-md font-medium">
                                Total Revenue
                            </CardTitle>
                            <DollarSign className=" w-4 h-4 text-muted-foreground" />
                        </CardHeader>
                        <Separator />
                        <CardContent className=" p-2">
                            <div className=" text-2xl font-bold">
                                {formatter.format(totalRevenue)}
                            </div>
                        </CardContent>
                    </Card>
                    <Card className=" p-3">
                        <CardHeader className="flex flex-row items-center justify-between p-2 space-y-0">
                            <CardTitle className="text-md font-medium">
                                Sales
                            </CardTitle>
                            <CreditCard className=" w-4 h-4 text-muted-foreground" />
                        </CardHeader>
                        <Separator />
                        <CardContent className=" p-2">
                            <div className=" text-2xl font-bold">+25</div>
                        </CardContent>
                    </Card>
                    <Card className=" p-3">
                        <CardHeader className="flex flex-row items-center justify-between p-2 space-y-0">
                            <CardTitle className="text-md font-medium">
                                Products In Stock
                            </CardTitle>
                            <Package2 className=" w-4 h-4 text-muted-foreground" />
                        </CardHeader>
                        <Separator />
                        <CardContent className=" p-2">
                            <div className=" text-2xl font-bold">+25</div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
