import type { Article } from "@/types";
import { findContents, getContent } from ".";

function parseArticle(content: any): Article {
    return {
        id: content.id,
        title: content.title,
        body: content.body,
        tags: content.tags
    }
}

export async function findArticles(params?: { type: "TAG" | "KEYWORD"; value: string; }): Promise<Article[]> {

    let filters = "";

    if (params?.type === "TAG") {
        filters += `tag[contains]${params?.value}`;
    } else if (params?.type === "KEYWORD") {
        filters += `title[contains]${params?.value}[or]body[contains]${params?.value}`;
    }

    return (await findContents({ endpoint: "articles", filters, fields: "id,title,body,tags.id,tags.name", limit: 10 })).map((content: any) => parseArticle(content));

}

export async function getArticle(id: string): Promise<Article> {
    return parseArticle(await getContent({ endpoint: "articles", contentId: id, fields: "id,title,body,tags.id,tags.name" }));
}