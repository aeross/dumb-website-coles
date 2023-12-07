import { NextRequest, NextResponse } from "next/server";
import { APIResponse } from "./app/api/responseTypeDef";
import JWTHelper from "./helpers/jwt";
import { UserPayload } from "./db/models/user";
import { isAuthd } from "./helpers/auth";

// server auth
export async function middleware(request: NextRequest) {
    if (request.url.includes("/api")) {
        // get token from cookies
        const tokenVal = isAuthd();

        if (!tokenVal) {
            if (request.url.includes("/api/users") && request.method == "POST") {
                // this part is for register (POST /api/users)
                return NextResponse.next();
            }
            if (request.url.includes("/api/users") && request.method == "GET") {
                // this part is to get user's logged in info (GET /api/users)
                return NextResponse.next();
            }
            if (request.url.includes("/api/products") && request.method == "GET") {
                // GET /api/products does not require authentication
                return NextResponse.next();
            }
            
            return NextResponse.json<APIResponse<unknown>>(
                { status: 401, error: "You must log in first" }, 
                { status: 401 }
            );
        }

        // decode token
        const { payload } = await JWTHelper.joseDecode<UserPayload>(tokenVal);
        
        // send payload to headers
        const reqHeaders = new Headers(request.headers);
        reqHeaders.set("x-user-id", payload._id.toString());
        if (payload.name) reqHeaders.set("x-user-name", payload.name);
        reqHeaders.set("x-user-username", payload.username);
        reqHeaders.set("x-user-email", payload.email);
        return NextResponse.next({
            headers: reqHeaders
        })
    }

    return NextResponse.next();
}