import User from "@/db/models/user";
import { NextResponse } from "next/server";
import { UserModel } from "@/db/models/user";
import { APIResponse } from "../responseTypeDef";
import { ZodError } from "zod";

// GET /api/users
export const GET = async () => {
    const data = await User.getUsers();
    return Response.json(
        // data sent to client
        { data, message: "Hello from GET /api/users!" },
        // additional info (status code, headers, etc)
        { status: 200 } // default 200 
    );
};

// POST /api/users  <-- for register
export async function POST(request: Request) {
    try {
        const data = await request.json();
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