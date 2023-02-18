import { Heading, Stack, HStack, Text, Container } from "@/components/shared";
import TagBadge from "@/components/badge/tag";
import { ARTICLE_ENDPOINT, client, parseArticle } from "@/libs/client";
import type { Article } from "@/types";
import { Fragment } from "react";

type Props = {
    params: {
        id: string;
    }
}

export default async ({ params: { id } }: Props) => {

    const article = await getArticle(id);

    return (
        <Container>
            <Stack>
                <Heading mb={1}>{article.title}</Heading>
                <HStack spacing={3} mb={7}>
                    <Text>{article.revisedAt}</Text>
                    <HStack spacing={1}>
                        {article.tags.map(tag =>
                            <Fragment key={tag.id}>
                                <TagBadge tag={tag} />
                            </Fragment>
                        )}
                    </HStack>
                </HStack>
                <div dangerouslySetInnerHTML={{ __html: article.body! }}></div>
            </Stack>
        </Container>
    )

}

export async function generateStaticParams() {
    return (await client.get({
        endpoint: ARTICLE_ENDPOINT,
        queries: {
            fields: "id",
            limit: 100
        }
    })).contents.map((content: any) => ({ id: content.id }));
}

async function getArticle(articleId: string): Promise<Article> {
    return parseArticle(await client.get({
        endpoint: ARTICLE_ENDPOINT,
        contentId: articleId,
        queries: {
            fields: "id,title,body,tags,revisedAt",
        },
    }));
}