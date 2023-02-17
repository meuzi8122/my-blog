import ArticleBox from "@/components/box/article";
import { Stack } from "@/components/shared";
import { Article } from "@/types";
import { Fragment } from "react";

type Props = {
    articles: Article[];
}

export default ({ articles }: Props) => {

    return (
        <Stack spacing={2}>
            {articles.map((article: any) =>
                <Fragment key={article.id}>
                    <ArticleBox article={article} />
                </Fragment>
            )}
        </Stack>
    );

}