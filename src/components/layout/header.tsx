import { Box, Flex, Heading } from "@/components/shared";
import NextLink from "next/link";


export default () => {

    return (
        <Box as="header">
            <Flex
                bg="white"
                color="gray.600"
                minH="60px"
                py={{ base: 2 }}
                px={{ base: 4 }}
                mb={{ base: 6 }}
                borderBottom={1}
                borderStyle="solid"
                borderColor="gray.200"
                align="center"
            >
                <Flex flex={1} justify="space-between" maxW="5xl" mx="auto">
                    <Heading as="h1" size="lg">
                        <NextLink href="/">Meuzi's memo</NextLink>
                    </Heading>
                </Flex>
            </Flex>
        </Box>
    );

}