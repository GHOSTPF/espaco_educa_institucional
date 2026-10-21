import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IntroSplash from "@/components/IntroSplash";
import PageTransition from "@/components/PageTransition";
import Home from "@/pages/Home";
import PrivacyPolicy from "@/pages/PrivacyPolicy";

/**
 * Ao navegar, rola até a âncora da URL (ex.: /#sobre) ou volta ao topo
 * quando não há âncora. Depende de `key` para reagir a cliques repetidos
 * no mesmo link.
 */
function ScrollManager() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash) {
      document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash, key]);

  return null;
}

export default function App() {
  const { pathname } = useLocation();

  return (
    <>
      <ScrollManager />
      <IntroSplash />
      <Navbar />
      <main className="flex-1">
        {/* key por rota: remonta a transição a cada navegação, como o template.tsx do Next */}
        <PageTransition key={pathname}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </PageTransition>
      </main>
      <Footer />
    </>
  );
}
