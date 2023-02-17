import ArticleList from "@/components/list/article";
import { Container, Heading, Text } from "@/components/shared";
import { findArticles } from "@/libs/client/article";
import { Suspense } from "react";

type Props = {
    searchParams: {
        keyword: string;
    }
}

export default async ({ searchParams: { keyword } }: Props) => {

    const articles = await findArticles({ type: "KEYWORD", value: keyword });

    return (
        <Container as="main" maxW="container.lg" marginTop="4" marginBottom="16">
            <Heading as="h2" fontSize="2xl" fontWeight="bold" mb="8">{`「${keyword}」を含む記事`}</Heading>
            <Suspense fallback={<Text>loading..</Text>}>
                <ArticleList articles={articles} />
            </Suspense>
        </Container>
    );

}