export interface Product {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: {
        width: number;
        height: number;
        depth: number;
    };
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: Review[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: {
        createdAt: string;
        updatedAt: string;
        barcode: string;
        qrCode: string;
    };
    images: string[];
    thumbnail: string;
    quantity?: number;
}

export interface Review {
    rating: number;
    comment: string;
    reviewerName: string;
    reviewerEmail: string;
}

export interface ProductList {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
}

export type User = {
    id: string;
    email: string;
    firstName: string;
    lastSeen: number;
    role: "student" | "admin" | "teacher";
    preferredLanguage: string;
    created: string;
    modified: string;
};

export type Cartitems = Record<string, number>;

export interface AlertProps {
    type?: "success" | "error" | "info" | "warning";
    message?: string;
    onDismiss?: () => void;
    fading?: boolean;
}

export type ProductCardProps = {
    id: number;
    title: string;
    category: string;
    price: number;
    discountPercentage: number;
    thumbnail: string;
    rating: number;
    contextIdList: number[];
};