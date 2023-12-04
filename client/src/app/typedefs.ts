interface User {
    name?: string,
    username: string,
    email: string,
    password: string
}

interface Product {
    name: string,
    slug: string,
    description?: string,
    excerpt?: string,
    price?: number,
    tags?: string[],
    thumbnail?: string,
    images?: string[],
    createdAt?: Date | string,
    updatedAt?: Date | string
}

interface Wishlist {
    createdAt?: Date | string,
    updatedAt?: Date | string
}