import { obtenerProductos } from "@/firebase";
import { NextResponse } from "next/server";

export async function GET(req){
    const productos = await obtenerProductos();

    return NextResponse.json(productos);
}