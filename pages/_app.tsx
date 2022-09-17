import "../styles/globals.css";

import type { AppProps } from "next/app";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

import "react-reflex/styles.css";
import "antd/dist/antd.css";
import wrapper from "reducers/store";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
