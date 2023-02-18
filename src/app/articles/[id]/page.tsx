import { Heading, VStack } from "@/components/shared";
import { ARTICLE_ENDPOINT, client, parseArticle } from "@/libs/client";
import type { Article } from "@/types";

type Props = {
    params: {
        id: string;
    }
}

export default async ({ params: { id } }: Props) => {

    const article = await getArticle(id);

    return (
        <>
            <VStack spacing={2}>
                <Heading>{article.title}</Heading>
                <div dangerouslySetInnerHTML={{ __html: article.body! }}></div>
            </VStack>
        </>
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
            fields: "id,title,body,tags",
        },
    }));
}