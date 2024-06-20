import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function GET(req){
    const path = req.nextUrl.searchParams.get("path");

    if(path){
        revalidatePath(path);
        return NextResponse.json({
            path,
            revalidated: true,
            now: Date.now()
        })
    }

    return NextResponse.json({
        revalidated: false,
        now: Date.now(),
        message: "Missing path to revalidate"
    })
}