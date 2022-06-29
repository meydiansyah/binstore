import { store, persistor } from "@/core/redux/store";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { NextUIProvider } from "@nextui-org/react";
import Toast from "@/components/Toast";
import NextNProgress from "nextjs-progressbar";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <NextUIProvider>
        <NextNProgress />
        <Component {...pageProps} />
        <Toast />
      </NextUIProvider>
    </PersistGate>
  </Provider>
);

export default MyApp;
