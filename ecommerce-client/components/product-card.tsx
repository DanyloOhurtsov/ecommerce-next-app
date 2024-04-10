"use client";

import { Product } from "@/types";
import Image from "next/image";
import IconButton from "./ui/icon-button";
import { Expand } from "lucide-react";

interface ProductCardProps {
    data: Product;
}

const ProductCard = ({ data }: ProductCardProps) => {
    return (
        <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
            {/*  */}
            <div className="aspect-square rounded-xl bg-gray-100 relative">
                <Image
                    src={data?.images[0]?.url}
                    alt="image"
                    fill
                    className="object-cover rounded-md"
                />
                <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 top-5">
                    <div className="flex gap-x-6 justify-end">
                        <IconButton
                            icon={<Expand size={20} />}
                            className="text-gray-600"
                            onClick={() => {}}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
