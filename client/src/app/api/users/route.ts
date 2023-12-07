import User, { UserModelCreateInput } from "@/db/models/user";
import { NextResponse } from "next/server";
import { APIResponse } from "../responseTypeDef";
import { ZodError } from "zod";
import { isAuthd } from "@/helpers/auth";
import JWTHelper from "@/helpers/jwt";
import { UserPayload } from "@/db/models/user";
import { cookies } from "next/headers";

// GET /api/user (get user that is currently logged in)
export const GET = async (request: Request) => {
    const userId = request.headers.get("x-user-id");
    if (!userId) {
        return new Response(
            null,
            { status: 204 }
        );
    }

    const data = await User.getUserById(userId);
    return NextResponse.json<APIResponse<unknown>>(
        // data sent to client
        { status: 200, data, message: "Hello from GET /api/users!" },
        // additional info (status code, headers, etc)
        { status: 200 } // default 200 
    );
};

// POST /api/users  <-- for register
export async function POST(request: Request) {
    try {
        const data: UserModelCreateInput = await request.json();
        const newUser = await User.register(data);
        return NextResponse.json<APIResponse<unknown>>({
            status: 201,
            message: "Hello from POST /api/users!",
            data: newUser
        }, {
            status: 201
        });
    } catch (error) {
        let status = 500, message = "Internal server error";
        if (error instanceof Error && error.message == "username - Username must be unique") {
            status = 400;
            message = error.message;
        }
        if (error instanceof ZodError) {
            status = 400;
            const errPath = error.issues[0].path[0];
            const errMessage = error.issues[0].message;
            message = `${errPath} - ${errMessage}`
        }
        return NextResponse.json<APIResponse<never>>({
            status,
            error: message
        }, { status })
    }
}