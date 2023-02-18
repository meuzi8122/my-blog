"use client";

import { Text } from "@/components/shared";

type Props = {
    error: Error;
    reset: () => void;
}

export default ({ error, reset }: Props) => {

    return (
        <>
            <Text>ページ読み込みエラー</Text>
        </>
    )

}