"use client";

import { IconButton, Input } from "@/components/shared";
import { SearchIcon } from "@/components/shared/icon";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

export default () => {

    const router = useRouter();

    const navigate = () => {
        router.push(`/articles?keyword=${keyword}`);
    }

    const [keyword, setKeyword] = useState<string>("");

    const handleKeywordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setKeyword(event.currentTarget.value);
    }

    return (
        <>
            <Input value={keyword} onChange={handleKeywordChange} />
            <IconButton aria-label="search" onClick={navigate}>
                <SearchIcon />
            </IconButton>
        </>
    )

}