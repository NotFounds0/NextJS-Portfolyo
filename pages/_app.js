import { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <ClipLoader color="#36D7B7" size={50} />
        </div>
      ) : (
        <>
          <Component {...pageProps} />
          <ScrollToTopButton />
        </>
      )}
    </>
  );
}
