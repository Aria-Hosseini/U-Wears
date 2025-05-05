import { NextResponse } from "next/server";
import prisma from "../../_data/lib/prisma";

export async function GET() {
  try {
    const products = await prisma.product.findMany();
    return NextResponse.json(products);
  } catch {
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
