"use client";

import { ChakraBaseProvider, extendBaseTheme } from "@chakra-ui/react";
import { Badge as BadgeTheme, Button as ButtonTheme, Container as ContainerTheme, Divider as DividerTheme, Heading as HeadingTheme } from "@chakra-ui/theme/components";

type Props = {
    children: React.ReactNode;
}

const theme = extendBaseTheme({
    components: {
        Button: ButtonTheme,
        Badge: BadgeTheme,
        Container: ContainerTheme,
        Divider: DividerTheme,
        Heading: HeadingTheme,
    },
});

export default ({ children }: Props) => {
    return (
        <ChakraBaseProvider theme={theme}>
            {children}
        </ChakraBaseProvider>
    )
}