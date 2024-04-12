"use client";

import * as React from "react";
import { Check, ChevronsUpDown, PlusCircle, Store } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { useStoreModal } from "@/hooks/use-store-modal";
import { useParams, useRouter } from "next/navigation";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";

type PopoverTriggerProps = React.ComponentPropsWithoutRef<
    typeof PopoverTrigger
>;

interface StoreSwitcherProps extends PopoverTriggerProps {
    items: Record<string, any>[];
}

export default function StoreSwitcher({
    className,
    items = [],
}: StoreSwitcherProps) {
    const [searchValue, setSearchValue] = React.useState("");

    const storeModal = useStoreModal();
    const params = useParams();
    const router = useRouter();

    const formattedItems = items.map((item) => ({
        label: item.name,
        value: item.id,
    }));

    const filteredItems = formattedItems.filter((item) =>
        item.label.toLowerCase().includes(searchValue.toLowerCase())
    );

    const currentStore = formattedItems.find(
        (item) => item.value === params.storeId
    );

    const [open, setOpen] = React.useState(false);

    const onStoreSelect = (store: { value: string; label: string }) => {
        setOpen(false);
        router.push(`/${store.value}`);
    };

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    size="sm"
                    role="combobox"
                    aria-expanded={open}
                    aria-label="Select a store"
                    className={cn("w-[200px] justify-between", className)}
                >
                    <Store className="mr-2 h-4 w-4" />
                    <p className="truncate">{currentStore?.label}</p>
                    <ChevronsUpDown className="ml-auto h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                {!!formattedItems.length ? (
                    <div className="w-full p-2">
                        <Input
                            placeholder="Search store"
                            className="focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0"
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                        />
                        <Separator className="my-2" />
                        {!!filteredItems.length ? (
                            <div className="flex flex-col w-full gap-y-2">
                                {filteredItems.map((item) => (
                                    <Button
                                        key={item.value}
                                        variant={"ghost"}
                                        onClick={() => onStoreSelect(item)}
                                    >
                                        <Store className="mr-2 h-4 w-4" />
                                        <p className="truncate">{item.label}</p>
                                        <Check
                                            className={cn(
                                                "ml-auto h-4 w-4",
                                                currentStore?.value ===
                                                    item.value
                                                    ? "opacity-100"
                                                    : "opacity-0"
                                            )}
                                        />
                                    </Button>
                                ))}
                            </div>
                        ) : (
                            <p className="text-center text-sm font-semibold text-primary">
                                No stores found
                            </p>
                        )}
                        <Separator className="my-2" />
                        <Button
                            className="w-full text-primary"
                            variant={"main"}
                            onClick={() => {
                                setOpen(false);
                                storeModal.onOpen();
                            }}
                        >
                            <PlusCircle className="mr-2 h-5 w-5" />
                            Create Store
                        </Button>
                    </div>
                ) : (
                    <div>
                        <p>No stores found</p>
                    </div>
                )}
            </PopoverContent>
        </Popover>
    );
}
