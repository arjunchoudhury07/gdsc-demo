import { type AppType } from "next/app";
import { api } from "@/utils/api";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className={inter.className}>
      <ClerkProvider {...pageProps}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ClerkProvider>
    </div>
  );
};

export default api.withTRPC(MyApp);
