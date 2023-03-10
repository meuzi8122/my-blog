import { Box, Divider, Heading, HStack, Text } from "@/components/shared";
import TagBadge from "@/components/badge/tag";
import type { Article } from "@/types";
import NextLink from "next/link";
import { Fragment } from "react";

type Props = {
    article: Article;
}

export default ({ article }: Props) => {

    return (
        <Box>
            <NextLink href={`/articles/${article.id}`}>
                <Heading as="h3" fontSize="xl" lineHeight={1.6} mb={1} flex={1}>{article.title}</Heading>
            </NextLink>
            <Text fontSize="md" color="gray.500" mt={2} mb={1}>{article.revisedAt}</Text>
            <HStack spacing={1}>
                {article.tags.map(tag =>
                    <Fragment key={tag.id}>
                        <TagBadge tag={tag} colorTheme="orange" />
                    </Fragment>
                )}
            </HStack>
            <Divider color="gray.300" mt={3} mb={3} border="1px" />
        </Box>
    )

}