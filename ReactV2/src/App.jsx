import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import CardSection from "./Components/CardSection/CardSection";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <CardSection />
      <CardSection />
      <Footer />
    </>
  );
}

export default App;
