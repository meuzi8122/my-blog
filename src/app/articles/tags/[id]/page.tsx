import ArticleList from "@/components/list/article";
import { Container, Heading, Text } from "@/components/shared";
import { client, parseArticle, parseTag, TAG_ENDPOINT } from "@/libs/client";
import type { Article, Tag } from "@/types";
import { Suspense } from "react";

type Props = {
    params: {
        id: string;
    }
}

export default async ({ params: { id } }: Props) => {

    const tag = await getTag(id);

    const articles = await findArticles(id);

    return (
        <Container as="main" maxW="container.lg">
            <Suspense fallback={<Text>loading..</Text>}>
                <Heading as="h2" fontSize="lg" fontWeight="bold" mb="6">{`タグ「${tag.name}」の記事`}</Heading>
                <ArticleList articles={articles} />
            </Suspense>
        </Container>
    );

}

async function getTag(tagId: string): Promise<Tag> {
    return parseTag(await client.get({
        endpoint: TAG_ENDPOINT,
        contentId: tagId,
        queries: {
            fields: "id,name"
        },
    }));
}

async function findArticles(tagId: string): Promise<Article[]> {
    return (await client.get({
        endpoint: "articles",
        queries: {
            fields: "id,title,tags,revisedAt",
            filters: `tags[contains]${tagId}`,
            limit: 100
        }
    })).contents.map((content: any) => parseArticle(content));
}
