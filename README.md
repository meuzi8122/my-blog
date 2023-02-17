自分用タブ譜リンクのまとめ

## メモ

### ErrorBoundary (React)
- 子コンポーネントのエラーを検知して、代わりの画面を描画するコンポーネント
- `React.ErrorBoundary`が提供されているわけではない
    - クラスコンポーネントとして自分で実装する

### ErrorBoundary (Next.js)
- error.tsxを実装するとErrorBoundaryが自動生成される
    - error.tsxの内容がErrorBoundaryの`fallback`のコンポーネントになる
    - page.tsxのコンポーネントを子コンポーネントとする
- 自分でErrorBoundaryコンポーネントを実装するとエラーになる

### Chakra UI
- クライアントコンポーネントとして扱わないとエラー