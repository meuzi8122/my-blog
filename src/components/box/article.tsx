import { Badge, Box, Button, Divider, Heading, HStack, Text } from "@/components/shared";
import type { Article } from "@/types";
import NextLink from "next/link";

type Props = {
    article: Article;
}

export default ({ article }: Props) => {

    return (
        <Box>
            <NextLink href={`/articles/${article.id}`}>
                <Heading as="h3" fontSize="3xl" lineHeight={1.6} marginTop={1} flex={1}>{article.title}</Heading>
            </NextLink>
            <Text fontSize="xl" color="gray.500" mt={2} mb={1}>2022/1/1</Text>
            <HStack spacing={1}>
                {article.tags.map(tag =>
                    <NextLink key={tag.id} href={`/articles/tags/${tag.id}`}>
                        <Badge fontSize={17} textTransform="none" colorScheme="green">{tag.name}</Badge>
                    </NextLink>
                )}
            </HStack>
            <NextLink href={`/articles/${article.id}`}>
                <Button colorScheme='teal' variant='outline' size="sm" mt="8">
                    続きを読む
                </Button>
            </NextLink>
            <Divider color="gray.300" mt={10} mb={10} border="1px" />
        </Box>
    )

}