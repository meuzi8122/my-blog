import { Container, Heading, HStack, Stack, Text } from "@/components/shared";
import ArticleList from "@/components/list/article";
import TagBadge from "@/components/badge/tag";
import { ARTICLE_ENDPOINT, client, parseArticle } from "@/libs/client";
import type { Article } from "@/types";
import { Fragment, Suspense } from "react";

export default async () => {

    const articles = await findArticles();
    const tags = Array.from(new Set(articles.map(article => article.tags).flat()));

    return (
        <Container as="main" maxW="container.lg">
            <Stack spacing={2} mb={4}>
                <Heading as="h2" fontSize="lg" fontWeight="bold">全ての記事</Heading>
                <HStack spacing={5}>
                    <Text>タグ</Text>
                    <HStack spacing={1}>
                        {tags.map(tag =>
                            <Fragment key={tag.id}>
                                <TagBadge tag={tag} />
                            </Fragment>
                        )}
                    </HStack>
                </HStack>
            </Stack>
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
