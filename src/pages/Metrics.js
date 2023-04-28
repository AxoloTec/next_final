import React from "react";
import Menu from "../components/Menu";
import Metrics from "../components/Metrics";


function Home() {
    return (
        <div className="home-container">
            <Menu />
            <div className="pagina">

                <Metrics />

            </div>
        </div>
    );
}

export default Home;