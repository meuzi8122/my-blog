import NextLink from "next/link";
import { Badge } from "@/components/shared";
import type { Tag } from "@/types";

type Props = {
    tag: Tag;
}

export default ({ tag }: Props) => {
    return (
        <NextLink key={tag.id} href={`/articles/tags/${tag.id}`}>
            <Badge fontSize="sm" textTransform="none" colorScheme="green">{tag.name}</Badge>
        </NextLink>
    )
}