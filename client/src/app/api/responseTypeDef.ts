// type def for API response
export type APIResponse<T> = {
    status: number;
    message?: string;
    data?: T;
    error?: string;
};