import ArticleList from "@/components/list/article";
import { Container, Heading } from "@/components/shared";
import { findArticles } from "@/libs/client/article";

export default async () => {

    const articles = await findArticles();

    return (
        <Container as="main" maxW="container.lg" marginTop="4" marginBottom="16">
            <Heading as="h2" fontSize="2xl" fontWeight="bold" mb="8">最新記事</Heading>
            <ArticleList articles={articles} />
        </Container>
    );

}