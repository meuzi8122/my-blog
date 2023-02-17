import ArticleList from "@/components/list/article";
import { Container, Heading } from "@/components/shared";
import { findArticles } from "@/libs/client/article";

type Props = {
    params: {
        id: string;
    }
}

export default async ({ params: { id } }: Props) => {

    const articles = await findArticles({ type: "TAG", value: id });

    return (
        <Container as="main" maxW="container.lg" marginTop="4" marginBottom="16">
            <Heading as="h2" fontSize="2xl" fontWeight="bold" mb="8">タグ「{id}」の記事</Heading>
            <ArticleList articles={articles} />
        </Container>
    );

}