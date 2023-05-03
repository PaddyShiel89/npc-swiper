// Load global stylesheet first to avoid NextJS bug where global styles override
// component styles.
//
// See https://github.com/vercel/next.js/issues/16630#issuecomment-1225265272
import "@/styles/globals.scss";

import MainLayout from "@/layouts/Main/Main";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
