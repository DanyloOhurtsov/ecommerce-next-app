"use client";

import { Product } from "@/types";
import Currency from "./ui/currency";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { ShoppingBag } from "lucide-react";

interface InfoProps {
    data: Product;
}

const Info = ({ data }: InfoProps) => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
            <div className="mt-3 flex items-end justify-between">
                <Currency
                    value={data.price}
                    className="text-2xl text-gray-900"
                />
            </div>
            <Separator className="my-4" />
            <div className="flex flex-col gap-y-6">
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-black">Size:</h3>
                    <p>{data.size.name}</p>
                </div>
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-black">Color:</h3>
                    <div className="flex items-center gap-x-2">
                        <p>{data.color.name}</p>
                        <div
                            className="w-6 h-6 rounded-full"
                            style={{ backgroundColor: data.color.value }}
                        />
                    </div>
                </div>
            </div>
            <div className="mt-10 flex items-center gap-x-3">
                <Button className="flex items-center gap-x-2 rounded-full">
                    Add to Cart
                    <ShoppingBag className="w-6 h-6"/>
                </Button>
            </div>
        </div>
    );
};

export default Info;
