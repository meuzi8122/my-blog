"use client";

type Props = {
    error: Error;
    reset: () => void;
}

export default ({ error, reset }: Props) => {

    return (
        <div>
            <p>ページ読み込みエラー</p>
        </div>
    )

}