export interface Category{
    id: number;
    category: string;
    subcategory: string;
}

export interface SuggestedProduct{
    bannerimage: string;
    category: Category;
}

export interface NavigationItem{
    category: string;
    subcategories: string[];
}

export interface Category {
    id: number;
    category: string;
    subcategory: string;
}