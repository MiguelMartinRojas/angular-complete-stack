export class ProductStateModel {
    products: Product[];
}

export interface Product {
    name: string;
    price: number;
    quantity: number;
    description: string;
    imageUrl: string;
}

export class Pagination {
    first: string;
    last: string;
    prev: string;
    next: string;
}