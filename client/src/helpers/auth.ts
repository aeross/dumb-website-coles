import { cookies } from "next/headers";

/**
 * Checks authentication by reading token value from cookies.
 * @returns token value (string), or an empty string if there is no token
 */
export function isAuthd() {
    const token = cookies().get("token");

    if (!token || token.value.length <= 0) {
        return "";
    }

    return token.value;
}