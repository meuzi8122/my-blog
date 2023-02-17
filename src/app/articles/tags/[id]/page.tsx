import ArticleList from "@/components/list/article";
import { Container, Heading, Text } from "@/components/shared";
import { findArticles } from "@/libs/client/article";
import { getTag } from "@/libs/client/tag";
import { Suspense } from "react";

type Props = {
    params: {
        id: string;
    }
}

export default async ({ params: { id } }: Props) => {

    const tag = await getTag(id);

    const articles = await findArticles({ type: "TAG", value: id });

    return (
        <Container as="main" maxW="container.lg" marginTop="4" marginBottom="16">
            <Suspense fallback={<Text>loading..</Text>}>
                <Heading as="h2" fontSize="2xl" fontWeight="bold" mb="8">{`タグ「${tag.name}」の記事`}</Heading>
                <ArticleList articles={articles} />
            </Suspense>
        </Container>
    );

}