import { createClient } from "microcms-js-sdk";
import type { Article, Tag } from "@/types";

export const client = createClient({
    serviceDomain: process.env.SERVICE_DOMAIN as string,
    apiKey: process.env.API_KEY as string
});

export const ARTICLE_ENDPOINT = "articles";

export function parseArticle(content: any): Article {
    const revisedAt = new Date(content.revisedAt);
    return {
        id: content.id,
        title: content.title,
        body: content.body,
        tags: content.tags,
        revisedAt: `${revisedAt.getFullYear()}/${revisedAt.getMonth() + 1}/${revisedAt.getDate()}`
    }
}

export const TAG_ENDPOINT = "tags";

export function parseTag(content: any): Tag {
    return {
        id: content.id,
        name: content.name
    }
}
