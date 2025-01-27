import React from "react";
import Navbar from "../../components/Navbar";
import WebComponents from "./WebComponents";

const Index = () => {
  return (
    <>
      <div className="relative">
        <Navbar />
        <main>
          <WebComponents />
        </main>
      </div>
    </>
  );
};

export default Index;
