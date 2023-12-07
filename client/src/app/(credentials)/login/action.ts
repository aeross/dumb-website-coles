"use server"
import User from "@/db/models/user"
import { z } from "zod";
import { redirect } from "next/navigation";
import { cookies } from "next/headers"


export async function doLogin(data: FormData | { email: string, password: string }) {
    let email: FormDataEntryValue | null = "";
    let password: FormDataEntryValue |null = "";
    if (data instanceof FormData) {
        email = data.get("email");
        password = data.get("password");
    } else {
        email = data.email;
        password = data.password;
    }
    
    const loginInputSchema = z.object({
        email: z.string().email(),
        password: z.string()
    })

    const parsedInput = loginInputSchema.safeParse({ email, password });
    if (!parsedInput.success) {
        const errPath = parsedInput.error.issues[0].path[0]
        const errMessage = parsedInput.error.issues[0].message

        return redirect(`/login?error=${errPath}-${errMessage}`)
    }

    // login user
    try {
        const token = await User.login({ email: parsedInput.data.email, password: parsedInput.data.password });
        cookies().set("token", token, {
            httpOnly: true,
            secure: false,
            expires: new Date(Date.now() + 1000 * 60 * 60 * 2), // 2 hours
            sameSite: "strict",
        });
    } catch (error) {
        console.log(error);
        if (error === "Invalid credentials") {
            return redirect(`/login?error=${error}`);
        } else {
            return redirect("/login?error=Internal server error");
        }
    }

    return redirect("/");
}