import { Heading, VStack } from "@/components/shared";
import { findContentIds } from "@/libs/client";
import { getArticle } from "@/libs/client/article";

type Props = {
    params: {
        id: string;
    }
}

export default async ({ params: { id } }: Props) => {

    const article = await getArticle(id);

    return (
        <VStack spacing={2}>
            <Heading>{article.title}</Heading>
            <div dangerouslySetInnerHTML={{ __html: article.body! }}></div>
        </VStack>
    )

}

export const generateStaticParams = async () => {
    return (await findContentIds("articles")).map(id => ({ id }));
}