export type ProductItemType = {
    _id: number,
    img: string;
    title: string;
    rating: number;
    price: number;
    description?: string;
    discount?: number
}

export type UserType = {
    _id: number,
    img: string | null;
    username: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    address: string | null;
    cartId: number | null;
    

}