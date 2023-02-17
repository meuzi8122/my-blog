export type Article = {
    id: string;
    title: string;
    body?: string;
    tags: Tag[];
}

export type Tag = {
    id: string;
    name: string;
}