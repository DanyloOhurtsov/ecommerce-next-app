import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";

import prismadb from "@/lib/prismadb";
import { useRouter } from "next/navigation";

export async function GET(
    req: Request,
    { params }: { params: { sizeId: string } }
) {
    try {
        console.log(params.sizeId);
        if (!params.sizeId) {
            return new NextResponse("Size ID is required", {
                status: 400,
            });
        }

        const size = await prismadb.size.findUnique({
            where: {
                id: params.sizeId,
            },
        });
        console.log(params.sizeId);
        return NextResponse.json(size);
    } catch (error) {
        console.log("[SIZE_GET]", error);
        return new NextResponse("Internal error", { status: 500 });
    }
}

export async function PATCH(
    req: Request,
    { params }: { params: { sizeId: string; storeId: string } }
) {
    try {
        const { userId } = auth();
        const body = await req.json();

        const { name, value } = body;

        if (!userId) {
            return new NextResponse("Unauthenticated", { status: 403 });
        }

        if (!name) {
            return new NextResponse("Size name is required", { status: 400 });
        }
        if (!value) {
            return new NextResponse("Size value is required", { status: 400 });
        }

        if (!params.sizeId) {
            return new NextResponse("Size ID is required", {
                status: 400,
            });
        }

        const storeByUserId = await prismadb.store.findFirst({
            where: {
                id: params.storeId,
                userId,
            },
        });

        if (!storeByUserId) {
            return new NextResponse("Unauthorized", { status: 403 });
        }

        const size = await prismadb.size.updateMany({
            where: {
                id: params.sizeId,
            },
            data: {
                name,
                value,
            },
        });

        return NextResponse.json(size);
    } catch (error) {
        console.log("[SIZE_PATCH]", error);
        return new NextResponse("Internal error", { status: 500 });
    }
}

export async function DELETE(
    req: Request,
    { params }: { params: { storeId: string; sizeId: string } }
) {
    try {
        const { userId } = auth();
        console.log(params.sizeId);

        if (!userId) {
            return new NextResponse("Unauthenticated", { status: 403 });
        }

        if (!params.sizeId) {
            return new NextResponse("Size ID is required", {
                status: 400,
            });
        }

        const storeByUserId = await prismadb.store.findFirst({
            where: {
                id: params.storeId,
                userId,
            },
        });

        if (!storeByUserId) {
            return new NextResponse("Unauthorized", { status: 403 });
        }

        const size = await prismadb.size.deleteMany({
            where: {
                id: params.sizeId,
            },
        });

        return NextResponse.json(size);
    } catch (error) {
        console.log("[SIZE_DELETE]", error);
        return new NextResponse("Internal error", { status: 500 });
    }
}
