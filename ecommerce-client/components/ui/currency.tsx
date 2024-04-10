"use client";

import { formatter } from "@/lib/utils";
import React, { useEffect, useState } from "react";

interface CurrencyProps {
    value?: string | number;
}

const Currency = ({ value }: CurrencyProps) => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);
    if (!isMounted) return null;

    const numericValue: number = value ? parseFloat(value.toString()) : 0;

    return (
        <div className="font-semibold">{formatter.format(numericValue)}</div>
    );
};

export default Currency;
