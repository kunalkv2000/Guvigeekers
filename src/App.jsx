import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Modalimg from "./components/Modal";
import Home from "./Pages/Home";
import Movies from "./Pages/Movies";
import Favs from "./Pages/Fav";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" Component={() => <Home />} />
        <Route path="/Home" Component={() => <Home />} />
        <Route path="/Movies" Component={() => <Movies />} />
        <Route path="/Favs" Component={() => <Favs />} />
        <Route path="/Help" Component={() => <HelpFAQ />} />
        <Route path="/Modalimg" Component={() => <Modalimg />} />
        <Route path="/Contact" Component={() => <Contact />} />
        <Route
          path="/orderconfirmation"
          Component={() => <OrderConfirmation />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
