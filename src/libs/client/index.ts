import { createClient } from "microcms-js-sdk";

const client = createClient({
    serviceDomain: process.env.SERVICE_DOMAIN as string,
    apiKey: process.env.API_KEY as string
});

export async function findContents(params: { endpoint: string, filters: string, fields: string, limit: number }) {
    const { endpoint, fields, filters, limit } = params;
    return (await client.get({
        endpoint,
        queries: {
            fields,
            filters,
            limit
        }
    })).contents;
}

export async function getContent(params: { endpoint: string, contentId: string, fields: string }) {
    const { endpoint, contentId, fields } = params;
    return await client.get({
        endpoint,
        contentId,
        queries: {
            fields
        }
    });
}

export async function findContentIds(endpoint: string): Promise<String[]> {
    return (await findContents({ endpoint, filters: "", fields: "id", limit: 100 })).map((content: any) => content.id);
}
