"use client";

import { useState } from "react";
import ArticleBox from "@/components/box/article";
import { HStack, IconButton, Stack, Text, Center } from "@/components/shared";
import { Article } from "@/types";
import { Fragment } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "../shared/icon";

type Props = {
    articles: Article[];
}

export default ({ articles }: Props) => {

    const MAX_PAGE = Math.ceil(articles.length / 5);

    const [page, setPage] = useState(1);

    const INDEX = (page - 1) * 5;

    const forwardPage = () => {
        setPage(prevPage => prevPage >= MAX_PAGE ? prevPage : prevPage + 1);
    }

    const backPage = () => {
        setPage(prevPage => prevPage <= 1 ? prevPage : prevPage - 1);
    }

    return (
        <Stack spacing={4}>
            <Stack spacing={2}>
                {articles.slice(INDEX, INDEX + 5).map((article: any) =>
                    <Fragment key={article.id}>
                        <ArticleBox article={article} />
                    </Fragment>
                )}
            </Stack>
            <Center>
                <HStack spacing={2}>
                    <Text>{`${MAX_PAGE}ページ中${page}ページ目を表示`}</Text>
                    <IconButton aria-label="previous 5 articles" colorScheme="orange" onClick={backPage}>
                        <ChevronLeftIcon />
                    </IconButton>
                    <IconButton aria-label="next 5 articles" colorScheme="orange" onClick={forwardPage}>
                        <ChevronRightIcon />
                    </IconButton>
                </HStack>
            </Center>
        </Stack>
    );

}