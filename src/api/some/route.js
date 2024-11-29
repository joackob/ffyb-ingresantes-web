//esto se agrgaua luego de mandar ese comando por la terminal 

import { NextResponse } from "next/server";

export function GET() {
    return NextResponse.json('Hello world')
}