import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import { ContactsProvider } from "./context/ContactContext";

const App = () => {
  return (
    <ContactsProvider>
      <div className="bg-background min-w-screen min-h-screen text-text overflow-x-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:18px_24px] [mask-image:radial-gradient(ellipse_70%_80%_at_60%_0%,#000_70%,transparent_100%)]"></div>

        {/* Decorative blobs */}
        <div className="absolute top-0 left-0 w-96 h-100 bg-accent/50 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute bottom-0 right-0 w-96 h-100 bg-accent/50 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div className="relative pt-50">
          <Header />
          <HeroSection />
          <div
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 10%, 75% 65%, 0 10%)",
              background: "linear-gradient(135deg, #dddbff, #443dff)",
              height: "60px",
            }}
          ></div>
          <ContactSection />
          <Footer />
        </div>
      </div>
    </ContactsProvider>
  );
};

export default App;
