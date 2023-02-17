import type { Tag } from "@/types";
import { findContents } from ".";

function parseTag(content: any): Tag {
    return {
        id: content.id,
        name: content.name
    }
}

export async function findTags(): Promise<Tag[]> {
    return (await findContents({ endpoint: "tags", filters: "", fields: "id,name", limit: 10 })).map((content: any) => parseTag(content));
}