"use client";

import { Input, Stack } from "@/components/shared";
import type { Tag } from "@/types";
import { ChangeEvent, useState } from "react";

type Props = {
    tags: Tag[];
}

export default ({ tags }: Props) => {

    const [keyword, setKeyword] = useState<string>("");

    const handleKeywordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setKeyword(event.currentTarget.value);
    }

    return (
        <Stack spacing={2}>
            <Input value={keyword} onChange={handleKeywordChange} />
            {tags.map(tag =>
                <div key={tag.id}>
                    {tag.name}
                </div>
            )}
        </Stack>
    )
}