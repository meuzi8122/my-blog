import SearchForm from "@/components/form/search";
import { findTags } from "@/libs/client/tag";
import NextLink from "next/link";


export default async () => {

    const tags = await findTags();

    return (
        <>
            <SearchForm />
            {tags.map(tag =>
                <NextLink href={`/articles/tags/${tag.id}`}>
                    {tag.name}
                </NextLink>
            )}
        </>
    )

}