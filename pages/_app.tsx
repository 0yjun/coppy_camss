import "../styles/globals.css";
import "../styles/antd.less";
import type { AppProps } from "next/app";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "react-reflex/styles.css";
import AppLayout from "../component/AppLayout";
import "antd/dist/antd.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
