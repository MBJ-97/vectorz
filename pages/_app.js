import "../styles/globals.css";
import { Outfit } from "@next/font/google";

const outfit = Outfit({ subsets: ["latin"] });

function MyApp({ Component, pageProps }) {
  return (
    <div className={outfit.className}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
