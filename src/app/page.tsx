import ArticleList from "@/components/list/article";
import { Container, Heading, Text } from "@/components/shared";
import { ARTICLE_ENDPOINT, client, parseArticle } from "@/libs/client";
import type { Article } from "@/types";
import { Suspense } from "react";

export default async () => {

    const articles = await findArticles();

    return (
        <Container as="main" maxW="container.lg" mb={4} marginBottom="16">
            <Heading as="h2" fontSize="lg" fontWeight="bold" mb="8">最新記事</Heading>
            <Suspense fallback={<Text>loading..</Text>}>
                <ArticleList articles={articles} />
            </Suspense>
        </Container>
    );

}

async function findArticles(): Promise<Article[]> {
    return (await client.get({
        endpoint: ARTICLE_ENDPOINT,
        queries: {
            fields: "id,title,body,tags,revisedAt",
            limit: 100
        }
    })).contents.map((content: any) => parseArticle(content));
}
