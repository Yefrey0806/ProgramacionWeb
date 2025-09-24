import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import CardSection from "./components/CardSection/CardSection";
import AccordionSection from "./components/AccordionSection/AccordionSection";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [variable2, setVariable2] = useState("Sin Título");

  let variable1 = "Card One";

  return (
    <>
      <Header />

      <div id="contenedorBoton">
        <button onClick={() => setVariable2("Card Two")}>
          Cambiar Título Card 2
        </button>
      </div>

      <main>
        <CardSection data={{ title: variable1, content: "Contenido Card 1" }} />
        <CardSection data={{ title: variable2 }} />
        <AccordionSection />
      </main>

      <Footer />
    </>
  );
};

export default App;
