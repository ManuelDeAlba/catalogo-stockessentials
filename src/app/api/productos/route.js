import { obtenerProductos } from "@/firebase";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function GET(req){
    const productos = await obtenerProductos();

    return NextResponse.json(productos);
}