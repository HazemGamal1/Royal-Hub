
export interface simplifiedProduct {
    imageUrl: string;
    price: number;
    categoryName: string;
    name: string;
    stock: number;
    slug: string,
    isOnSale: boolean
}
export interface fullProduct {
    _id: string;
    images: any;
    price: number;
    slug: string;
    categoryName: string;
    stock: number;
    name: string;
    description: string;

    isOnSale: boolean
}
export interface cartItem {
    _id: string,
    images: any;
    price: number;
    name: string;
    quantity: number;

}
export interface category {
    name: string,
    description: string
}