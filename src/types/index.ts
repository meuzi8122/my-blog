export type Article = {
    id: string;
    title: string;
    body?: string;
    tags: Tag[];
    revisedAt: string;
}

export type Tag = {
    id: string;
    name: string;
}