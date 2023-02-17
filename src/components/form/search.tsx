"use client";

import { Input } from "@/components/shared";
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
            <button onClick={navigate}></button>
        </>
    )

}