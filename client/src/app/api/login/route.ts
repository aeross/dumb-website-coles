import { NextResponse } from "next/server";
import { APIResponse } from "../responseTypeDef";
import User, { UserModelLoginInput } from "@/db/models/user";

export async function POST(request: Request) {
    const input: UserModelLoginInput = await request.json();
    await User.login(input);

    return NextResponse.json<APIResponse<unknown>>({
        status: 200,
    })
}