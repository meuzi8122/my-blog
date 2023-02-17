import Header from "@/components/layout/header";
import Provider from "@/components/layout/provider";

type Props = {
  children: React.ReactNode;
}

export default ({ children }: Props) => {
  return (
    <html>
      <head />
      <body>
        <Provider>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  )
}
