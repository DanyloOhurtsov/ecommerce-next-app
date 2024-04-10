interface Billboard {
    id: string;
    name: string;
    imageUrl: string;
}

interface Category {
    id: string;
    name: string;
    billboard: Billboard;
}
