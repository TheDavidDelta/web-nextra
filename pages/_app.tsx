import { AppProps } from "next/app";
import { FC } from "react";
import "nextra-theme-blog/style.css";

const App: FC<AppProps> = ({ Component, pageProps }) => (
    <Component {...pageProps} />
);

export default App;
