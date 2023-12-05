import User from "@/db/models/user";
import { NextResponse } from "next/server";
import { UserModel } from "@/db/models/user";

// type def for API response
type APIResponse<T> = {
    status: number;
    message?: string;
    data?: T;
    error?: string;
};

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