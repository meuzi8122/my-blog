import ArticleList from "@/components/list/article";
import { Container, Heading, Text } from "@/components/shared";
import { findArticles } from "@/libs/client/article";
import { Suspense } from "react";

export default async () => {

    const articles = await findArticles();

    return (
        <Container as="main" maxW="container.lg" marginTop="4" marginBottom="16">
            <Heading as="h2" fontSize="lg" fontWeight="bold" mb="8">最新記事</Heading>
            <Suspense fallback={<Text>loading..</Text>}>
                <ArticleList articles={articles} />
            </Suspense>
        </Container>
    );

}