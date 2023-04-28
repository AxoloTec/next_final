import React from "react";
import Menu from "../components/Menu";
import Welcome from "../components/Welcome";


function Home() {
  return (
    <div className="home-container">
      <Menu />
      <div className="pagina">

        <Welcome />

      </div>
    </div>
  );
}

export default Home;