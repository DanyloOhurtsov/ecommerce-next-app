"use client";

import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { Button, Currency, Separator } from "@/components/components";
import useCart from "@/hooks/use-cart";
import toast from "react-hot-toast";

const Summary = () => {
    const searchParams = useSearchParams();
    const items = useCart((state) => state.items);
    const removeAll = useCart((state) => state.removeAll);

    const totalPrice = items.reduce((total, item) => {
        return total + Number(item.price);
    }, 0);

    useEffect(() => {
        if (searchParams.get("success")) {
            toast.success("payment completed");
            removeAll();
        }

        if (searchParams.get("canceled")) {
            toast.success("Something went wwong");
        }
    }, [removeAll, searchParams]);

    const onCheckout = async () => {
        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
            { productId: items.map((item) => item.id) }
        );

        window.location = response.data.url;
    };

    return (
        <div className=" my-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
            <h2 className=" text-lg font-medium text-gray-900">
                Order summary
            </h2>
            <Separator className=" my-4" />
            <div className="space-y-4">
                <div className=" flex items-center justify-between">
                    <p className=" text-base font-medium text-gray-900">
                        Order total
                    </p>
                    <Currency value={totalPrice} />
                </div>
            </div>
            <Button className="w-full mt-6 rounded-full" onClick={onCheckout}>
                Checkout
            </Button>
        </div>
    );
};

export default Summary;
